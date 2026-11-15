import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router";
import CommentsContainer from "./CommentsContainer";
import WatchPageSideContainer from "./WatchPageSideContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  console.log(searchParams.get("v"));
  const videoId = searchParams.get("v")

  const [videoInfo,setVideoInfo] = useState(null)

  const getVideoDetails = async () => {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
      );

      const json = await data.json();
      console.log(json);
      setVideoInfo(json.items?.[0]?.snippet);
    };

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(()=>{
    if(videoId){
      getVideoDetails()
    }
  },[videoId])

  return (
    <div className="w-full min-w-0 p-4 text-white">
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_400px] gap-5">

        {/* Left: Video + Comments */}
        <div className="min-w-0">
          <iframe
            className="w-full aspect-video rounded-xl"
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
          />

          <h1 className="text-xl font-bold mt-4">
            {videoInfo?.title || "Loading..."}
          </h1>

          <CommentsContainer />
        </div>

        {/* Right: Related Videos */}
        <div className="min-w-0">
          <WatchPageSideContainer title={videoInfo?.title} currentVideoId={videoId}/>
        </div>

      </div>
    </div>
  );
};

export default WatchPage;
