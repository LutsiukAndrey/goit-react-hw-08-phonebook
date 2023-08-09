import { Box, Stack } from '@mui/material';
import { ContactList } from 'components/ContactList/ContactList';
import { Phonebook } from 'components/Phonebook/Phonebook';

export const ContactsPage = () => {
  return (
    <Stack
      p={{ xs: 2, sm: 10 }}
      spacing={{ xs: 1, sm: 2 }}
      alignItems="center"
      justifyContent="center"
    >
      <Phonebook />
      <ContactList />
    </Stack>
  );
};
