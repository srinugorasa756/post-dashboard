import React from "react";

export default function Navbar({ user, setUser }) {
  return (
    <div className="navbar">
      <h2>📊 Post Dashboard</h2>

      <div className="nav-right">
        <span>{user?.email}</span>
        <button onClick={() => setUser(null)}>Logout</button>
      </div>
    </div>
  );
}