import { Outlet } from "react-router"
import MainContainer from "./MainContainer"
import Sidebar from "./Sidebar"
import WatchPage from "./WatchPage"

const Body = () => {
  return (
    <div className="flex w-full h-full pt-16">
        <Sidebar />
        {/* <MainContainer />
        <WatchPage /> */}
        <Outlet />
    </div>
  )
}

export default Body