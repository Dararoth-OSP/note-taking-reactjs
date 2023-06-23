import React, { useCallback, useEffect, useState } from "react";
import NoteSheet from "./NoteSheet";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
//MUI
import Masonry from "@mui/lab/Masonry";
import SearchResult from "../SearchResult/SearchResult";

const MyNote = () => {
  const [notes, setNotes] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const searchIsShown = useSelector((state) => state.search.showSearch);

  const fetchNotesHandler = useCallback(async function () {
    onValue(ref(db), (snapshot) => {
      setNotes([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((note) => {
          setNotes((prevNote) => [...prevNote, note]);
        });
      }
    });
  }, []);

  useEffect(() => {
    fetchNotesHandler();
  }, [fetchNotesHandler]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateColumnCount = () => {
    if (screenWidth >= 1280) {
      return 4;
    } else if (screenWidth >= 1023) {
      return 3;
    } else if (screenWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  };

  const pinnedNotes = notes.filter((note) => note.pin === true);
  const otherNotes = notes.filter((note) => note.pin === false);

  let pinnedSection = "";
  let otherSection = "";

  if (pinnedNotes.length > 0) {
    pinnedSection = pinnedNotes.map((pin) => (
      <NoteSheet
        key={pin.uuid}
        uuid={pin.uuid}
        title={pin.title}
        text={pin.text}
        createDate={pin.createDate}
      />
    ));
  }

  if (otherNotes.length > 0) {
    otherSection = otherNotes.map((note) => (
      <NoteSheet
        key={note.uuid}
        uuid={note.uuid}
        title={note.title}
        text={note.text}
        createDate={note.createDate}
      />
    ));
  }

  return (
    <React.Fragment>
      {!searchIsShown && (
        <div>
          {pinnedSection && (
            <label className="font-semibold block mb-3 text-xs text-gray-500 ml-2 tracking-wider">
              PINNED
            </label>
          )}
          {pinnedSection && (
            <Masonry columns={calculateColumnCount()} spacing={2}>
              {pinnedSection}
            </Masonry>
          )}
          {pinnedSection && otherSection && (
            <label className="font-semibold block mb-3 mt-8 text-xs text-gray-500 ml-2 tracking-wider">
              OTHERS
            </label>
          )}
          <Masonry columns={calculateColumnCount()} spacing={2}>
            {otherSection}
          </Masonry>
        </div>
      )}
      {searchIsShown && (
        <SearchResult notes={notes} columns={calculateColumnCount()} />
      )}
    </React.Fragment>
  );
};

export default MyNote;
