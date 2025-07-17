import { User } from "@/types/user";

export default function EditUserModal({
  user,
  onClose
}: {
  user: User;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded max-w-md w-full rounded-md">
        <h2 className="text-lg font-bold mb-2">Edit {user.name}</h2>
        <form className="space-y-2">
          <input className="border p-2 w-full rounded" defaultValue={user.name} />
          <input className="border p-2 w-full rounded" defaultValue={user.email} />
          <select className="border p-2 w-full rounded" defaultValue={user.role}>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
