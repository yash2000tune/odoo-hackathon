// src/pages/AdminDashboard.jsx
import React from "react";

export default function AdminDashboard() {
  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold text-lg mb-2">Pending Swaps</h2>
          <p className="text-gray-500 text-sm">Monitor and approve or reject pending swap requests.</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold text-lg mb-2">Flagged Skills</h2>
          <p className="text-gray-500 text-sm">Review inappropriate or spammy skill descriptions.</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold text-lg mb-2">Banned Users</h2>
          <p className="text-gray-500 text-sm">Manage users who have violated platform rules.</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold text-lg mb-2">Platform Logs</h2>
          <p className="text-gray-500 text-sm">Download reports and monitor user activity.</p>
        </div>
      </div>
    </main>
  );
}
