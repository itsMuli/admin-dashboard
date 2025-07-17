import { Role } from "@/types/user";

export default function RoleTag({ role }: { role: Role }) {
  const colorMap = {
    Admin: "bg-red-100 text-red-700",
    Editor: "bg-yellow-100 text-yellow-700",
    Viewer: "bg-green-100 text-green-700",
  };

  return (
    <span className={`px-2 py-1 text-xs rounded ${colorMap[role]}`}>
      {role}
    </span>
  );
}
