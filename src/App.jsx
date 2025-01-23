import { BrowserRouter, Routes, Route } from "react-router-dom"

import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import PostPages from "./pages/PostPages"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/chi-siamo" Component={AboutPage} />
          <Route path="/articoli" Component={PostPages} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App