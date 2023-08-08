import { Stack, Typography } from '@mui/material';

export const HomePage = () => {
  return (
    <Stack
      p={{ xs: 2, sm: 10 }}
      spacing={{ xs: 1, sm: 2 }}
      alignItems="center"
      justifyContent="center"
    >
      <Typography>
        Looking for a simple and convenient app to manage your contacts? Then
        our phone book app is perfect for you! With our app, you can easily add,
        edit, and delete contacts right from your phone. No more searching for a
        paper address book or memorizing phone numbers - all your contacts will
        be in one place! In addition, our phone book app has a convenient search
        feature by name making the process of finding the right contact quick
        and easy. We also offer the ability to create groups of contacts for
        more efficient management of your contacts and quick access to the
        people you need. Our phone book app is the best solution for organizing
        your contacts. Download it today and enjoy the simplicity and
        convenience!
      </Typography>
    </Stack>
  );
};
