function SearchBar({search, searchChange}) {
    
    return (
      <div className="flex justify-center h-10 w-full">
        <input
          className="w-sm h-15 border border-white-500 px-4 py-2 bg-blue-600/30 placeholder:text-white text-center text-xl rounded-2xl mt-10 hover:scale-105"
          type="text"
          placeholder="Which city do you want to visit?"
          value={search}
          onChange={searchChange}
        />
      </div>
    );
  }

  export default SearchBar;