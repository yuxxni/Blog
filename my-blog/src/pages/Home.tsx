import { useNavigate } from 'react-router-dom';
import '../App.css';
import { FaPen, FaSearch, FaCog } from 'react-icons/fa';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div id="root">
      <nav className="navbar">
        <div className="logo">My Blog</div>
        <div className="nav-links">
          <button className="signup-button" onClick={() => navigate('/signup')}>회원가입</button>
          <button className="login-button" onClick={() => navigate('/login')}>로그인</button>
        </div>
      </nav>
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="welcome-message">Welcome to My Blog</h1>
          <div className="hero-text">
            <p>Preserve, Capture, and Create your memories</p>
          </div>
        </div>
      </header>
      <section className="feature-cards">
        <div className="card" onClick={() => navigate('/create-post')}>
          <h2>Write Posts</h2>
          <p>나의 생각을 쉽게 공유하세요.</p>
          <FaPen size={70} /> {/* 아이콘 크기 조정 */}
        </div>
        <div className="card" onClick={() => navigate('/posts-list')}>
          <h2>Explore Posts</h2>
          <p>멋진 콘텐츠를 발견하세요.</p>
          <FaSearch size={70} /> {/* 아이콘 크기 조정 */}
        </div>
        <div className="card" onClick={() => navigate('/post-management')}>
          <h2>Post Management</h2>
          <p>나의 게시글을 수정하거나 삭제하세요.</p>
          <FaCog size={70} /> {/* 아이콘 크기 조정 */}
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 My Blog. All rights reserved.</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;

