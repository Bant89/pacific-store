import { useState } from "react"

export default function useLocalStorage(key, initialValue = "") {
    // Taken from https://usehooks.com/useLocalStorage/
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {

        try {
            let item;
            item = window.localStorage.getItem(key);
            let serializedReturnItem = typeof item === Object ? JSON.parse(item) : item
            return item ? serializedReturnItem : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            let serializedValue = typeof valueToStore === Object ? JSON.stringify(valueToStore) : valueToStore
            window.localStorage.setItem(key, serializedValue);
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };
    return [storedValue, setValue];
}