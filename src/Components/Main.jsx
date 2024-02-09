import React from "react";
import Searchbar from "./Searchbar";

const Main = ({ apiData, instagram, youtube }) => {
  return (
    <>
      {console.log(apiData)}
      {apiData ? (
        <>
         {/* Instagram */}
          {instagram ? (
            <div className="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col justify-center ">
                <img
                  className="h-auto max-w-xs"
                  src={apiData.data.thumbnail}
                  alt="image description"
                />
                <h1>{apiData.data.title}</h1>
              </div>

              <div className="flex flex-col justify-center text-center ">
                <a href={apiData.data.medias[0].url}>
                  {" "}
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Download {apiData.data.medias[0].quality}{" "}
                    {apiData.data.medias[0].type}{" "}
                    {apiData.data.medias[0].extension}
                  </button>
                </a>
              </div>
            </div>
          ) : null}
          {/* Youtube */}
          {youtube ? (
            <div className="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col justify-center ">
                <img
                  className="h-auto max-w-xs"
                  src={apiData.data.thumbnail}
                  alt="image description"
                />
                <h1>{apiData.data.title}</h1>
              </div>

              <div className="flex flex-col justify-center text-center ">
                <a
                  href={apiData.data.medias[0].url}
                  download={true}
                  target="_blank"
                >
                  {" "}
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Download {apiData.data.medias[0].quality}{" "}
                    {apiData.data.medias[0].type}
                  </button>
                </a>
                <a href={apiData.data.medias[1].url}>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Download {apiData.data.medias[1].quality}{" "}
                    {apiData.data.medias[1].type}
                  </button>
                </a>

                <a href={apiData.data.medias[2].url}>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Download {apiData.data.medias[2].quality}{" "}
                    {apiData.data.medias[2].type}
                  </button>
                </a>
              </div>
            </div>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default Main;
