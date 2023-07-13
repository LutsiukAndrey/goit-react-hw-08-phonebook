import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getIsAuth } from 'redux/auth/authSelectors';

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
