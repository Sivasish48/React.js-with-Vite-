import {createContext,useContext} from 'react'


// let us make a or create a  theme context here and give some properties and value such as default theme , light mode and dark mode

const themeContext = createContext({
    themeMode:"light",
    darkMode:()=>{},
    lightMode:()=>{}
})

// Now create the context provider

const ThemeProvider = themeContext.Provider

// now let us create a custom hook which holds the accessibility to use this themeContext by using useContext hook

const useTheme = ()=>{
    return useContext(themeContext)
}

// now export these things

export {themeContext,ThemeProvider}
export default useTheme