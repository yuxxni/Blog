import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Main from './pages/Main';
import CreatePost from './pages/CreatePost';
import PostsList from './pages/PostsList';  
import EditPost from './pages/EditPost';
import PostDetail from './pages/PostDetail';
import Profile from './pages/Profile';
import UserManagement from './pages/UserManagement';
import PostManagement from './pages/PostManagement';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/posts-list" element={<PostsList />} /> 
          <Route path="/edit-post/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/posts" element={<PostManagement />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

