import { Outlet } from "react-router-dom";
import { Link } from "./Link/Link";



const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Хто ми</Link>
          </li>
          <li>
            <Link to="/app">Blogs</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;