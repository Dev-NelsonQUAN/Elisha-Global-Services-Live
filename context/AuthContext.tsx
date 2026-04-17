"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  user: { name: string; role: 'USER' | 'ADMIN' } | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string; role?: string }>;
  signUp: (email: string, password: string, firstName: string, lastName: string) => Promise<{ success: boolean; error?: string; role?: string }>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Base URL for your Express Backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/auth";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ name: string; role: 'USER' | 'ADMIN' } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setIsLoading(false);
  }, []);

  const authFetch = async (endpoint: string, data: any) => {
    try {
      const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        return { success: false, error: result.message || 'Server error' };
      }

      localStorage.setItem('token', result.token);
      localStorage.setItem('user', JSON.stringify({ name: result.name, role: result.role }));
      setUser({ name: result.name, role: result.role });
      
      return { success: true, role: result.role };
    } catch (e: any) {
      return { success: false, error: e.message || 'Network failed' };
    }
  };

  const signIn = async (email: string, password: string) => {
    return authFetch('/login', { email, password });
  };

  const signUp = async (email: string, password: string, firstName: string, lastName: string) => {
    const name = `${firstName} ${lastName}`;
    return authFetch('/register', { email, password, name });
  };

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    router.push('/auth/signin');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};