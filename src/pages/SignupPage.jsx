// src/pages/SignupPage.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SignupPage({ onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    const user = {
      name,
      email,
      location: "",
      profilePhoto: "",
      skillsOffered: [],
      skillsWanted: [],
      availability: "",
      isPublic: true,
    };
    localStorage.setItem("token", "dummy-token");
    localStorage.setItem("user", JSON.stringify(user));
    onSignup();
    navigate("/");
  };

  const handleGoogleSignup = () => {
    alert("Google signup not integrated. This is a placeholder.");
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Signup</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />
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
      <button onClick={handleSignup} className="w-full bg-green-600 text-white p-2 rounded mb-2">
        Signup
      </button>
      <button onClick={handleGoogleSignup} className="w-full bg-red-500 text-white p-2 rounded mb-4">
        Sign up with Google
      </button>
      <p className="text-sm text-center">
        Already have an account? <Link to="/login" className="text-blue-600 underline">Login here</Link>
      </p>
    </div>
  );
}
