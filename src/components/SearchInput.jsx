import { useRef } from "react";

function SearchInput({ countriesList, setFilterdCountries }) {
  const inputRef = useRef();
  const debounceTimer = useRef(null);

  const handleChange = () => {
    const searchTerm = inputRef.current.value.toLowerCase().trim();

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      const matchedCountries = countriesList.filter((country) =>
        country.name.official.toLowerCase().includes(searchTerm)
      );
      setFilterdCountries(matchedCountries);
    }, 400);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="relative flex-1">
      <div className="absolute left-8 top-5">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="search">
            <path
              id="Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
              fill="#848484"
            />
          </g>
        </svg>
      </div>
      <input
        type="text"
        name="search"
        onChange={handleChange}
        ref={inputRef}
        className="h-12  w-full min-w-80 max-w-96 rounded-full pl-20 shadow md:h-14 dark:bg-gray-800"
        placeholder="Search..."
      />
    </form>
  );
}

export default SearchInput;