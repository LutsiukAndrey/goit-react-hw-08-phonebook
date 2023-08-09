import { useState } from 'react';
import * as yup from 'yup';

import { Box, Button, Stack, TextField } from '@mui/material';
import { Formik } from 'formik';

export const AddContact = ({ onSubmit }) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    number: yup.number().required('Required'),
  });

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };
  // const onHandleChange = event => {
  //   const { name, value } = event.currentTarget;
  //   switch (name) {
  //     case 'name':
  //       setName(value);

  //       break;

  //     case 'number':
  //       setNumber(value);

  //       break;

  //     default:
  //       break;
  //   }
  // };
  const onSubmitForm = event => {
    console.log(event);
    // event.preventDefault();
    // // reset();
    // onSubmit({ name, number });
  };
  return (
    <Box>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validateOnBlur
        onSubmit={values => {
          onSubmit(values);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => {
          return (
            <Stack
              alignItems="center"
              component="form"
              onSubmit={handleSubmit}
              spacing={3}
            >
              <TextField
                label="enter name"
                variant="outlined"
                type="text"
                name="name"
                value={values.name}
                onBlur={handleBlur}
                // required
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={handleChange}
                fullWidth
              />
              {touched.name && errors.name && (
                <p className={'error'}>{errors.name}</p>
              )}
              <TextField
                label="enter number"
                variant="outlined"
                type="tel"
                name="number"
                onBlur={handleBlur}
                value={values.number}
                // required
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={handleChange}
                fullWidth
              />
              {touched.number && errors.number && (
                <p className={'error'}>{errors.number}</p>
              )}
              <Button
                disabled={!isValid && !dirty}
                variant="contained"
                type="submit"
                color={'secondary'}
              >
                Add Contact
              </Button>
            </Stack>
          );
        }}
      </Formik>
    </Box>
  );
};
