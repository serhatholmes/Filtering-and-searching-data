const Status = ({ status, setStatus }) => {
  return (
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
  );
};

export default Status;
