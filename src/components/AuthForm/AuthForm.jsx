import { Button, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <Stack alignItems="center" spacing={{ xs: 1, sm: 2 }}>
      <Stack
        component="form"
        onSubmit={handleSubmit}
        spacing={{ xs: 1, sm: 2 }}
      >
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

        <Button color="secondary" variant="contained" type="submit">
          {btnTitle}
        </Button>
      </Stack>
      <Button color="secondary" variant="contained">
        <Link to={pathName}>
          <Typography color={'text.primary'}>{linkTitle}</Typography>
        </Link>
      </Button>
    </Stack>
  );
};
