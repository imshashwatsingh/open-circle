// NEW FILE: filepath: c:\Users\lenovo\Desktop\OpenCircle\frontend\src\contexts\useAuth.js
import { useContext } from 'react';
import { AuthContext } from './AuthContextContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};