import EditNote from "../components/EditNote";
import ToDoItem from "../components/ToDoItem";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveNewTodo, editTodo, deleteTodo } from "../redux/thunks";
import { selectTodo } from '../redux/actions'
import { todosSelector, currentTodoSelector, loadingStateSelector} from "../redux/selector"
import { Pagination } from "../components/Pagination";
import CustomSpinner from "../components/Spinner";

export default function ToDoListPage() {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);
  const currentItem = useSelector(currentTodoSelector);
  const isLoading = useSelector(loadingStateSelector);
  const mode = currentItem ? 'Edit' : 'Add';

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 ">
      <Toaster />
      <div className="flex flex-col gap-6 h-[500px] justify-center">
        {isLoading ? (
          <CustomSpinner />
        ) : (
          <div>
            <div className="overflow-y-scroll h-[500px] flex flex-col gap-3 px-3">
              {todos.map((noteDetail) => (
                <ToDoItem
                  note={noteDetail}
                  key={noteDetail.id}
                  onEdit={() => dispatch(selectTodo(noteDetail))}
                  deleteNote={() => dispatch(deleteTodo(noteDetail.id))}
                />
              ))}
            </div>
            <Pagination />
          </div>
        )}
      </div>
      <EditNote
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const content = formData.get("content");
          if (currentItem) {
            dispatch(editTodo(content, currentItem.id));
          } else {
            dispatch(saveNewTodo(content));
          }
          e.target.reset();
        }}
        mode={mode}
      >
        <textarea
          name="content"
          className="absolute top-0 left-0 border-[1px] rounded-md shadow w-full h-full p-4 pt-12"
          defaultValue={currentItem ? currentItem.todo : ""}
        ></textarea>
      </EditNote>
    </div>
  );
}
