import AppRouter from "./config/Router"

/* Context Imports */
import CountriesProvider from "./context/CountriesProvider"
import MainLayout from "./Layouts/MainLayout"

function App() {
  return (
    <>
      <div>
        <CountriesProvider>
          <MainLayout>
            <AppRouter />
          </MainLayout>
        </CountriesProvider>
      </div>
    </>
  )
}

export default App
