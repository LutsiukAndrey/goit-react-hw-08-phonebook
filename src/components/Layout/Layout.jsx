import { NavBar } from 'components/NavBar/NavBar';
import { Suspense, useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import {
  Box,
  Fab,
  Modal,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { selectDarkMode } from 'redux/theme/themeSelector';
import { amber, deepOrange, grey, purple } from '@mui/material/colors';
import ModalMenu from 'components/ModalMenu/ModalMenu';
import { Add, Navigation } from '@mui/icons-material';

const Layout = () => {
  // const addUp = useMediaQuery('(min-height: calc(100vh))');

  const mode = useSelector(selectDarkMode);

  const getDesignTokens = mode => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: '#ffffff90',
            },
            secondary: {
              main: '#799da7',
            },
            background: {
              default: '#ffffffc5',
            },
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            primary: {
              main: '#000000ab',
            },
            secondary: {
              main: '#74445e',
            },
            background: {
              default: '#313434ab',
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  });
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const [modalToggle, setModalToggle] = useState(false);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Box
            borderRadius={5}
            bgcolor={'background.default'}
            color={'text.primary'}
            sx={{
              minHeightheight: '85vh',

              marginBottom: '40px',
              marginTop: '40px',
              // position: 'relative',
            }}
          >
            <NavBar setModalToggle={setModalToggle} />
            <Suspense fallback={<h1>Loading...</h1>}>
              <Outlet />
            </Suspense>
            {/* {addUp && ( */}
            <Fab
              color="primary"
              aria-label="add"
              sx={{
                position: 'fixed',
                bottom: '5%',
                left: 'calc(50% - 20px)',
              }}
            >
              <Navigation />
            </Fab>
            {/* )} */}
          </Box>
        </Container>
        <ModalMenu setModalToggle={setModalToggle} modalToggle={modalToggle} />
      </ThemeProvider>
    </>
  );
};
export default Layout;
