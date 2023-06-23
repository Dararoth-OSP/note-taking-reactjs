import React, { useEffect, useRef, useState } from "react";
import {
  MdAddAlert,
  MdOutlineNewLabel,
  MdOutlineColorLens,
  MdArchive,
} from "react-icons/md";
import { FiImage } from "react-icons/fi";
import { BiPin } from "react-icons/bi";
import { BsPinFill } from "react-icons/bs";

import { db } from "../../firebase";
import { uid } from "uid";
import { ref, set } from "firebase/database";

import TextareaAutosize from "@mui/base/TextareaAutosize";

const NewNoteForm = (props) => {
  const formRef = useRef();

  const [isPin, setIsPin] = useState(false);
  const [isArchive, setIsArchive] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredText, setEnteredText] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const closeButtonHandler = () => {
    props.onClose();
  };

  const pinClickHandler = () => {
    setIsPin((prev) => !prev);
  };

  const mm = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];



  const formSubmitHandler = (event) => {
    event.preventDefault();

    const uuid = uid();
    let today = new Date();
    let day = today.getDate();
    let month = mm[today.getMonth()];
    let year = today.getFullYear();
    let date = `${month} ${day}, ${year}`;

    if (enteredText === "" && enteredTitle === "") {
      closeButtonHandler();
      return;
    } else {
      set(ref(db, `/${uuid}`), {
        uuid: uuid,
        title: enteredTitle,
        text: enteredText,
        createDate: date,
        pin: isPin,
        archive: isArchive,
        trash: false,
        alarm: null,
      });
    }

    closeButtonHandler();
    setEnteredTitle("");
    setEnteredText("");
  };

  //This use to click outside the form
  useEffect(() => {
    let handler = (event) => {
      if (!formRef.current.contains(event.target)) {
        formSubmitHandler(event);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <form
      ref={formRef}
      onSubmit={formSubmitHandler}
      className="flex flex-col bg-white my-4 rounded-lg p-4 py-3 w-[580px] shrink m-auto shadow-xl text-gray-900"
    >
      <input
        type="text"
        placeholder="Title"
        onChange={titleChangeHandler}
        className="focus:outline-none pb-1 mb-3 border-b-2 font-semibold text-lg"
        value={enteredTitle}
      ></input>
      <TextareaAutosize
        className="focus:outline-none"
        minRows={10}
        maxRows={20}
        placeholder="text here ..."
        onChange={textChangeHandler}
        value={enteredText}
      ></TextareaAutosize>
      <div className="flex flex-col sm:flex-row justify-between mt-3">
        <div className="flex items-center justify-between gap-2 sm:gap-5">
          {isPin ? (
            <BsPinFill
              onClick={pinClickHandler}
              className="w-7 h-7 rounded-full p-1 hover:bg-gray-300"
            />
          ) : (
            <BiPin
              onClick={pinClickHandler}
              className="w-7 h-7 rounded-full p-1 hover:bg-gray-300"
            />
          )}
          <MdAddAlert className="w-7 h-7 rounded-full p-1 hover:bg-gray-300" />
          <FiImage className="w-7 h-7 rounded-xl p-1  hover:bg-gray-300" />
          <MdOutlineNewLabel className="w-7 h-7 rounded-full p-1 hover:bg-gray-300" />
          <MdArchive className="w-7 h-7 rounded-full p-1 hover:bg-gray-300" />
          <MdOutlineColorLens className="w-7 h-7 rounded-full p-1 hover:bg-gray-300" />
        </div>
        <button
          type="submit"
          // onClick={closeButtonHandler}
          className="font-semibold py-2 px-7 text-xs border-2 sm:border-none md:text-base rounded-lg hover:bg-gray-100  mt-2"
        >
          Save & Close
        </button>
      </div>
    </form>
  );
};

export default NewNoteForm;
