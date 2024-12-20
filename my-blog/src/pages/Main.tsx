import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  return (
    <div>
      <h1>메인 페이지</h1>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export default Main;
