import { Link } from 'react-router'
import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import normalizeVideo from '../utils/normalizeVideo'

const WatchPageSideContainer = ({title,currentVideoId}) => {
    //trigger for flag
    const flag = false;


  const [relatedVideos,setRelatedVideos] = useState([])

  useEffect(()=>{
    const getRelatedVideos = async()=>{
        try{
            const data = await fetch(
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${encodeURIComponent(title)}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
            );

            const jsonData = await data.json();
            const filteredVideos = jsonData.items?.filter((video) => video.id.videoId !== currentVideoId);
            console.log("related videos of this current video->",jsonData)
            const normalizedVideos = (filteredVideos || []).map((video)=>normalizeVideo(video));

            setRelatedVideos(normalizedVideos);
        }
        catch(error){
            console.error("Error fetching related videos:", error);
        }
    }
    if(!flag) return;
    if(title){
        getRelatedVideos()
    }
  },[title,currentVideoId])


  return (
    <div>
        {
            relatedVideos.map((video)=>(
                <Link key={video.id} to={"/watch?v="+video.id}>
                <VideoCard info={video}/>
                </Link>
            ))
            
        }
    </div>
  )
}

export default WatchPageSideContainer