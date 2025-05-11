import React, { useState } from "react";
import { Link } from "react-router-dom"; // Remove useNavigate since we handle navigation in AuthContext
import { useAuth } from '../contexts/useAuth';

const SignIn = () => {
  const { signin, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signin(email, password); // Navigation is handled in AuthContext
    } catch (err) {
      setError("Failed to sign in. Please check your credentials.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
    } catch (err) {
      setError("Failed to sign in with Google.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 text-gray-100 bg-gray-900">
      <h2 className="text-4xl font-extrabold mb-6 text-white text-center">
        Sign In
      </h2>

      {error && (
        <div className="max-w-md mx-auto mb-4 p-4 bg-red-500 text-white rounded-lg">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign In"}
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
          Sign in with Google
        </button>
        <p className="mt-4 text-center text-gray-400">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
