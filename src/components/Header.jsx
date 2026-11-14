import { Menu, Search, UserRound } from "lucide-react";
import YoutubeLogo from "../assets/youtube_logo_white_text.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {

  const [searchQuery, SetSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false)

  const searchCache = useSelector((store)=>store.search)
  /**
   * searchCache = {
   *    "iphone": ["iphone11","iphone 12"]
   * }
   * and the searchQuery is = iphone
   */

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestion = async()=>{
    console.log("api call for",searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const jsondata = await data.json();
    setSuggestions(jsondata[1])
    //after making api call also update the cache
    dispatch(cacheResults({
        [searchQuery] : jsondata[1]
    }))
  }

  useEffect(()=>{
    //make an api call after every key press
    //but if the difference between the 2 api call is <200ms decline the api call
    const timer = setTimeout(()=>{
        //cache logic
        if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery])
        }
        else{
            getSearchSuggestion()
        }

    },200)

    return ()=>{
        clearTimeout(timer)
    }
  },[searchQuery])


  return (
    <div className="fixed top-0 left-0 z-90 flex h-16 w-full justify-between items-center p-4 shadow-lg bg-black">
      <div className="flex items-center gap-5">
        <button onClick={toggleMenuHandler} className="cursor-pointer">
          <Menu color="white" />
        </button>
        <div className="flex items-center">
          <img className="w-28" src={YoutubeLogo} alt="logo"></img>
        </div>
      </div>

      <div className="relative w-xl">
        <div className="flex w-full">
                <input
                type="text"
                className="w-full outline-0 px-5 p-1 rounded-l-full text-white    text-lg border-2 border-gray-300/20"
                placeholder="Search"
                autoFocus
                onFocus={()=>setShowSuggestions(true)}
                onBlur={()=>setShowSuggestions(false)}
                value={searchQuery}
                onChange={(e)=>SetSearchQuery(e.target.value)}
                />
                <button className="bg-gray-500/20 px-4 pr-5 rounded-r-full  border-2 border-gray-500/20 cursor-pointer">
                <Search color="white" />
                </button>
        </div>

        {
            showSuggestions &&( 
                suggestions.length>0 &&(
                    <div className="absolute top-full z-50 mt-1 shadow-lg left-0 bg-[#212121] text-white w-full rounded-xl">
                        <ul className="p-4 px-8 rounded-xl">
                            {
                                suggestions.map((suggestion)=>(
                                    <li key={suggestion} className="flex gap-4 py-3">
                                        <Search size={24} />
                                        {suggestion}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            )
        }
      </div>

      <div className="flex items-center">
        <button>
          <div className="p-3 rounded-full bg-gray-200/80">
            <UserRound />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
