import { useSelector } from "react-redux"
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {

  const isSidebarOpen = useSelector((store)=>store.app.isMenuOpen)

  return (
    <div className={`${isSidebarOpen ? "ml-52" : ""} flex-1 min-w-0 p-4 overflow-y-auto`}>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer