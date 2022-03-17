import React, { useState } from 'react';
import Search from './Search';
import { FaUser } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';

const NavBar = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleSearchClick = (e) => {
    e.preventDefault();
    setDropDown(!dropDown);
  };
  return (
    <div className="py-4 px-6 absolute top-0 left-0 w-full min-h-[56px]">
      <header
        className={`container flex justify-between items-center px-8 py-5 bg-white ${
          dropDown ? 'rounded-t-lg' : 'rounded-lg'
        } text-black`}
      >
        <a href="#">
          <h3 className="text-xl text-second hover:text-third font-medium font-playfair">
            Doc Review
          </h3>
        </a>
        <div className="hidden md:block">
          <Search />
        </div>
        <a href="#" className="text-accent hover:text-lightaccent">
          <div className="flex gap-3 align-middle items-center">
            <FaUser className="h-8 w-8" />
            <div className="hidden md:block">
              <h3 className="text-base font-medium text-third">Callum</h3>
              <p className="text-xs font-light text-black">
                callum0shaw@gmail.com
              </p>
            </div>
            <button onClick={handleSearchClick}>
              <MdSearch size={28} className="block md:hidden mx-4" />
            </button>
          </div>
        </a>
      </header>
      {dropDown && (
        <div className="container px-8 py-5 bg-white rounded-b-lg text-black md:hidden">
          <Search />
        </div>
      )}
    </div>
  );
};

export default NavBar;
