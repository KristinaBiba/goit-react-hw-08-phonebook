import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/Contacts/operations';
import { getIsLoading, getError, getContacts } from 'redux/selectors';
import { Section } from 'components/Section/Section';
import { ContactsInfo } from 'components/ContactsInfo/ContactsInfo';
import { Filter } from 'components/Filter/Filter';
import { ModalWindow } from 'components/Modal';
import { ContastsSkeleton } from 'components/ContastsSkeleton/ContastsSkeleton';

import { Button, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';

function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleOpenModal = () => {
    toggleModal();
  };

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const handleOpenFilter = () => {
    toggleFilter();
  };

  return (
    <>
      <Section>
        <Typography
          variant="h4"
          component="h2"
          style={{ textAlign: 'center', marginBottom: '12px' }}
        >
          My contacts
        </Typography>
        <div style={{ marginBottom: '12px' }}>
          <Button type="button" onClick={handleOpenModal}>
            <AddCircleIcon color="primary" fontSize="large" />
          </Button>
          <Button type="button" onClick={handleOpenFilter}>
            <SearchIcon color="primary" fontSize="large" />
          </Button>
        </div>
        {isFilterOpen && <Filter />}

        {isLoading && !error && contacts.length === 0 && 
        <ContastsSkeleton/>}

        <ContactsInfo />
      </Section>

      {isModalOpen && (
        <ModalWindow isModalOpen={isModalOpen} toggleModal={toggleModal} />
      )}
    </>
  );
}
export default Contacts;
