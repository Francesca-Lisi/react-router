import { Outlet } from "react-router-dom"
import MainMenu from "../components/MainMenu"

const DefaultLayout = () => {
  return (
    <>
      <header>
        <h1 className="text-center my-4">Blog di Ricette</h1>
        <MainMenu />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <h6 className="text-center my-4">Footer</h6>
      </footer>
    </>
  )
}

export default DefaultLayout