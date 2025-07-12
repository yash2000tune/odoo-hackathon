// src/pages/ProfilePage.jsx
import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Profile updated!");
  };

  if (!user) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="location"
          value={user.location}
          onChange={handleChange}
          placeholder="Your location"
          className="w-full border p-2 rounded"
        />
        <textarea
          name="skillsOffered"
          value={user.skillsOffered?.join(", ")}
          onChange={(e) =>
            setUser({ ...user, skillsOffered: e.target.value.split(",") })
          }
          placeholder="Skills you offer (comma separated)"
          className="w-full border p-2 rounded"
        />
        <textarea
          name="skillsWanted"
          value={user.skillsWanted?.join(", ")}
          onChange={(e) =>
            setUser({ ...user, skillsWanted: e.target.value.split(",") })
          }
          placeholder="Skills you want (comma separated)"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="availability"
          value={user.availability}
          onChange={handleChange}
          placeholder="Availability (e.g., Evenings, Weekends)"
          className="w-full border p-2 rounded"
        />
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
