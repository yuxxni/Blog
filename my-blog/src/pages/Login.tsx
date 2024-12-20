import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #222;
  padding: 0 20px;
  flex-direction: column;  // 세로 방향으로 배치
`;

const Logo = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 3rem;  // 로고 크기 조정
  font-weight: bold;
  color: #D0F252;
  margin-bottom: 40px;  // 로고와 폼 사이의 간격 조정
`;

const FormWrapper = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 600px;
  min-width: 300px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #222;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #555;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #333;
  border-radius: 8px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #D0F252;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #D0F252;
  color: black;
  font-size: 1rem;
  border: 1px solid #333;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9AC634;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post('/v1/auth/login', { email, password });
      // 로그인 성공 후 메인 페이지로 이동
      navigate('/main');
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    <Container>
      <Logo>My Blog</Logo>
      <FormWrapper>
        <Title>로그인</Title>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label>Email:</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Password:</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputWrapper>
          <Button type="submit">Login</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default Login;
