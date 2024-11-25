import { useEffect, useState } from "react";

function useFetchData(country) {
    const [result, setResult] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (country) {
            fetchDataFromAPI();
        } else {
            fetchDataFromStorage();
        }
    }, []);

    const fetchDataFromAPI = async () => {
        let url = "https://restcountries.com/v3.1/all";
        setIsLoading(true);

        if (country) {
            url = `https://restcountries.com/v3.1/name/${country}`;
        }
        try {
            const result = await fetch(url);
            const data = await result.json();

            if (country) {
                // country page
                setResult(data[0])
            } else {
                // Home Page
                setResult(data)
                setFilteredCountries(data);
                localStorage.setItem("countries", JSON.stringify(data));
            }
        } catch (error) {
            setIsError(true)
            console.log(error);

        }
        setIsLoading(false);
    }

    const fetchDataFromStorage = () => {
        const data = JSON.parse(localStorage.getItem("countries"));
        if (data) {
            setResult(data);
            setFilteredCountries(data);
        } else {
            fetchDataFromAPI();
        }
    }

    return { isError, isLoading, result, filteredCountries, setFilteredCountries };
}

export default useFetchData;
