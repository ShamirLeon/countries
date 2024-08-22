import { useContext } from "react"
import { CountriesContext } from "../context/CountriesContext"

export default function NavBar() {

    const { toggleDarkMode } = useContext(CountriesContext);
    return (
        <header className="fixed left-0 top-0 w-full shadow-md bg-pureWhite dark:bg-darkBlue z-[999] dark:text-pureWhite">
            <nav className="flex justify-between py-6 px-4">
                <h2 className="font-bold">Where in the world?</h2>
                <button role="button" onClick={()=> toggleDarkMode()}>Dark Mode</button>
            </nav>
        </header>
    )
}