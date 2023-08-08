import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/contactSlice';
import { Box, TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const { filter } = useSelector(state => state);

  const toFilteInput = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <Box component="form" action="input">
      <TextField
        label="filter"
        variant="outlined"
        type="text"
        name="name"
        value={filter}
        onChange={toFilteInput}
        fullWidth
      />
    </Box>
  );
};
export default Filter;
