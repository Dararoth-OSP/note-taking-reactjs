import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import NewNoteForm from "./NewNoteForm";

const NewNote = () => {
  const [noteForm, setNoteForm] = useState(false);

  const newNoteClickHnadler = () => {
    setNoteForm(true);
  };

  const noteFormCloseHandler = () => {
    setNoteForm(false);
  };

  return (
    <div className="flex">
      {!noteForm && (
        <div
          onClick={newNoteClickHnadler}
          className="flex relative bg-white my-4 rounded-lg p-4 py-3 w-[580px] shrink m-auto shadow-xl text-gray-500 hover:text-gray-900 keyframes-slideDown-from keyframes-slideDown-to"
        >
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BsPlus className="w-5 h-5 " />
          </div>
          <span className="ml-6 ">Take note here...</span>
        </div>
      )}
      {noteForm && <NewNoteForm onClose={noteFormCloseHandler} />}
    </div>
  );
};

export default NewNote;
