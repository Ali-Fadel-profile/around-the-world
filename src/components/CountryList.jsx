import Countrycard from "./Countrycard";
import EmptySearch from "./EmptySearch";

function CountryList({ countries }) {
  return countries && countries.length ? (
    <div
      className="py-8 max-w-full grid gap-x-10 gap-y-12 md:mt-12 md:gap-y-10"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, auto))" }}
    >
      {countries.map((country) => (
        <Countrycard
          key={country.name.official}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flag={country.flags.svg}
        />
      ))}
    </div>
  ) : (
    <EmptySearch />
  );
}

export default CountryList;
