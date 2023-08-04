import { NavBar } from 'components/NavBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';

const Layout = () => {
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: '#cfcfcf',
          height: '100vh',
          p: 2,
          marginBottom: '40px',
          marginTop: '40px',
        }}
      >
        <NavBar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
export default Layout;
