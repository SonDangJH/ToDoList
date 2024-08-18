import { useState } from "react";
import { GoClock } from "react-icons/go";
export default function EditNote(props) {

    function completeActionNote() {
        props.actionNote();
        props.setMode("Add");
    }

    return (
        <div className="relative shadow-md h-[500px] lg:h-full">
            <p className="absolute z-10 top-5 left-4 text-sm text-gray-500 flex flex-row items-center gap-2"><GoClock className="w-3 h-3"/>{props.currentNote ? `${props.currentNote.date.toLocaleTimeString()} ${props.currentNote.date.toLocaleDateString('en-GB')}` : "Beautiful day"}</p>
            <button type="button" className="absolute z-10 top-2 right-2 py-3 px-3 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-white hover:text-blue-500 focus:z-10 focus:ring-4 focus:ring-gray-50 dark:focus:ring-gray-200 dark:bg-gray-300 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:border-blue-500"
                onClick={completeActionNote}>
                {props.mode}
            </button>
            <textarea className="absolute top-0 left-0 border-[1px] rounded-md shadow w-full h-full p-4 pt-12" 
                      onChange={(e)=>{
                        props.setNoteBoardContent(e.target.value);
                      }}
                      value={props.noteBoardContent}>
            </textarea>
        </div>
    )
}