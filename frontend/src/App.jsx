import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext'; // Correct import for default export
import { useAuth } from './contexts/useAuth'; // Correct import for hook
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import ErrorBoundary from './components/ErrorBoundary';
import SignUp from './components/SignUp';
// Loading component for better user experience
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loading && !user) {
      navigate('/sign-in');
    }
  }, [user, loading, navigate]);

  if (loading) return <LoadingSpinner />;
  
  return user ? children : null;
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <Hero />
                    <Features />
                    <CTA />
                  </>
                } 
              />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <ErrorBoundary>
                      <Dashboard />
                    </ErrorBoundary>
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;