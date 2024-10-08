import { GoClock } from "react-icons/go";
export default function EditNote({ onSubmit, mode, children }) {
  return (
    <div className="relative shadow-md h-[500px] lg:h-full">
      <p className="absolute z-10 top-5 left-4 text-sm text-gray-500 flex flex-row items-center gap-2">
        <GoClock className="w-3 h-3" />
        {"Beautiful day"}
      </p>
      <form onSubmit={onSubmit}>
        <button
          type="submit"
          className="absolute z-10 top-2 right-2 py-3 px-3 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-white hover:text-blue-500 focus:z-10 focus:ring-4 focus:ring-gray-50 dark:focus:ring-gray-200 dark:bg-gray-300 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:border-blue-500"
        >
          {mode}
        </button>
        {children}
      </form>
    </div>
  );
}
