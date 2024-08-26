
import Footer from "./controllers/FooterComp";
import Navbar from "./controllers/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
  )
}

export default Layout;
