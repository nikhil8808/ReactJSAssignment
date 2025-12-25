import React, { createContext, useContext, useState } from 'react';
import type { ReactNode, AuthContextType, SignUpFormValues, SignInFormValues } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<SignUpFormValues | SignInFormValues | null>(null);

  const logout = () => {
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    setUser,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
