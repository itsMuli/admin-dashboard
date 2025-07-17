export type Role = "Admin" | "Editor" | "Viewer";
export type Status = "Active" | "Inactive";

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  status: Status;
  lastActive: string;
}
