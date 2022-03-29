import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Search from './Search';

function NavBar() {
  const [dropDown, setDropDown] = useState(false);

  const handleSearchClick = (e) => {
    e.preventDefault();
    setDropDown(!dropDown);
  };
  return (
    <div className="bg-main py-4 px-6 w-full min-h-[56px]">
      <header
        className={`relative flex justify-center container px-8 py-5 bg-white h-[80px] ${
          dropDown ? 'rounded-t-lg' : 'rounded-lg'
        } text-black`}
      >
        <h3 className="absolute left-8 top-7 text-xl text-second hover:text-accent font-medium font-playfair animateUnderline focus:border border-accent">
          <Link className="" to="/">
            Doc Review
          </Link>
        </h3>
        <div className="hidden md:block">
          <Search />
        </div>
        {/* <a href="#" className="text-accent hover:text-lightaccent">
          <div className="flex gap-3 align-middle items-center">
            <FaUser className="h-8 w-8" />
            <div className="hidden md:block">
              <h3 className="text-base font-medium text-third">Callum</h3>
              <p className="text-xs font-light text-black">
                callum0shaw@gmail.com
              </p>
            </div>
            </div>
          </a> */}
        <button
          type="button"
          className="block md:hidden bg-accent"
          onClick={handleSearchClick}
        >
          <MdSearch size={28} className="fill-white focus:fill-lightaccent" />
        </button>
      </header>
      {dropDown && (
        <div className="container px-8 py-5 bg-white rounded-b-lg text-black md:hidden">
          <Search />
        </div>
      )}
    </div>
  );
}

export default NavBar;
