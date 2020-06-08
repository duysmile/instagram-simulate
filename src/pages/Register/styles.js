import styled from 'styled-components';

const Wrapper =  styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: ${props => props.theme.text};
`;

const LoginForm = styled.div`
  padding: 1.5rem;
  min-width: 25%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.backgroundSecondary};
  border-radius: 0.5rem;
`;

export { Wrapper, LoginForm };
