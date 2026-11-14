import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router";

const VideoContainer = () => {

  const [videos,setVideos] = useState([])

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const jsonData = await data.json();

      // console.log(jsonData.items);
      setVideos(jsonData.items)
    } catch (error) {
      console.log("Error fetching videos:", error);
    }
  }

  useEffect(()=>{
    getVideos();
  },[])

  if(videos.length===0) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 w-full mt-4">
      <AdVideoCard info={videos[0]}/>
      {videos.map((video)=>(
        <Link key={video.id} to={"/watch?v="+video.id}>
          <VideoCard info={video}/>
        </Link>
      ))}
    </div>
  )
}


export default VideoContainer