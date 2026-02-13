import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

function ThemeSetting() {
const [theme, setTheme] = useState("light");

return(
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <Toolbar />
    </ThemeContext.Provider>
);

}

const Toolbar = () => {
const {theme, setTheme} = useContext(ThemeContext)
return (
    <div>Toolbar current theme : {theme}
        <button onClick={()=>{setTheme(theme === 'light'?'dark':'light')}}>Change Theme</button>
    </div>

)
}


export default ThemeSetting;


