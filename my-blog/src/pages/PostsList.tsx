import { useState } from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Navbar 스타일
const Navbar = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #262626;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// 로고 스타일
const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #D0F252;
  text-decoration: none;
  margin-left: 20px;
`;

// 메뉴 스타일
const Menu = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto; /* 왼쪽 정렬 */
  margin-right: 40px; /* 오른쪽 마진을 줄여서 밀어내기 */
`;

// 메뉴 항목 스타일
const MenuItem = styled(Link)`
  font-size: 1rem;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    color: #D0F252;
  }
`;

// 프로필 아이콘 스타일
const ProfileIcon = styled(FaUserCircle)`
  font-size: 2rem;
  margin-right: 10px;
`;

// Wrapper 스타일 (검색 및 게시글 영역)
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f7f7f7;
  padding: 80px 20px 20px;
  box-sizing: border-box;
`;

// 제목 스타일
const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

// 검색 영역 스타일
const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;


// 검색 입력 스타일
const SearchInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 500px; 
  margin-right: 10px;

  &:focus {
    outline: none;
    border-color: #007aff;
  }
`;


// 검색 버튼 스타일
const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #D0F252;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9AC634;
  }
`;

// 게시글 리스트 스타일
const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

// 개별 게시글 스타일
const PostItem = styled.div`
  background-color: white;
  padding: 20px;
  width: 300px;
  height: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// 게시글 제목 스타일
const PostTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

// 게시글 내용 스타일
const PostContent = styled.p`
  color: #555;
`;

// 게시글이 없을 때 메시지 스타일
const NoPostsMessage = styled.p`
  font-size: 1.2rem;
  color: #777;
  text-align: center;
`;

// 게시글 인터페이스 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

// 게시글 리스트 컴포넌트
const PostsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: '첫 번째 게시글', content: '이것은 첫 번째 게시글입니다.' },
    { id: 2, title: '두 번째 게시글', content: '이것은 두 번째 게시글입니다.' },
    { id: 3, title: '세 번째 게시글', content: '이것은 세 번째 게시글입니다.' },
  ]);

  // 검색 기능
  const handleSearch = () => {
    const filteredPosts = posts.filter((post) =>
      post.title.includes(searchTerm)
    );
    setPosts(filteredPosts);
  };

  return (
    <div>
      <Navbar>
        <Logo to="/">MyBlog</Logo>
        <Menu>
          <MenuItem to="/profile">
            <ProfileIcon />
            프로필
          </MenuItem>
          <MenuItem to="/my-blog">내 블로그</MenuItem>
        </Menu>
      </Navbar>

      <Wrapper>
        <Title>게시글 검색</Title>

        <SearchWrapper>
          <SearchInput
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="검색어를 입력하세요"
          />
          <SearchButton onClick={handleSearch}>검색</SearchButton>
        </SearchWrapper>

        <PostList>
          {posts.length === 0 ? (
            <NoPostsMessage>게시글이 없습니다. 검색어를 입력해 보세요!</NoPostsMessage>
          ) : (
            posts.map((post) => (
              <PostItem key={post.id}>
                <PostTitle>{post.title}</PostTitle>
                <PostContent>{post.content}</PostContent>
              </PostItem>
            ))
          )}
        </PostList>
      </Wrapper>
    </div>
  );
};

export default PostsList;
