import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
//import axios from '../api/axios';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  padding: 20px;
`;

const FormWrapper = styled.div`
  background-color: #2e2e2e;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.p`
  color: #e0e0e0;
  font-size: 24px;
  text-align: center;
`;

const InputWrapper = styled.div`
  margin-top: 20px;
`;

const Label = styled.label`
  color: #9e9e9e;
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  background-color: #1a1a1a;
  color: #e0e0e0;
  border: 1px solid #333;
  border-radius: 4px;
  outline: none;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  background-color: #1a1a1a;
  color: #e0e0e0;
  border: 1px solid #333;
  border-radius: 4px;
  outline: none;
  resize: none;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

const ToggleText = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #e0e0e0;
  font-weight: 500;
`;

//const LinkText = styled(Link)`
//  color: #007bff;
//  text-decoration: underline;
//  cursor: pointer;

//  &:hover {
//    color: #0056b3;
//  }
//`;

const SignUp = () => {
  //const navigate = useNavigate();
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const change = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  };

  const submit = async () => {
    try {
      if (values.username === '' || values.password === '') {
        alert('All fields are required.');
        return;
      }

      //const response = await axios.post('/api/users/signup', values);
      alert('Signed Up Successfully');
      //navigate('/login');
    } catch (error) {
      alert('SignUp Error');
      console.log('error: ', error);
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Sign Up</Title>
        <form>
          <InputWrapper>
            <Label>Username</Label>
            <Input
              type='text'
              name='username'
              placeholder='Username'
              value={values.username}
              onChange={change}
              required
            />
          </InputWrapper>

          <InputWrapper>
            <Label>Password</Label>
            <Input
              type='password'
              name='password'
              placeholder='Password'
              value={values.password}
              onChange={change}
              required
            />
          </InputWrapper>

          <Button
            type='button'
            onClick={submit}
          >
            Sign Up
          </Button>
        </form>
        <ToggleText>
          Already have an account? &nbsp;
          {/*<LinkText to='/login'>Log In</LinkText>*/}
        </ToggleText>
      </FormWrapper>
    </Container>
  );
};

export default SignUp;
