import { createContext, useState, useContext, ReactNode } from 'react';

// AuthContext의 상태와 함수 정의
interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

// 기본 값은 undefined로 설정 (컨텍스트가 없으면 오류를 발생시킴)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider 컴포넌트: 자식 컴포넌트를 래핑하여 상태 관리 제공
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 및 로그아웃 함수 정의
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth: AuthContext에서 상태와 함수 반환
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
