"use client";

import React from "react";
import { IoSearch } from "react-icons/io5";

interface SearchFromProps {
  setSearchTerm: (term: string) => void;
}

const SearchForm: React.FC<SearchFromProps> = ({ setSearchTerm }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="mb-4 flex w-full justify-center p-1">
      <div className="relative w-full">
        <input
          type="text"
          className="w-full rounded-lg border-2 border-gray-100 bg-white/20 py-2 pl-10 pr-4 backdrop-blur-sm transition-colors duration-300 focus:border-violet-300 focus:outline-none"
          placeholder="Search..."
          onChange={handleInputChange}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <IoSearch className="h-4 w-4 text-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
