import React, { useState } from 'react';
import { RiSearch2Line, RiCloseFill } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { getSearchResults } from '../utils/firebase';

function Search() {
  const [results, setResults] = useState([]);
  const { register, handleSubmit } = useForm();

  async function handleSearch(data) {
    await getSearchResults(data.search);
  }
  async function handleChange(event) {
    event.preventDefault();
    const { value } = event.target;
    const docs = await getSearchResults(value);
    const names = docs.map((d) => ({ name: d.name, id: d.docID }));
    setResults(names);
  }

  return (
    <div className="w-max-80 relative inline-block">
      <form
        className="w-max-80 relative h-10"
        onSubmit={handleSubmit(handleSearch)}
        onChange={handleChange}
      >
        <input
          {...register('search')}
          className="px-5 py-2 bg-offWhite w-full outline-0 rounded"
          type="text"
          placeholder="Enter doc name"
          autoComplete="off"
        />
        <button
          type="submit"
          className="absolute top-3 right-6 overflow-hidden"
        >
          <RiSearch2Line className="" size={18} />
          <RiCloseFill className="hidden" size={18} />
        </button>
      </form>
      {results.length > 0 && (
        <div className="absolute w-full grid">
          <div className="w-full h-8 absolute bg-offWhite opacity-50" />
          {results.map((r) => (
            <Link
              className="absolute h-8 w-full px-5 py-2"
              to={`/docs/${r.name}`}
            >
              <p className="text-accent text-sm font-medium" key={r}>
                {r.name}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
