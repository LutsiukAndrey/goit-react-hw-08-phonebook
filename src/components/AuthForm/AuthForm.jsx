import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AuthForm = ({ cbOnSubmit, btnTitle, linkTitle, pathName }) => {
  const [formRegister, setFormRegister] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [formLogin, setFormLogin] = useState({ email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormRegister(prev => ({ ...prev, [name]: value }));
    setFormLogin(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (btnTitle === 'Registrate') {
      cbOnSubmit(formRegister);
      return;
    } else cbOnSubmit(formLogin);
  };
  console.log();
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        {btnTitle === 'Registrate' ? (
          <TextField
            label="enter your name"
            variant="outlined"
            type="text"
            name="name"
            value={formRegister.name}
            required
            onChange={handleChange}
          />
        ) : (
          ''
        )}

        <TextField
          label="enter your email"
          variant="outlined"
          type="text"
          name="email"
          value={formRegister.email}
          required
          onChange={handleChange}
        />
        <TextField
          label="enter your password"
          variant="outlined"
          type="password"
          name="password"
          value={formRegister.password}
          required
          onChange={handleChange}
        />

        <div>
          <Button variant="contained" type="submit">
            {btnTitle}
          </Button>
        </div>
      </form>
      <Link to={pathName}>{linkTitle}</Link>
    </FormContainer>
  );
};
const FormContainer = styled.div`
  margin-bottom: 40px;
  background-color: aqua;
`;
