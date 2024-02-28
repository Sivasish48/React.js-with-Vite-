import { useEffect,useState } from "react"
import { ThemeProvider } from "./Contexts/Theme"
import Card from "./Components/Card"
import ThemeButton from "./Components/ThemeButton"
function App() {
  // now create a useState for the changing of themes with the given values in the themeProvider

  const [themeMode,SetThemeMode] = useState("light")

  const lightMode = ()=>{
     SetThemeMode("light")
  }

  const darkMode = ()=>{
    SetThemeMode("dark")
  }

  //actual theme change or mode change through an useEffect
    useEffect(()=>{
     const html = document.querySelector('html')
     html.classList.remove("light","dark")
     // now add those values

     html.classList.add(themeMode)
    },[themeMode])

  return (
    <>
      
     {/*Now use the themeProvider here*/}
     {/*Now here we also have to pass the value here as weel the th=ype of themes*/}
     <ThemeProvider value={{themeMode,darkMode,lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/*theme button */}
                        <ThemeButton/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* card */}
                       <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>
   </>
  )
}

export default App
