import { AppBar, Box, Button, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getIsAuth, getUserName } from 'redux/auth/authSelectors';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';

import { ImportContacts, Logout, Menu } from '@mui/icons-material';
import { logoutUser } from 'redux/auth/authThanks';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';

export const NavBar = ({ setModalToggle }) => {
  const handleClick = form => {
    dispatch(logoutUser(form));
  };

  const userName = useSelector(getUserName);

  const dispatch = useDispatch();

  const isAuth = useSelector(getIsAuth);

  return (
    <AppBar
      backgroundColor="primary"
      position="sticky"
      sx={{
        borderRadius: '20px 20px 0 0 ',
        padding: '10px',
      }}
    >
      <Menu
        sx={{ display: { xs: 'block', sm: 'none' }, cursor: 'pointer' }}
        onClick={() => {
          setModalToggle(true);
        }}
      />
      <Box
        display={{ xs: 'none', sm: 'flex' }}
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          startIcon={<HomeIcon />}
          sx={{ marginRight: '20px' }}
        >
          <NavLink to="/">
            <Typography color={'text.primary'}>Home</Typography>
          </NavLink>
        </Button>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row">
          {isAuth ? (
            <>
              <Typography color={'text.primary'} variant="h6">
                Hi {userName.name}!
              </Typography>
              <Button
                variant="contained"
                sx={{ marginRight: '20px' }}
                startIcon={<ImportContacts />}
                color="secondary"
              >
                <Link to="/contacts">
                  <Typography color={'text.primary'}>Contacts</Typography>
                </Link>
              </Button>

              <Button
                color="secondary"
                startIcon={<Logout />}
                variant="contained"
                onClick={handleClick}
              >
                <Typography color={'text.primary'}> Logout</Typography>
              </Button>
            </>
          ) : (
            <>
              <Button
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
          <Box display="flex" alignItems="center">
            <ThemeSwitcher />
          </Box>
        </Stack>
      </Box>
    </AppBar>
  );
};
