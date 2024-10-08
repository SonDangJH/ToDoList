import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
export default function ToDoItem({ note, onEdit, deleteNote }) {
  const { todo, id } = note;
  return (
    <div className="flex flex-row pt-2 pb-2 pl-4 pr-2 w-full gap-3 justify-between items-center rounded-md border-[1px] hover:shadow-md hover:scale-[1.03] transition ease-in-out duration-300">
      <div className="w-[75%] text-sm text-start">{todo}</div>
      <div className="w-[25%]">
        <button
          type="button"
          className="py-3 px-3 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-white hover:text-emerald-500 focus:z-10 focus:ring-4 focus:ring-gray-50 dark:focus:ring-gray-200 dark:bg-gray-300 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:border-emerald-500"
          onClick={onEdit}
        >
          <CiEdit className="w-4 h-4" />
        </button>
        <button
          type="button"
          className="py-3 px-3 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-white hover:text-red-500 focus:z-10 focus:ring-4 focus:ring-gray-50 dark:focus:ring-gray-200 dark:bg-gray-300 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:border-red-500"
          onClick={() => {
            deleteNote(id);
          }}
        >
          <MdDeleteOutline className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
