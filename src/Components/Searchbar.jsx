import React, { useState, useRef } from "react";
import insta from "../assets/insta.png";
import youtube from "../assets/youtube.png";

const Searchbar = ({
  setSearchInput,
  searchInput,
  setYoutube,
  setInstagram,
}) => {
  const formRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ searchInput });

    // Check if the input value contains 'youtu.be' and setYoutube to true
    if (searchInput.includes("youtu.be")) {
      setYoutube(true);
    } else {
      setYoutube(false);
    }

    // Check if the input value contains 'instagram' and setInstagram to true
    if (searchInput.includes("instagram")) {
      setInstagram(true);
    } else {
      setInstagram(false);
    }

    // Reset the search input field using the form reference
    formRef.current.reset();
  };

  

  return (
    <div className="flex flex-col">
      <div className="flex flex-col my-4 md:flex-row">
        <img src={youtube} alt="" />
        <img src={insta} alt="" />
      </div>

      <div className="flex flex-col justify-center " >
        <div>
        <form
            ref={formRef}
            onSubmit={handleSearch}
            className="flex justify-center"
          >
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-black sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative w-80">
              <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onChange={(e) => setSearchInput(e.target.value)}
                type="search"
                id="default-search"
                className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your instagram and youtube url here"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
