import { useDispatch, useSelector } from 'react-redux';
import { deleteApiContact } from 'redux/contacts/thanks';
import styled from 'styled-components';

import {
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { Delete, Folder } from '@mui/icons-material';
import { cloneElement, useState } from 'react';

export const ContactList = () => {
  //
  function generate(element) {
    return [0, 1, 2].map(value =>
      cloneElement(element, {
        key: value,
      })
    );
  }

  const [secondary, setSecondary] = useState(true);
  //

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
      <>
        {/* <ul>
          {data.map(({ id, name, number }) => {
            return (
              <li key={id}>
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
              </li>
            );
          })}
        </ul> */}
        <List>
          {data.map(({ id, name, number }) => {
            return (
              <ListItem
                key={id}
                secondaryAction={
                  <IconButton
                    id={id}
                    edge="end"
                    aria-label="delete"
                    onClick={onDeleteBtn}
                  >
                    <Delete />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={'Name: ' + name}
                  secondary={'Number: ' + number}
                />
              </ListItem>
            );
          })}
        </List>
      </>
    );
  }
};
