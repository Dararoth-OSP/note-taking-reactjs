import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../store/search";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchIsShown = useSelector((state) => state.search.showSearch);

  const inputSearchHandler = (event) => {
    dispatch(searchActions.showSearch());
    dispatch(searchActions.handleSearchNote(event.target.value));
  };

  const closeSearchHandler = () => {
    dispatch(searchActions.hideSearch());
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeSearchHandler();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="flex-1">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiSearch className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="search"
            id="default-search"
            placeholder="Search your notes"
            onChange={inputSearchHandler}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-gray-400 focus:border-gray-400 focus:outline-none"
          />
          {searchIsShown && (
            <button
              onClick={closeSearchHandler}
              className="p-2 text-white rounded-full font-medium  absolute right-2.5 bottom-2.5 bg-gray-400 hover:bg-gray-700 "
            >
              <FaTimes className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
