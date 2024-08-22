import { useEffect, useState } from "react";
import API from "../config/API";

function useGetCountries() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fecthData = async () => {
            try {
                const response = await API.get("/all");
                setCountries(response.data);
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
            setLoading(true);
            setError(null);
        };
    }, []);

    return { countries, loading, error };
}

export default useGetCountries;