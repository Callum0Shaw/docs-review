import React from 'react';
import { useState } from 'react';
import { RiSearch2Line, RiCloseFill } from 'react-icons/ri';

const Search = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <form className="w-max-80 relative h-10">
        <input
          className="px-5 py-2 bg-grey w-full outline-0 rounded"
          type="text"
          placeholder="Enter doc name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="absolute top-3 right-6 overflow-hidden"
        >
          <RiSearch2Line className="" size={18} />
          <RiCloseFill className="hidden" size={18} />
        </button>
      </form>
    </>
  );
};

export default Search;
