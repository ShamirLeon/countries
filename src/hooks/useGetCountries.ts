import { useEffect, useState } from "react";
import { ICountry } from "../interfaces/interfaces";
import API from "../config/API";

function useGetCountries() {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [countriesWithOffset, setCountriesWithOffset] = useState<ICountry[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const offset = 8;

    useEffect(() => {
        const fecthData = async () => {
            try {
                const { data }: { data: ICountry[] } = await API.get("/all");
                if (data.length > 0) {
                    const countriesWithOffset = data.slice(0, offset);
                    setCountriesWithOffset(countriesWithOffset);
                    setCountries(data);
                }
                setLoading(false);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fecthData();

        return () => {
            setCountries([]);
            setCountriesWithOffset([]);
            setLoading(true);
            setError(null);
        };
    }, []);

    return { countries, loading, error, setCountries, countriesWithOffset, setCountriesWithOffset, setLoading };
}

export default useGetCountries;