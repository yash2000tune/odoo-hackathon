
// src/pages/LoginPage.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const dummyCredentials = {
  email: "test@example.com",
  password: "123456",
  name: "Test User",
};

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === dummyCredentials.email && password === dummyCredentials.password) {
      const user = {
        name: dummyCredentials.name,
        email: dummyCredentials.email,
        location: "",
        profilePhoto: "",
        skillsOffered: [],
        skillsWanted: [],
        availability: "",
        isPublic: true,
      };
      localStorage.setItem("token", "dummy-token");
      localStorage.setItem("user", JSON.stringify(user));
      onLogin();
      navigate("/");
    } else {
      alert("Invalid credentials. Try test@example.com / 123456");
    }
  };

  const handleGoogleLogin = () => {
    alert("Google login not integrated. This is a placeholder.");
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />
      <button onClick={handleLogin} className="w-full bg-blue-600 text-white p-2 rounded mb-2">
        Login
      </button>
      <button onClick={handleGoogleLogin} className="w-full bg-red-500 text-white p-2 rounded mb-4">
        Sign in with Google
      </button>
      <p className="text-sm text-center">
        Don’t have an account? <Link to="/signup" className="text-blue-600 underline">Sign up here</Link>
      </p>
    </div>
  );
}