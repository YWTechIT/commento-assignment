import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T){
    
    const readValue = () => {
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }catch(error){
            console.warn(error);
            return initialValue;
        }
    }
    const [storedValue, setStoredValue] = useState<T>(readValue);
    
    const setValue = (value: T | ((val: T) => T)) => {
        try{
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }catch(error){
            console.warn(error);
        }
    }
    return [storedValue, setValue] as const;
}