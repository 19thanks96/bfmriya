import { Outlet } from "react-router-dom";
import { Link } from "./Link/Link";
import './Link/Link.scss'
import logo from '../../imgs/mria110-110.jpg'


const Layout = () => {
  return (
    <section>
      <nav  className="navbar">
        
      <img  src={logo} alt='logo'/>
        <div className=".nav-item">
          <Link to="/">Хто ми</Link>
        </div>
        <div className=".nav-item">
          <Link to="/app">Blogs</Link>
        </div>
      </nav>

      <Outlet />
    </section>
  )
};

export default Layout;