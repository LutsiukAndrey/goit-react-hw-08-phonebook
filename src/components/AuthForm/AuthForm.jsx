import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AuthForm = ({ cbOnSubmit, btnTitle, linkTitle, pathName }) => {
  const [formRegister, setFormRegister] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [formLogin, setFormLogin] = useState({ email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormRegister(prev => ({ ...prev, [name]: value }));
    setFormLogin(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (btnTitle === 'Registrate') {
      cbOnSubmit(formRegister);
      return;
    } else cbOnSubmit(formLogin);
  };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        {btnTitle === 'Registrate' ? (
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              value={formRegister.name}
              required
              onChange={handleChange}
              placeholder="enter your name"
            />
          </label>
        ) : (
          ''
        )}

        <label htmlFor="">
          email
          <input
            type="text"
            name="email"
            value={formRegister.email}
            required
            onChange={handleChange}
            placeholder="enter your email"
          />
        </label>
        <label htmlFor="">
          Password
          <input
            type="text"
            name="password"
            value={formRegister.password}
            required
            onChange={handleChange}
            placeholder="enter your password"
          />
        </label>

        <div>
          <FormBtn type="submit">{btnTitle}</FormBtn>
        </div>
      </form>
      <Link to={pathName}>{linkTitle}</Link>
    </FormContainer>
  );
};
const FormContainer = styled.div`
  margin-bottom: 40px;
  background-color: aqua;
`;
// const FormSubTitle = styled.p`
//   margin-bottom: 30px;
// `;
// const FormInput = styled.input`
//   width: 300px;
//   padding: 10px 40px;
//   border-radius: 20px;
//   border: transparent;
//   margin-bottom: 30px;
// `;
const FormBtn = styled.button`
  border-radius: 20px;
  border: transparent;
  padding: 10px 25px;
  background-color: burlywood;
`;
