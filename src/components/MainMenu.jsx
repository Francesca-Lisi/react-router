import { NavLink } from "react-router-dom"
import menuHeader from "../data/menuData"

const MainMenu = () => {
  return (
    <nav>
      <ul>
        {menuHeader.map(item =>
          <li key={item.id} >
            <NavLink to={item.url}>{item.text}</NavLink>
          </li>
        )}
      </ul>


    </nav>
  )
}

export default MainMenu