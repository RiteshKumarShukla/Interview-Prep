import { useEffect, useState } from "react";

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") || false);

    const toggleDarkMode =()=>{
        if(isDarkMode){
            localStorage.setItem('theme',false)
            setIsDarkMode(false)
        }
        else{
            localStorage.setItem('theme',true)
            setIsDarkMode(true)
        }
    }
    return [isDarkMode,toggleDarkMode]
};

export default useDarkMode;
