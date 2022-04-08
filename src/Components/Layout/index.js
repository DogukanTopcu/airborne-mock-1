import "./layout.css";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";


const Layout = () => {
    return (
        <div>
            <Navbar />

            <div className="content">
                <Outlet/>
            </div>

            <Footer/>
        </div>
    )
}

export default Layout;