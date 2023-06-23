import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteSheet from "../Note/NoteSheet";
import Masonry from "@mui/lab/Masonry";
import { searchActions } from "../../store/search";

const SearchResult = (props) => {
  const dispatch = useDispatch();
  const [searchNotes, setSearchNotes] = useState("");
  let search = useSelector((state) => state.search.search);

  useEffect(() => {
    setSearchNotes(search);
  }, [search]);

  let searchSection = "";
  let searchArray = props.notes.filter((note) =>
    note.text.toLowerCase().includes(searchNotes) || note.title.toLowerCase().includes(searchNotes)
  );

  if (searchArray.length > 0 && search !== "") {
    searchSection = searchArray.map((search) => (
      <NoteSheet
        key={search.uuid}
        uuid={search.uuid}
        title={search.title}
        text={search.text}
        createDate={search.createDate}
      />
    ));
  }

  console.log(searchArray);

  return (
    <React.Fragment>
      {searchArray.length > 0 && (
        <label className="font-semibold block mb-3 mt-8 text-xs text-gray-500 ml-2 tracking-wider">
          SEARCH RESULT
        </label>
      )}
      {search === "" ||
        (searchArray.length === 0 && (
          <label className="font-semibold text-center block mb-3 mt-40 text-gray-500 ml-2 tracking-wider">
            NO MATCH FOUNDED !
          </label>
        ))}
      <Masonry columns={props.columns} spacing={2}>
        {searchSection}
      </Masonry>
    </React.Fragment>
  );
};

export default SearchResult;
