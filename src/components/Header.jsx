import { Menu, Search, UserRound } from "lucide-react"
import YoutubeLogo from "../assets/Youtube-Logo-PNG-1.png"
const Header = () => {
  return (
    <div className="flex h-16 w-full justify-between items-center p-4 shadow-lg">
        <div className="flex items-center gap-5">
            <button>
                <Menu />
            </button>
            <div className="flex items-center">
                <img className="w-28" src={YoutubeLogo} alt="logo"></img>
            </div>
        </div>

        <div className="flex w-xl">
            <input type="text" className="w-full outline-0 px-5 p-1 rounded-l-full text-lg border-2 border-gray-300" placeholder="Search"/>
            <button className="bg-gray-500/10 px-4 pr-5 rounded-r-full hover:bg-gray-500/20 border-2 border-gray-300"><Search color="black"/></button>
        </div>

        <div className="flex items-center">
            <button>
                <div className="p-3 rounded-full bg-gray-600/40">
                    <UserRound />
                </div>
            </button>
        </div>
    </div>
  )
}

export default Header