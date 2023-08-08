import { Box, Button, Modal, Stack, Typography, styled } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getIsAuth } from 'redux/auth/authSelectors';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';

import { ImportContacts, Logout } from '@mui/icons-material';
import { logoutUser } from 'redux/auth/authThanks';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';

const StyledModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fafafa3d',
});
const StyledBox = styled(Box)({
  backgroundColor: '#fafafaac',

  // display: 'flex',
  borderRadius: '20px',
  padding: '20px',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
  width: '50%',
  height: '50%',
});

const ModalMenu = ({ setModalToggle, modalToggle }) => {
  const dispatch = useDispatch();

  const handleClick = form => {
    dispatch(logoutUser(form));
  };

  const isAuth = useSelector(getIsAuth);
  return (
    <StyledModal
      open={modalToggle}
      onClose={() => setModalToggle(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox>
        <Stack spacing={5} alignItems="center">
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            startIcon={<HomeIcon />}
          >
            <NavLink to="/">
              <Typography color={'text.primary'}>Home</Typography>
            </NavLink>
          </Button>
          {isAuth ? (
            <Box spacing={4} alignItems="center">
              <Button
                fullWidth
                variant="contained"
                sx={{ marginBottom: '20px' }}
                startIcon={<ImportContacts />}
                color="secondary"
              >
                <Link to="/contacts">
                  <Typography color={'text.primary'}>Contacts</Typography>
                </Link>
              </Button>

              <Button
                fullWidth
                color="secondary"
                startIcon={<Logout />}
                variant="contained"
                onClick={handleClick}
              >
                <Typography color={'text.primary'}> Logout</Typography>
              </Button>
            </Box>
          ) : (
            <>
              <Button
                fullWidth
                color="secondary"
                variant="contained"
                startIcon={<LoginIcon />}
              >
                <Link to="/login">
                  <Typography color={'text.primary'}>Sign in</Typography>
                </Link>
              </Button>
            </>
          )}
          <ThemeSwitcher />
        </Stack>
      </StyledBox>
    </StyledModal>
  );
};

export default ModalMenu;
