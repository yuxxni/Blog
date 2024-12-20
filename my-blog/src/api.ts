import axios from 'axios';

interface SignUpData {
  email: string;
  password: string;
  role?: 'user' | 'admin';
}

export const signUp = async (data: SignUpData) => {
  try {
    const response = await axios.post('/v1/users', data);
    console.log('회원 가입 성공:', response.data);
  } catch (error) {
    console.error('회원 가입 실패:', error);
  }
};
