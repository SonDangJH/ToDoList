import { useEffect, useState } from "react"
import EditNote from "../components/EditNote"
import SearchBar from "../components/SearchBar"
import ToDoItem from "../components/ToDoItem"

export default function ToDoListPage() {
    const [mode, setMode] = useState("Add");
    const [searchKey, setSearchKey] = useState("");
    const [notes, setNotes] = useState([]); 
    const [backUpNotes, setBackUpNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState();
    const [noteBoardContent, setNoteBoardContent] = useState("");

    function actionNote() {
        if (mode === "Add") {
            setNotes(prev => [...prev, {
                id: new Date().toTimeString(),
                content: noteBoardContent,
                date: new Date()
            }]);
        }
        else {
            if (!currentNote.id) return;
            const newNoteList = notes.map(note => note.id !== currentNote.id ? note : {
                ... note, content: noteBoardContent, date: new Date()
            });
            setNotes(newNoteList);
        }
        setNoteBoardContent("");
        setCurrentNote();
    }

    function deleteNote(noteId) {
        const newNoteList = notes.filter(note => note.id !== noteId);
        setNotes(newNoteList);
    }

    function searchNote(searchWord) {
        const newNoteList = notes.filter(note => note.content.includes(searchWord));
        setBackUpNotes(newNoteList);
    }

    function sortNote(type) {
        if (type === "ASC") {
            backUpNotes.sort((a, b) => a.date.getTime() - b.date.getTime());
        }
        else {
            backUpNotes.sort((a, b) => b.date.getTime() - a.date.getTime());
        }
        setBackUpNotes(backUpNotes.filter(item=>item));
    }

    useEffect(()=>{
        searchNote(searchKey);
    }, [searchKey]);

    useEffect(()=>{
        setBackUpNotes(notes);
    }, [notes])

    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            <div className="flex flex-col gap-6">
                <SearchBar 
                    setSearchKey={setSearchKey} 
                    sortNote={sortNote}/>
                <div className="overflow-y-scroll h-[500px] flex flex-col gap-3 px-3">
                    {backUpNotes.map(noteDetail => 
                        <ToDoItem 
                            note={noteDetail} 
                            key={noteDetail.id} 
                            setMode={setMode} 
                            setCurrentNote={setCurrentNote}
                            setNoteBoardContent={setNoteBoardContent}
                            deleteNote={deleteNote}/>
                    )}
                </div>
            </div>
            <EditNote 
                mode={mode} 
                actionNote={actionNote} 
                setMode={setMode}
                currentNote={currentNote}
                noteBoardContent={noteBoardContent}
                setNoteBoardContent={setNoteBoardContent}/>
        </div>
    )
}