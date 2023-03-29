import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/authSelectors';
import { logoutUser } from 'redux/auth/authThanks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const handleClick = form => {
    dispatch(logoutUser(form));
  };
  const userName = useSelector(getUserName);

  return (
    <div>
      <p>Hi {userName.name}!</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};
