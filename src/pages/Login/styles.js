import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: ${props => props.theme.text};
  background-color: #fbfbfb;
`;

const LoginForm = styled.div`
  padding: 1.5rem 2.5rem;
  width: 24rem;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.backgroundSecondary};
  border-radius: 0.2rem;
  border: 1px solid #e0e0e0;
  align-items: center;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 10rem;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  background-color: #fafafa;
  border: 1px solid #e0e0e0;
  padding: 0.75rem 0.5rem;
  border-radius: 0.2rem;
`;

const Button = styled.button`
  width: 100%;
  background-color: #0095f6;
  border: none;
  color: white;
  padding: 0.75rem 0.5rem;
  border-radius: 0.2rem;
  font-weight: bold;
  margin-top: 0.3rem;
`;

export {
  Wrapper,
  LoginForm,
  Image,
  Form,
  Input,
  Button,
};
