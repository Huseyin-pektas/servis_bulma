import { createContext, useState } from "react"

export const ThemeContext = createContext({})


export default function ThemeContextProvider(probs){

    const [theme, setTheme] = useState("light")

    const ContextValue = {theme,setTheme ,toggleTheme: () => {
        if (theme === "light") {
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }}

    return <ThemeContextProvider value={ContextValue}>
        {probs.children}
        </ThemeContextProvider>
}