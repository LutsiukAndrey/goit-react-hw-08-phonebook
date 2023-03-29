import { AuthForm } from 'components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authThanks';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = form => {
    console.log(form);
    dispatch(loginUser(form));
  };
  return (
    <div>
      <p>Login</p>
      <AuthForm
        cbOnSubmit={handleSubmit}
        btnTitle={'Login'}
        linkTitle={'Register'}
        pathName="/register"
      />
    </div>
  );
};
