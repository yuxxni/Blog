import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>('/v1/users');
        setUsers(response.data);
      } catch (error) {
        console.error('사용자 조회 실패:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId: number) => {
    try {
      await axios.delete(`/v1/users/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('사용자 삭제 실패:', error);
    }
  };

  return (
    <div>
      <h1>사용자 관리</h1>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} ({user.email})</p>
          <button onClick={() => handleDelete(user.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default UserManagement;
