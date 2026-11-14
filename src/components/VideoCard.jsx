import WithBorder from "../utils/WithBorder";

const VideoCard = ({info}) => {
  // console.log(info)

  const {snippet,statistics} = info
  const {channelTitle,title,thumbnails} = snippet

  return (
    <div className="p-3 w-full min-w-0 rounded-lg hover:bg-gray-400/40 transition-all duration-300 ease-out text-white">
      <div>
        <img className="w-full aspect-video object-cover rounded-lg" src={thumbnails.high.url} alt={title}/>
      </div>
      <div className="cardData ">
        <h3 className="font-bold">{title}</h3>
        <p>{channelTitle}</p>
      </div>
    </div>
  )
}


export const AdVideoCard = WithBorder(VideoCard);
export default VideoCard