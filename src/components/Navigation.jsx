
// src/components/Navigation.jsx
import { Link } from "react-router-dom";

export default function Navigation({ onLogout }) {
  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">
          SkillSwap
        </Link>
        <div className="flex gap-4">
          <Link to="/profile" className="hover:text-blue-600">Profile</Link>
          <Link to="/admin" className="hover:text-blue-600">Admin</Link>
          <button onClick={onLogout} className="text-red-600">Logout</button>
        </div>
      </div>
    </nav>
  );
}