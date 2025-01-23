import { NavLink } from "react-router-dom"

const MainMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/chi-siamo'>Chi siamo</NavLink>
        </li>
        <li>
          <NavLink to='/articoli'>Articoli</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MainMenu