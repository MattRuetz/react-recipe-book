import { useState, useEffect } from 'react';

// Takes endpoint URL and method (optional, GET by default)
const useFetch = (url, method = 'GET') => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState(null);

    const postData = (postData) => {
        setIsPending(true);

        setOptions({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });
    };

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async (fetchOptions) => {
            setIsPending(true);

            try {
                // Successful GET OR POST (based on fetchOptions.method)
                const res = await fetch(url, {
                    ...fetchOptions,
                    signal: controller.signal,
                });

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

        // Check if method is GET or POST request
        if (method === 'GET') {
            fetchData();
        } else if (method === 'POST' && options) {
            fetchData(options); // postData() was called from somewhere
        }

        // Return a cleanup function so can catch update to unmounted component
        return () => {
            controller.abort();
        };
    }, [url, options, method]);

    return { data, isPending, error, postData };
};

export default useFetch;
