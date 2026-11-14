import VideoCard from "../components/VideoCard"

//higher order component

const WithBorder = (Component)=>{
    return (props)=>{
        return (
            <div className="border border-red-500">
                <VideoCard {...props}/>
            </div>
        )
    }
}

export default WithBorder