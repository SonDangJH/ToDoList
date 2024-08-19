import { useState } from "react";
import EditNote from "../components/EditNote";
import SearchBar from "../components/SearchBar";
import ToDoItem from "../components/ToDoItem";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { saveNewTodo, editTodo } from '../reducer';
import { Pagination } from "../components/Pagination";
import { fetchTodosByPage } from '../reducer';

export default function ToDoListPage() {
  const dispatch = useDispatch()
  const [mode, setMode] = useState("Add");
  const [currentNote, setCurrentNote] = useState();
  const [noteBoardContent, setNoteBoardContent] = useState("");
  const todos = useSelector(state => state);


  function actionNote() {
    if (noteBoardContent === "") {
      toast.error("Note can not be empty, please type some letter!")
      return;
    }
    else {
      if (mode === "Add") {
        dispatch(saveNewTodo(noteBoardContent));
      } else {
        if (!currentNote.id) return;
        dispatch(editTodo(noteBoardContent, currentNote.id))
      }
      setNoteBoardContent("");
      setCurrentNote();
      setMode("Add");
    }
  }

  function deleteNote(noteId) {
    dispatch({type: 'todos/todoDeleted', payload: noteId});
    setMode("Add");
    setCurrentNote();
    setNoteBoardContent("");
  }


  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 ">
      <Toaster/>
      <div className="flex flex-col gap-6">
        <div className="overflow-y-scroll h-[500px] flex flex-col gap-3 px-3">
          {todos.todos.map((noteDetail) => (
            <ToDoItem
              note={noteDetail}
              key={noteDetail.id}
              setMode={setMode}
              setCurrentNote={setCurrentNote}
              setNoteBoardContent={setNoteBoardContent}
              deleteNote={deleteNote}
            />
          ))}
        </div>
        <Pagination/>
      </div>
      <EditNote
        mode={mode}
        actionNote={actionNote}
        noteBoardContent={noteBoardContent}
        setNoteBoardContent={setNoteBoardContent}
      />
    </div>
  );
}
