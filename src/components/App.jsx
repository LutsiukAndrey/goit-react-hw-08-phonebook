import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from 'pages/HomePage';
import { ContactsPage } from 'pages/ContactsPage';
import Layout from './Layout/Layout';
import { RegisterPage } from 'pages/RegisterPage';
import { useEffect, useState } from 'react';
import { LoginPage } from 'pages/LoginPage';
import { getIsAuth } from 'redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from 'redux/auth/authThanks';

const App = () => {
  const isAuth = useSelector(getIsAuth);

  return isAuth ? (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="*" element={<Navigate to={'/register'} />} />
    </Routes>
  );
};

export default App;
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Wrapper />}>
//           <Route
//             // path="/home"
//             index
//             element={<Home />}
//           />
//           <Route
//             path="/login"
//             element={
//               <PublicRoute>
//                 <Login />
//               </PublicRoute>
//             }
//           />
//           <Route
//             path="/registration"
//             element={
//               <PublicRoute>
//                 <Registration />
//               </PublicRoute>
//             }
//           />
//           <Route
//             path="/contacts"
//             element={
//               <PrivateRoute>
//                 <PhoneBook />
//               </PrivateRoute>
//             }
//           />
//         </Route>
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };
