import AppRouter from "./config/Router"

/* Components Imports */
import NavBar from "./components/NavBar"
import Input from "./components/Input"
import Dropdown from "./components/Dropdown"

/* Context Imports */
import CountriesProvider from "./context/CountriesProvider"

function App() {
  return (
    <>
      <div className="font-Nunito">
        <CountriesProvider>
          <NavBar />
          <Input />
          <Dropdown />
          <AppRouter />
        </CountriesProvider>
      </div>
    </>
  )
}

export default App
