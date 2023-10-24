import { Outlet } from "react-router-dom";
import { Link } from "./Link/Link";
import './Link/Link.scss'



const Layout = () => {
  return (
    <>
      <nav  className="naw-wrapper">
        <div className="link-wrapper">
          <Link to="/">Хто ми</Link>
        </div>
        <div>
          <Link to="/app">Blogs</Link>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;