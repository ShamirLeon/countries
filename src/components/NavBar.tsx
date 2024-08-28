import { useContext } from "react"
import { CountriesContext } from "../context/CountriesContext"

/* Icons */
import SunIcon from "../assets/Sun";
import MoonIcon from "../assets/Moon";

export default function NavBar() {

    const { toggleDarkMode, darkMode } = useContext(CountriesContext);
    return (
        <header className="fixed left-0 top-0 w-full shadow-md bg-pureWhite dark:bg-darkBlue z-[999] dark:text-pureWhite">
            <nav className="flex items-center justify-between py-4 pl-8 pr-4">
                <h2 className="font-bold">Where in the world?</h2>
                <button role="button" onClick={()=> toggleDarkMode()} className="px-3 py-2">
                    {darkMode ? <SunIcon fill="#FFD700" /> : <MoonIcon fill="#B0C4DE" />}
                </button>
            </nav>
        </header>
    )
}