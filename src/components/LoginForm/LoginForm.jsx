// // import { logIn } from 'redux/auth/authThan
// import styled from 'styled-components';

// export const LoginForm = () => {
//   // const dispatch = useDispatch();
//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
//   };
//   return (
//     <FormContainer>
//       <form onSubmit={handleSubmit}>
//         <FormSubTitle>Email</FormSubTitle>
//         <FormInput type="email" name="email" required />
//         <FormSubTitle>Password</FormSubTitle>
//         <FormInput type="password" name="password" required />
//         <div>
//           <FormBtn type="submit">Registartion</FormBtn>
//         </div>
//       </form>
//     </FormContainer>
//   );
// };
// const FormContainer = styled.div`
//   margin-bottom: 40px;
//   background-color: aqua;
// `;
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
// const FormBtn = styled.button`
//   border-radius: 20px;
//   border: transparent;
//   padding: 10px 25px;
//   background-color: burlywood;
// `;
