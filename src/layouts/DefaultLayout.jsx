import { Outlet } from "react-router-dom"
import MainMenu from "../components/MainMenu"

const DefaultLayout = () => {
  return (
    <>
      <header>
        <h1>Header</h1>
        <MainMenu />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <h3>Footer</h3>
      </footer>
    </>
  )
}

export default DefaultLayout