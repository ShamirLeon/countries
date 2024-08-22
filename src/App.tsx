import AppRouter from "./config/Router"

/* Components Imports */
import NavBar from "./components/NavBar"
import Input from "./components/Input"
import Dropdown from "./components/Dropdown"

function App() {
  return (
    <>
      <div className="font-Nunito">
        <NavBar />
        <Input />
        <Dropdown />
        <AppRouter />
      </div>
    </>
  )
}

export default App
