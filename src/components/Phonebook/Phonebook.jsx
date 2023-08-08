import { Stack, Typography } from '@mui/material';
import Filter from 'components/Filter/Filter';
import { AddContact } from 'components/AddContact/AddContact';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from 'redux/auth/authThanks';
import { addNewContacts, fetchContacts } from 'redux/contacts/thanks';

export const Phonebook = () => {
  const dispatch = useDispatch();

  const { contactsStore } = useSelector(state => state);

  const isDuplicate = name => {
    return contactsStore.contacts.items.find(contact => contact.name === name);
  };

  const onHandleSubmit = data => {
    if (isDuplicate(data.name)) {
      alert(`this ${data.name} is already in your contacts!`);
      return;
    }
    dispatch(addNewContacts(data));
  };
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => dispatch(fetchContacts()));

    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <Stack width="100%" textAlign="center" spacing={4}>
      <Typography component="h2" fontSize={{ xs: 24, sm: 40 }}>
        Phonebook
      </Typography>
      <AddContact onSubmit={onHandleSubmit} />
      <Typography component="h2" fontSize={{ xs: 24, sm: 40 }}>
        Contacts
      </Typography>
      <Filter />
    </Stack>
  );
};
