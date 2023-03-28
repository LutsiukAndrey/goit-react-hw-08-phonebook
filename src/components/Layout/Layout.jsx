import Container from 'components/Container/Container';
import { NavBar } from 'components/NavBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Container>
        <NavBar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
export default Layout;
