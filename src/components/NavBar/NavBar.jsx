import {
  BottomNavigation,
  BottomNavigationAction,
  Breadcrumbs,
  Typography,
} from '@mui/material';
import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getIsAuth } from 'redux/auth/authSelectors';
import HomeIcon from '@mui/icons-material/Restore';
import ExpandMoreIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const NavBar = () => {
  const isAuth = useSelector(getIsAuth);

  return (
    <header>
      <NavLink to="/">Home</NavLink>
      {isAuth ? (
        <>
          <Link to="/contacts">Contacts</Link>
          <UserMenu />
        </>
      ) : (
        <>
          <Link to="/login">Sign in</Link>
        </>
      )}
    </header>
  );
};
