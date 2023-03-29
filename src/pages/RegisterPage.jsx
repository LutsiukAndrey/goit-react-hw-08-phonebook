import { AuthForm } from 'components/AuthForm/AuthForm';

import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authThanks';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = form => {
    dispatch(registerUser(form));
  };
  return (
    <div>
      <p>Regiter</p>
      <AuthForm
        cbOnSubmit={handleSubmit}
        btnTitle={'Registrate'}
        linkTitle={'Login'}
        pathName="/login"
      />
    </div>
  );
};
