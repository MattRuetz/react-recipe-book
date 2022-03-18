import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setIsPending(true);

            try {
                // Good fetch
                const res = await fetch(url, { signal: controller.signal });
                if (res.status !== 200 /* not ok*/) {
                    // escape to catch block
                    throw new Error(res.statusText);
                }
                const json = await res.json();
                setData(json);
                setError(null);
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Aborted fetch to: ' + url);
                } else {
                    setError('Could not fetch data');
                    console.log(err.message);
                }
            }
            setIsPending(false);
        };

        fetchData();

        // Return a cleanup function so can catch update to unmounted component
        return () => {
            controller.abort();
        };
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;
