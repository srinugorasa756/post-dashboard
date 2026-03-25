import React from "react";

export default function FilterSort({ setFilter, setSort }) {
  return (
    <div className="button-group">
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Users</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="title">Title</option>
        <option value="id">ID</option>
      </select>
    </div>
  );
}