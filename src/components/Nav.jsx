import { Link } from "react-router-dom"
import './Nav.css'

const Nav = () => {
  return (
    <ul>
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li><Link className="nav-link" to="/login">Log in</Link></li>
        <li><Link className="nav-link" to="/register">Register</Link></li>
    </ul>
  )
}

export default Nav