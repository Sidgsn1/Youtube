

const Sidebar = () => {
  return (
    <div className="w-52 p-4 h-[calc(100vh-64px)] flex flex-col gap-8 bg-gray-400/20">
        <div className="text-xl">
            <h3>Home</h3>
            <h3>Shorts</h3>
            <h3>Videos</h3>
            <h3>Live</h3>
        </div>
        <div className="w-full h-0.5 bg-black"></div>
        <div className="text-xl">
            <h1>Subscriptions</h1>
            <h3>Music</h3>
            <h3>Sports</h3>
            <h3>Gaming</h3>
            <h3>Movies</h3>
        </div>
        <div className="w-full h-0.5 bg-black"></div>
        <div className="text-xl">
            <h1>Watchlater</h1>
        </div>
    </div>
  )
}

export default Sidebar