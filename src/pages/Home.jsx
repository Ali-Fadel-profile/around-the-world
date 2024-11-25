import CountryList from "../components/CountryList.jsx";
import RegionMenu from "../components/RegionMenu.jsx";
import SearchInput from "../components/SearchInput.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import useFetchData from "../useFetchData.js";

function Home() {
  const {
    isError,
    isLoading,
    result,
    filteredCountries,
    setFilteredCountries,
  } = useFetchData();
  return (
    <div className="container mx-auto px-5 ">
      {isLoading && <LoadingSpinner />}
      {isError && <ErrorMessage />}
      {!isLoading && !isError && (
        <div>
          <div className="flex flex-col items-center gap-10 mb-10 justify-between md:flex-row ">
            <SearchInput
              countriesList={result}
              setFilterdCountries={setFilteredCountries}
            />
            <RegionMenu
              countriesList={result}
              setFilterdCountries={setFilteredCountries}
            />
          </div>
          <CountryList countries={filteredCountries} />
        </div>
      )}
    </div>
  );
}

export default Home;
