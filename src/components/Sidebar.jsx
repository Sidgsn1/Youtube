import { useSelector } from "react-redux"
import { Link } from "react-router";


const Sidebar = () => {
    
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
    if(!isMenuOpen) return null //early return pattern
  return (
    <div className="fixed top-16  left-0 overflow-y-auto w-52 p-4 h-[calc(100vh-64px)] bg-black flex flex-col gap-8 text-white">
        <div className="text-xl">
            <h3><Link to="/">Home</Link></h3>
            <h3>Shorts</h3>
            <h3>Videos</h3>
            <h3>Live</h3>
        </div>
        <div className="w-full h-0.5 bg-white"></div>
        <div className="text-xl">
            <h1>Subscriptions</h1>
            <h3>Music</h3>
            <h3>Sports</h3>
            <h3>Gaming</h3>
            <h3>Movies</h3>
        </div>
        <div className="w-full h-0.5 bg-white"></div>
        <div className="text-xl">
            <h1>Watchlater</h1>
        </div>
    </div>
  )
}

export default Sidebar