import { useDispatch, useSelector } from 'react-redux';
import { deleteApiContact } from 'redux/contacts/thanks';
import styled from 'styled-components';

import { Button, ListItem, Stack } from '@mui/material';
import { Delete } from '@mui/icons-material';

export const ContactList = () => {
  const dispatch = useDispatch();

  const { contacts, filter } = useSelector(state => state.contactsStore);

  const data = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  const onDeleteBtn = event => {
    dispatch(deleteApiContact(event.currentTarget.id));
  };

  if (data.length > 0) {
    return (
      <ul>
        {data.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              {name} : {number}
              <Button
                id={id}
                type="button"
                onClick={onDeleteBtn}
                variant="contained"
                startIcon={<Delete />}
              >
                Delete
              </Button>
            </ContactItem>
          );
        })}
      </ul>
    );
  }
};

const ContactItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;
