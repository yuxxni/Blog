import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
  bio?: string;
}

const Profile = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get<User>(`/v1/users/${userId}`);
        const userData = response.data;
        setUser(userData);
        setName(userData.name);
        setEmail(userData.email);
        setBio(userData.bio || '');
      } catch (error) {
        console.error('사용자 정보 조회 실패:', error);
      }
    };

    fetchUser();
  }, [userId]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.patch(`/v1/users/${userId}`, { name, email, bio });
      alert('프로필이 성공적으로 수정되었습니다.');
    } catch (error) {
      console.error('프로필 수정 실패:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>프로필 페이지</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이름:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>이메일:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>자기소개:</label>
          <textarea 
            value={bio} 
            onChange={(e) => setBio(e.target.value)} 
          />
        </div>
        <button type="submit">수정</button>
      </form>
    </div>
  );
};

export default Profile;
