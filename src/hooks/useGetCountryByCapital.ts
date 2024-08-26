import { useState, useEffect } from "react";
import { ICountry } from "../interfaces/interfaces";
import API from "../config/API";

export default function useGetCountryByCapital(capital: string) {
    const [country, setCountry] = useState<ICountry | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fecthData = async () => {
            try {
                const { data }: { data: ICountry[] } = await API.get(`/capital/${capital}`);
                if (data.length) {
                    setCountry(data[0]);
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
            setCountry(null);
            setLoading(true);
            setError(null);
        };
    }, [capital]);

    return { country, loading, error, setCountry, setLoading };
}
