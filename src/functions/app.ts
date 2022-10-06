import { useLocation } from "react-router-dom";

export const useInitialState = () => {
    return useLocation().pathname.split('/').filter(a => a!=='').pop()?.split('-').join(' '); 
}