import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router";
import normalizeVideo from "../utils/normalizeVideo";

const VideoContainer = () => {
  //trigger for flag
  const flag = true;


  const [videos,setVideos] = useState([])

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const jsonData = await data.json();

      console.log(jsonData.items);

      const normalizedVideos = jsonData.items.map((videos)=>normalizeVideo(videos));
      setVideos(normalizedVideos);
    } catch (error) {
      console.log("Error fetching videos:", error);
    }
  }

  useEffect(()=>{
    if(!flag) return
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