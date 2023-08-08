import { Box, Stack, Typography } from '@mui/material';
import { AuthForm } from 'components/AuthForm/AuthForm';

import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authThanks';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = form => {
    dispatch(registerUser(form));
  };
  return (
    <Stack
      p={{ xs: 2, sm: 10 }}
      spacing={{ xs: 1, sm: 2 }}
      alignItems="center"
      justifyContent="center"
    >
      <Typography>Regiter</Typography>
      <AuthForm
        cbOnSubmit={handleSubmit}
        btnTitle={'Registrate'}
        linkTitle={'Login'}
        pathName="/login"
      />
    </Stack>
  );
};
