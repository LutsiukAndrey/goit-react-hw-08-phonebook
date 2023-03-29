import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
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
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={onHandleSubmit} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
