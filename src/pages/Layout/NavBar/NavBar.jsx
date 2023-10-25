import { Link } from "../Link/Link";
import '../Link/Link.scss'
import logo from '../../../imgs/mria110-110.jpg'
import { NavItem } from "./NavItem";

export const NavBar = () => (
    <nav  className="navbar">
        <img  src={logo} alt='logo'/>
        <NavItem>
            <Link to="/">Хто ми</Link>
        </NavItem>
        <NavItem>
            <Link to="/app">Blogs</Link>
        </NavItem>
    </nav>
)