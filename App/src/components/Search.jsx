import React, { useState, useRef } from 'react';
import { MdSearch } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { getSearchResults } from '../utils/firebase';
import { useOnClickOutside } from '../utils/hooks';
import Stars from './Stars';

function Search() {
  const [results, setResults] = useState([]);
  const { register, handleSubmit } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  // Closes ref element when clicking outside - for search results
  useOnClickOutside(ref, () => setIsOpen(false));

  async function handleSearch(data) {
    await getSearchResults(data.search);
  }
  // Will display results live
  async function handleChange(event) {
    event.preventDefault();
    setIsOpen(true);
    const { value } = event.target;
    const docs = await getSearchResults(value);
    const names = docs.map((d) => ({ name: d.name, rating: d.rating }));
    setResults(names);
  }

  return (
    <div className="w-max-80 relative">
      <form
        className="w-max-80 relative h-10"
        onSubmit={handleSubmit(handleSearch)}
        onChange={handleChange}
      >
        <div className="flex items-center h-fit">
          <input
            {...register('search')}
            id="search"
            className="pr-5 pl-12 py-2 bg-offWhite w-full outline-0 h-10"
            type="search"
            placeholder="Search here!"
            autoComplete="off"
          />
          <button
            type="submit"
            className="absolute top-[9px] left-1 overflow-hidden border-r-2 border-grey px-1"
          >
            <MdSearch className="fill-grey" size={24} />
          </button>
        </div>
      </form>
      {isOpen && (
        <ul ref={ref} className="w-full grid gap-11 my-1">
          {results.map((r) => (
            <li key={r.name} className="relative w-full h-fit">
              <div className="w-full h-10 absolute bg-offWhite opacity-50" />
              <Link
                className="absolute h-10 w-full px-12 outline-none border border-grey focus:border-lightaccent flex flex-row justify-between items-center"
                to={`/docs/${r.name}`}
              >
                <p
                  className="text-accent text-sm font-medium animateUnderline w-fit"
                >
                  {r.name}
                </p>
                <Stars rating={r.rating} size={14} showReview={false} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
