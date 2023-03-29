import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from 'pages/HomePage';
import { ContactsPage } from 'pages/ContactsPage';
import Layout from './Layout/Layout';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { getIsAuth } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { NotFound } from 'pages/NotFound/NotFound';

const PrivetRoute = ({ children }) => {
  const isAuth = useSelector(getIsAuth);

  return isAuth ? children : <Navigate to="/login" />;
};
const PublicRoute = ({ children }) => {
  const isAuth = useSelector(getIsAuth);

  return !isAuth ? children : <Navigate to="/contacts" />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivetRoute>
              <ContactsPage />
            </PrivetRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
