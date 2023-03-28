import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <header>
      <UserMenu />
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </div>
    </header>
  );
};
