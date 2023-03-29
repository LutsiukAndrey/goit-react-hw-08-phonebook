import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, TextField } from '@mui/material';

export const Form = ({ onSubmit }) => {
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
    <FormContainer>
      <form onSubmit={onSubmitForm}>
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
          sx={{ m: 1 }}
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
          sx={{ m: 1 }}
        />
        <div>
          <Button variant="contained" type="submit">
            Add Contact
          </Button>
        </div>
      </form>
    </FormContainer>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const FormContainer = styled.div`
  margin-bottom: 40px;
`;
const FormSubTitle = styled.p`
  margin-bottom: 30px;
`;
const FormInput = styled.input`
  width: 300px;
  padding: 10px 40px;
  border-radius: 20px;
  border: transparent;
  margin-bottom: 30px;
`;
const FormBtn = styled.button`
  border-radius: 20px;
  border: transparent;
  padding: 10px 25px;
  background-color: burlywood;
`;
