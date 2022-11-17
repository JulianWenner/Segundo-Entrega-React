import { NavLink} from "react-router-dom"
import "./style.css"

const NavBar = () => {
  return (
    <div className="NavBar">
        <div className="items"><NavLink to="/">Tienda</NavLink></div>
        <ul className="lista">
            <li className="items">
                <NavLink to="/">Todos los productos</NavLink>
                 
                </li>
        </ul>
        <div className="items">
            <NavLink to="/Carrito">
                CARRITO
                </NavLink>
            </div>
    </div>
  )
}

export default NavBar