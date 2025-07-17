'use client'

import { useState } from "react";
import { mockUsers } from "@/utils/mockData";
import UserTable from "@/components/UserTable";

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  
  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase()) &&
    (roleFilter === "" || user.role === roleFilter)
  );

  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          placeholder="Search user..."
          className="border p-2 rounded"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={roleFilter}
          onChange={e => setRoleFilter(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
      </div>

      <UserTable users={filteredUsers} />
    </div>
  );
}
