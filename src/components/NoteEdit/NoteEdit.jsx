import React, { useContext, useState, useRef } from "react";
import Modal from "../UI/Modal";
import {
  MdAddAlert,
  MdOutlineNewLabel,
  MdOutlineColorLens,
  MdArchive,
} from "react-icons/md";
import { FiImage } from "react-icons/fi";
import { BiPin } from "react-icons/bi";
// import { BsPinFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { editActions } from "../../store/edit";
//Database
import { ref, update } from "firebase/database";
import { db } from "../../firebase";
//MUI
import TextareaAutosize from '@mui/base/TextareaAutosize';


const NoteEdit = () => {
  const dispatch = useDispatch();
  const uuid = useSelector((state) => state.note.uuid);
  const title = useSelector((state) => state.note.title);
  const text = useSelector((state) => state.note.text);

  const [editedUuid, setEditedUuid] = useState(uuid);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedText, setEditedText] = useState(text);

  const titleChangeHandler = (event) => {
    setEditedTitle(event.target.value);
  };

  const textChangeHandler = (event) => {
    setEditedText(event.target.value);
  };

  const editFormSubmitHandler = (events) => {
    events.preventDefault();

    update(ref(db, `/${editedUuid}`), {
      uuid: editedUuid,
      title: editedTitle,
      text: editedText,
    });

    dispatch(editActions.hideEdit());
  };

  return (
    <Modal onClose={editFormSubmitHandler}>
      <form
        onSubmit={editFormSubmitHandler}
        className="flex flex-col text-gray-900"
      >
        <input
          type="text"
          className="focus:outline-none pb-1 mb-3 border-b-2 font-semibold text-lg"
          value={editedTitle} //Value from the note we select
          onChange={titleChangeHandler}
        ></input>
        <TextareaAutosize
          className="focus:outline-none"
          minRows={3}
          maxRows={20}
          placeholder="text here ..."
          value={editedText} //Value from the note we select
          onChange={textChangeHandler}
        ></TextareaAutosize>
        <div className="flex justify-between mt-3">
          <div className="flex items-center gap-5">
            <BiPin className="w-7 h-7 rounded-full p-1 hover:bg-gray-300" />
            <MdAddAlert className="w-7 h-7 rounded-full p-1 hover:bg-gray-300" />
            <FiImage className="w-7 h-7 rounded-xl p-1  hover:bg-gray-300" />
            <MdOutlineNewLabel className="w-7 h-7 rounded-full p-1 hover:bg-gray-300" />
            <MdArchive className="w-7 h-7 rounded-full p-1 hover:bg-gray-300" />
            <MdOutlineColorLens className="w-7 h-7 rounded-full p-1 hover:bg-gray-300" />
          </div>
          <button
            type="submit"
            className="font-semibold py-2 px-7 rounded-lg hover:bg-slate-100"
          >
            Save & Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default NoteEdit;
