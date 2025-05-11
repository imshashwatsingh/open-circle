import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';

const SignUp = () => {
  const navigate = useNavigate();
  const { signup, signInWithGoogle, error: authError } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    displayName: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      await signup(formData.email, formData.password, formData.displayName);
      // Navigation is handled in context
    } catch (err) {
      // Error is handled in context, but show here as fallback
      setError(err.message || 'Failed to create an account.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithGoogle();
      // Navigation is handled in context
    } catch (err) {
      setError(err.message || 'Failed to sign up with Google.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 text-gray-100 bg-gray-900">
      <h2 className="text-4xl font-extrabold mb-6 text-white text-center">Create Account</h2>
      {(error || authError) && (
        <div className="max-w-md mx-auto mb-4 p-4 bg-red-500 text-white rounded-lg">
          {error || authError}
        </div>
      )}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="displayName" className="block text-sm font-medium text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            id="displayName"
            value={formData.displayName}
            onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition disabled:opacity-50"
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
        <div className="mt-4 text-center">
          <span className="text-gray-400">or</span>
        </div>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full mt-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-2 px-4 rounded-lg transition flex items-center justify-center"
        >
          <img 
            src="https://www.google.com/favicon.ico" 
            alt="Google" 
            className="w-4 h-4 mr-2"
          />
          Sign up with Google
        </button>
        <p className="mt-4 text-center text-gray-400">
          Already have an account?{' '}
          <Link to="/sign-in" className="text-blue-400 hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;