'use client';

import { User } from "@/types/user";
import { useState, useEffect } from "react";
import EditUserModal from "./EditUserModal";
import RoleTag from "./RoleTag";

const USERS_PER_PAGE = 10;
const STORAGE_KEY = "userTableState";

export default function UserTable({ users }: { users: User[] }) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterRole, setFilterRole] = useState("All");

  // Load state from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const { currentPage, filterRole } = JSON.parse(stored);
      if (currentPage) setCurrentPage(currentPage);
      if (filterRole) setFilterRole(filterRole);
    }
  }, []);

  // Save state to localStorage on changes
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ currentPage, filterRole })
    );
  }, [currentPage, filterRole]);

  // Filter logic
  const filteredUsers =
    filterRole === "All"
      ? users
      : users.filter((user) => user.role === filterRole);

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const currentUsers = filteredUsers.slice(
    startIndex,
    startIndex + USERS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full rounded-lg shadow border">
      {/* Filter Dropdown */}
      {/* <div className="flex items-center justify-between p-4">
        <label className="text-sm font-medium">
          Filter by Role:
          <select
            className="ml-2 p-1 border rounded text-sm"
            value={filterRole}
            onChange={(e) => {
              setFilterRole(e.target.value);
              setCurrentPage(1); // Reset to first page when filter changes
            }}
          >
            <option value="All">All</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
        </label>
      </div> */}

      {/* Table */}
      <table className="w-full table-auto text-sm text-left">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="p-3 font-medium">Name</th>
            <th className="p-3 font-medium hidden sm:table-cell">Email</th>
            <th className="p-3 font-medium">Role</th>
            <th className="p-3 font-medium hidden sm:table-cell">Status</th>
            <th className="p-3 font-medium hidden sm:table-cell">Last Active</th>
            <th className="p-3 font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y dark:divide-gray-800">
          {currentUsers.length > 0 ? (
            currentUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="p-3">{user.name}</td>
                <td className="p-3 hidden sm:table-cell text-gray-500 dark:text-gray-400 text-xs ">{user.email}</td>
                <td className="p-3">
                  <RoleTag role={user.role} />
                </td>
                <td className="p-3 hidden sm:table-cell">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-3 hidden sm:table-cell text-gray-500 dark:text-gray-400 text-xs">
                  {user.lastActive}
                </td>
                <td className="p-3">
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="p-4 text-center text-gray-400">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 p-4">

          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded text-sm disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded text-sm disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedUser && (
        <EditUserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}
