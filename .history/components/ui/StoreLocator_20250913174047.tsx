import { useState } from "react";

export default function StoreLocator() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!search.trim()) {
      setError("This field cannot be empty!");
    } else {
      setError("");
      console.log("Searching for:", search);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-20
    rounded-lg shadow-md text-xs font-bold">
      <h2 className="font-semibold mb-4 text-start ml-2">Store Locator</h2>

      {/*<div className="flex flex-col gap-2">*/}
      <div className="flex flex-col gap-1 w-full">
        <div className="inline-flex mb-1 gap-2">
          <input
            type="text"
            placeholder="Search by city or ZIP code"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" p-2 rounded-sm bg-slate-950
            focus:outline-none focus:ring-2 focus:ring-white
            border-b"
          />


          <button
            onClick={handleSearch}
            className="mt-2 text-white px-1 py-2 ml-1"
          >
            Search
          </button>
        </div>

        <div className="ml-2">
          {error && <p className="text-red-400 tracking-wider">{error}</p>}
        </div>
       </div>

    </div>
  );
}