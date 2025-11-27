import { useState,useEffect } from "react"; 
export const useSessionStorage = (key, initialValue) => {
    const [storedValue,setStoredValue] = useState(() => {
        try{
            const item = window.sessionStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }catch(e){
            console.log(e);
            return initialValue;
        }
    });
    const setValue=(value)=>{
        try{
            const valueToStore=value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.sessionStorage.setItem(key,JSON.stringify(valueToStore));
        }
        catch(e){
            console.log(e);
        }
    };
    return [storedValue,setValue];
}