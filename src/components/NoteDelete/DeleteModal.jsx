import React from "react";
import { useDispatch } from "react-redux";
import { deleteActions } from "../../store/delete";
import { useSelector } from "react-redux";
import { remove, ref } from "firebase/database";
import { db } from "../../firebase";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClose}
      className="fixed top-0 left-0 w-full h-screen z-20 bg-black/20"
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-80 bg-white p-4 rounded-md border-2 border-gray-300 z-30 duration-500">
      <div className="bg-red">{props.children}</div>
    </div>
  );
};

const DeleteModal = () => {
  const dispatch = useDispatch();

  const uuid = useSelector((state) => state.delete.deleteNoteID);

  const confirmDeletehandler = () => {
    remove(ref(db, `/${uuid}`));

    dispatch(deleteActions.hideDelete());
  };

  const cancelClickHandler = () => {
    dispatch(deleteActions.hideDelete());
  };

  return (
    <React.Fragment>
      <Backdrop />
      <ModalOverlay>
        <h3 className="my-4 text-lg whitespace-nowrap">
          Are you sure you want to delete ?
        </h3>
        <div className="float-right space-x-4">
          <button
            onClick={confirmDeletehandler}
            className="py-2 px-5 rounded-md text-white font-semibold bg-red-400 hover:bg-red-500 hover:text-white focus:ring-2 focus:ring-red-800"
          >
            Delete
          </button>
          <button
            onClick={cancelClickHandler}
            className="py-2 px-5 rounded-md hover:bg-gray-200 font-semibold"
          >
            Cancel
          </button>
        </div>
      </ModalOverlay>
    </React.Fragment>
  );
};

export default DeleteModal;
