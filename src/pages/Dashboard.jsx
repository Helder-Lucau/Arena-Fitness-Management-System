import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
// import Hero from "./Hero"

const Dashboard = () => {
    return (
        <div>
            <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
                <Sidebar />
            </div>

        </div>
    )
}

export default Dashboard