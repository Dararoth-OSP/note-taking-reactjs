import React from "react";

import { useDispatch } from "react-redux";
import { deleteActions } from "../../store/delete";

const NoteOptions = (props) => {
  const noteID = props.noteID;
  const dispatch = useDispatch();

  const deleteClickHandler = () => {
    dispatch(deleteActions.storeDeleteID(noteID))
    dispatch(deleteActions.showDelete())
    props.onClose()

  };

  return (
    <div className="absolute -bottom-[170px] -right-[70px] z-50 bg-white py-2 flex flex-col font-normal rounded-lg shadow-lg border">
      <button className="px-2 py-2 hover:bg-gray-100 text-start">
        Archive
      </button>
      <button className="px-2 py-2 hover:bg-gray-100 text-start">
        Add Label
      </button>
      <button className="px-2 py-2 hover:bg-gray-100 text-start border-b">
        Make a copy
      </button>
      <button
        onClick={deleteClickHandler}
        className="px-2 py-2 hover:bg-gray-100 text-start text-red-700"
      >
        Delete note
      </button>
    </div>
  );
};

export default NoteOptions;
