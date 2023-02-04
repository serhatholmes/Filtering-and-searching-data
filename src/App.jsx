import { useState, useEffect } from "react";
import axios from "Axios";
import Characters from "./components/Characters";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [characters, setCharacters] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        setCharacters(data.results);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="flex justify-center pt-20 text-5xl font-bold">SnapShot</h1>
      <div className="flex flex-row justify-center">
        <input
          id="searchInput"
          className="mt-10 p-1 rounded-sm bg-slate-100"
          type="text"
          placeholder="Search..."
        ></input>
        <button
          onClick={() => {
            setSearchInput(document.getElementById("searchInput").value);
          }}
          className="bg-slate-200 mt-10 ml-1 p-1 hover:bg-slate-300 rounded-md font-semibold"
        >
          Search
        </button>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          className={`${
            status === "" ? "bg-slate-500" : "bg-slate-800"
          } bg-slate-800 text-white p-1 hover:cursor-pointer hover:bg-slate-600 shadow-sm shadow-black rounded-md font-semibold w-14`}
          onClick={() => {
            setStatus("");
          }}
        >
          All
        </button>
        <button
          className={`${
            status === "Dead" ? "bg-red-700" : "bg-slate-800"
          } bg-slate-800 text-white p-1 hover:cursor-pointer hover:bg-slate-600 shadow-sm shadow-black rounded-md font-semibold w-14`}
          onClick={() => {
            setStatus("Dead");
          }}
        >
          Dead
        </button>
        <button
          className={`${
            status === "Alive" ? "bg-green-700" : "bg-slate-800"
          } bg-slate-800 text-white p-1 hover:cursor-pointer hover:bg-slate-600 shadow-sm shadow-black rounded-md font-semibold w-14`}
          onClick={() => {
            setStatus("Alive");
          }}
        >
          Alive
        </button>
        <button
          className={`${
            status === "unknown" ? "bg-purple-800" : "bg-slate-800"
          } bg-slate-800 text-white p-1 hover:cursor-pointer hover:bg-slate-600 shadow-sm shadow-black rounded-md font-semibold w-20`}
          onClick={() => {
            setStatus("unknown");
          }}
        >
          Unknown
        </button>
      </div>
      <div className="flex justify-center mt-12">
        <h1 className="font-bold text-2xl">{status} Character Pictures</h1>
      </div>
      <div className="flex-1 max-w-max mx-auto p-10 ">
        <Characters
          characters={characters}
          sInput={searchInput}
          status={status}
        />
      </div>
    </div>
  );
}

export default App;
