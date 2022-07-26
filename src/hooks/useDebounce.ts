import React from "react";
import {useState} from "react";

export const useDebounce = (value: string, delay = 300) => {
    const [debounced, setDebounced] = useState(value);

   React.useEffect(() => {
        const handler = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(handler);
   }, [value, delay]);

   return debounced;
}