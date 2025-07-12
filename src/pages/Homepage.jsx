// src/pages/HomePage.jsx
import { useState } from "react";
import dummyUsers from "../data/dummyUsers";
import UserCard from "../components/UserCard";
import SwapModal from "../components/SwapModal";
import { motion } from "framer-motion";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSwapRequest = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const confirmSwapRequest = (user) => {
    alert(`Swap request sent to ${user.name}`);
    setIsModalOpen(false);
  };

  const filteredUsers = dummyUsers.filter(
    (user) =>
      user.isPublic &&
      (
        user.skillsOffered.join(" ").toLowerCase().includes(search.toLowerCase()) ||
        user.skillsWanted.join(" ").toLowerCase().includes(search.toLowerCase()) ||
        user.name.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <main className="p-4 sm:p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Skill Swap Platform</h1>
        <p className="text-gray-500 mb-4 text-sm sm:text-base">
          Connect with others and exchange your skills easily!
        </p>
        <input
          type="text"
          placeholder="🔍 Search by skill or name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {filteredUsers.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <UserCard user={user} onRequestSwap={handleSwapRequest} />
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No users match your search.</p>
      )}

      <SwapModal
        user={selectedUser}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmSwapRequest}
      />
    </main>
  );
}

