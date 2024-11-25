import Select from "react-select";

function RegionMenu({ countriesList, setFilterdCountries }) {
  const handleRegions = (event) => {
    const selectedRegion = event.label;

    const filteredCountries =
      event.label === "All regions"
        ? countriesList
        : countriesList.filter((country) => country.region === selectedRegion);
    setFilterdCountries(filteredCountries);
  };
  const options = [
    { value: "all regions", label: "All regions" },
    { value: "africa", label: "Africa" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  return (
    <Select
      onChange={handleRegions}
      defaultValue={options[0]}
      options={options}
      classNames={{
        input: () => "dark:!text-gray-100",
        singleValue: () => "dark:!text-gray-100",
        control: () =>
          "flex h-12 w-full min-w-72 justify-between gap-12 rounded-md !border-none pl-4 pr-2 shadow dark:!bg-gray-800 dark:!text-gray-100 md:h-14",
        indicatorSeparator: () => "hidden",
        option: () => "hover:!text-gray-800",
        menu: () => "bg-gray-100 dark:!bg-gray-800 dark:!text-gray-100",
      }}
    />
  );
}

export default RegionMenu;
// control: () =>
//   "flex h-12 w-50 items-center justify-between gap-12 rounded-md !border-none pl-4 pr-2 shadow dark:!bg-gray-800 dark:!text-gray-100 md:h-14",
