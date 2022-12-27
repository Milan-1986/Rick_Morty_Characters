import { useEffect, useState } from "react";

function useFetch(url: string) {

    const[data, setData] = useState<any>([]); 
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    useEffect(()=> {
        setLoading(true);
        const fetchData = async () => {
            try {
                await fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error: ${response.status}`);
                      }
                 return response.json()})
                .then(dataJson => setData(dataJson.results))  
                setLoading(false);
            } catch (error: any) {
                setLoading(false);
                setError(error);
                
            }
        };
        fetchData();
    },[url]);
    
    return  { loading, data, error };
}
export default useFetch;