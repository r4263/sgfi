import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import "./layout.scss"

const AppLayout = () => {
    return <div className="layoutdiv">
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;
