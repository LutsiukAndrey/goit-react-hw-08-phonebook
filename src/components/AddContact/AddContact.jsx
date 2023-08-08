import { useState } from 'react';

import { Box, Button, Stack, TextField } from '@mui/material';

export const AddContact = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const reset = () => {
    setName('');
    setNumber('');
  };
  const onHandleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);

        break;

      case 'number':
        setNumber(value);

        break;

      default:
        break;
    }
  };
  const onSubmitForm = event => {
    event.preventDefault();
    reset();
    onSubmit({ name, number });
  };
  return (
    <Box>
      <Stack
        alignItems="center"
        component="form"
        onSubmit={onSubmitForm}
        spacing={3}
      >
        <TextField
          label="enter name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onHandleChange}
          fullWidth
        />
        <TextField
          label="enter number"
          variant="outlined"
          type="tel"
          name="number"
          value={number}
          required
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={onHandleChange}
          fullWidth
        />
        <Button variant="contained" type="submit" color={'secondary'}>
          Add Contact
        </Button>
      </Stack>
    </Box>
  );
};
