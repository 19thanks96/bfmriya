import { Outlet } from "react-router-dom";
import './Link/Link.scss'
import { NavBar } from "./NavBar/NavBar";



const Layout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet />
    </div>
  )
};

export default Layout;