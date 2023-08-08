import { Box, Stack, Typography } from '@mui/material';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authThanks';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = form => {
    dispatch(loginUser(form));
  };
  return (
    <Stack
      p={{ xs: 2, sm: 10 }}
      spacing={{ xs: 1, sm: 2 }}
      alignItems="center"
      justifyContent="center"
    >
      <Typography>Login</Typography>
      <AuthForm
        cbOnSubmit={handleSubmit}
        btnTitle={'Login'}
        linkTitle={'Register'}
        pathName="/register"
      />
    </Stack>
  );
};
