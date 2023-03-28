import { useState, useEffect, useRef } from "react";

import Characters from "./components/Characters";
import Status from "./components/Status";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [characters, setCharacters] = useState([]);
  const [status, setStatus] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
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
          ref={searchRef}
        />
        <button
          className="bg-slate-200 mt-10 ml-1 p-1 hover:bg-slate-300 rounded-md font-semibold"
          onClick={() => setSearchInput(searchRef.current.value)}
        >
          Search
        </button>
      </div>
      <Status status={status} setStatus={setStatus} />
      <div className="flex justify-center mt-12">
        <h1 className="font-bold text-2xl capitalize">
          {status} character pictures
        </h1>
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
