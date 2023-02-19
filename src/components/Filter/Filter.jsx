import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/Contacts/filterSlice';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };

  return (
    <TextField
      id="outlined-search"
      label="Find contact"
      type="search"
      variant="filled"
      name="filter"
      value={filter}
      onChange={handleFilter}
    />
  );
};
