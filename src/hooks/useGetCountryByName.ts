import { useState, useEffect } from "react";
import { ICountry } from "../interfaces/interfaces";
import API from "../config/API";

export default function useGetCountryByName(name: string) {
    const [countries, setCountries] = useState<ICountry[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fecthData = async () => {
            try {
                const { data }: { data: ICountry[] } = await API.get(`/name/${name}`);
                if (data.length) {
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
            setCountries(null);
            setLoading(true);
            setError(null);
        };
    }, [name]);

    return { countries, loading, error, setCountries, setLoading };
}
