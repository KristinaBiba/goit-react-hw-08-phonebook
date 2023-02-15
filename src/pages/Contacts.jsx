
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { Section } from 'components/Section/Section';
import { ContactsInfo } from 'components/ContactsInfo/ContactsInfo';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError, getContacts } from 'redux/selectors';

function Contacts() {

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
  
    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
    return (
    <>
        <Section title="Phonebook">
        <ContactForm />
        </Section>
          
        <Section title="Contacts">
            <Filter />
            {isLoading && !error && contacts.length === 0 && <b style={{ paddingLeft: '12px', fontSize: '24px' }}>Request in progress...</b>}
            <ContactsInfo />
        </Section>
    </>);
}
export default Contacts;


  