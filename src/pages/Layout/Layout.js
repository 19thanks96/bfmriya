import { Outlet } from "react-router-dom";
import './Link/Link.scss'
import { NavBar } from "./NavBar/NavBar";



const Layout = () => {
  return (
    <section>
      <NavBar/>
      <Outlet />
    </section>
  )
};

export default Layout;