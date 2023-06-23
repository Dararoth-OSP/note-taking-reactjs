import React, { useRef, useState, useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { editActions } from "../../store/edit";
import { useDispatch } from "react-redux";
import { noteActions } from "../../store/note";
import NoteOptions from "./NoteOptions";
//MUI

const NoteSheet = (props) => {
  const dispatch = useDispatch();

  const optionRef = useRef();
  const [showOptions, setShowOptions] = useState(false);

  // const isDelete = useSelector((state) => state.delete.isShowDelete);

  const showOptionsHandler = () => {
    setShowOptions(true);
    // dispatch(deleteActions.storeDeleteID(id));
    // console.log(id)
  };
  const hideOptionsHandler = () => {
    setShowOptions(false);
  };

  const showEditHandler = () => {
    const noteData = {
      uuid: props.uuid,
      title: props.title,
      text: props.text,
    };

    dispatch(noteActions.handleUpdateData(noteData));
    dispatch(editActions.showEdit());
  };

  useEffect(() => {
    let handler = (event) => {
      if (!optionRef.current.contains(event.target)) {
        hideOptionsHandler();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="w-full rounded-lg bg-white inline-block hover:shadow-lg mb-5">
      <div onClick={showEditHandler} className="space-y-3 p-4">
        <h1 className="font-bold text-xl">{props.title}</h1>
        <p className="text-sm overflow-hidden max-h-[500px]">{props.text}</p>
        {/* ----Label or Alert----- */}
        {/* <div className="flex gap-2">
        <span className="bg-gray-300 text-xs font-semibold px-2 py-1 rounded-full">
          Study JAV
        </span>
        <span className="bg-gray-300 text-xs font-semibold px-2 py-1 rounded-full">
          Wroking
        </span>
      </div> */}
        {/* ----Date & Option----- */}
        <div className="flex justify-between text-[12px] items-center align-middle">
          <div className="flex items-center gap-2 font-semibold">
            <SlCalender />
            <span>{props.createDate}</span>
          </div>
        </div>
      </div>
      <div ref={optionRef} className="relative">
        <button
          onClick={showOptionsHandler}
          className="w-7 h-7 absolute bottom-3 right-3 rounded-full hover:bg-gray-200"
        >
          <BiDotsVerticalRounded className="w-5 h-6 mx-auto" />
        </button>
        {showOptions && (
          <NoteOptions noteID={props.uuid} onClose={hideOptionsHandler} />
        )}
      </div>
    </div>
  );
};

export default NoteSheet;
