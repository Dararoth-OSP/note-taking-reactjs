import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Header/Header";
import NewNote from "./components/NewNote/NewNote";
import MyNote from "./components/Note/MyNote";
import NoteEdit from "./components/NoteEdit/NoteEdit";
import { useEffect } from "react";
//
import { useSelector } from "react-redux";
import DeleteModal from "./components/NoteDelete/DeleteModal";
import { useState } from "react";

function App() {
  const isEdit = useSelector((state) => state.edit.isEdit);
  const isDelete = useSelector((state) => state.delete.isShowDelete);
  const isSearch = useSelector((state) => state.search.showSearch);
  const [isFixed, setIsFixed] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setIsFixed(true)
      } else {
        setIsFixed(false);
      }
    };

    handleResize(); // Check initial width on component mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-screen flex bg-slate-200">
      {isEdit && <NoteEdit />}
      {isDelete && <DeleteModal />}
      <Sidebar></Sidebar>
      <div className={`py-4 flex-1 p-4 ${isFixed ? 'pl-24' : 'pl-4'} overflow-auto`}>
        <Header />
        {!isSearch && <NewNote />}
        <MyNote />
      </div>
    </div>
  );
}

export default App;
