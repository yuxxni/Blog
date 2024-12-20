import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const CreatePostWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f7f7f7;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;

const Navbar = styled.nav`
  width: 100%;
  padding: 10px;
  background-color: #262626;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #D0F252;
  text-decoration: none;
  margin-left: 20px;  /* 로고 왼쪽으로 이동 */
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;  /* 간격 확대 */
  margin-right: 20px;  /* 메뉴 오른쪽으로 이동 */
`;

const MenuItem = styled(Link)`
  font-size: 1rem;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    color: #f7f7f7;
  }
`;

const CreatePostForm = styled.form`
  width: 100%;
  max-width: 600px;
  height: 600px;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  font-size: 1.1rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007aff;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007aff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #D0F252;
  color: black;
  border: none;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9AC634;
  }
`;

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');  // 이미지 URL 상태 추가

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('제목:', title);
    console.log('내용:', content);
    console.log('이미지 URL:', imageUrl);
  };

  return (
    <CreatePostWrapper>
      <Navbar>
        <Logo to="/">MyBlog</Logo>
        <Menu>
          <MenuItem to="/profile">
            <FaUserCircle /> 프로필
          </MenuItem>
          <MenuItem to="/home">내 블로그 홈</MenuItem>
        </Menu>
      </Navbar>
      <CreatePostForm onSubmit={handleSubmit}>
        <FormTitle>게시글 작성</FormTitle>
        <FormGroup>
          <Label>제목</Label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>내용</Label>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
            rows={5}
            required
          />
        </FormGroup>
        <FormGroup>  {/* 이미지 URL 입력란 추가 */}
          <Label>이미지 URL</Label>
          <Input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="이미지 URL을 입력하세요"
          />
        </FormGroup>
        <SubmitButton type="submit">업로드</SubmitButton>
      </CreatePostForm>
    </CreatePostWrapper>
  );
};

export default CreatePost;
