const normalizeVideo = (video) => {
  return {
    id: video.id?.videoId || video.id,

    title: video.snippet?.title,

    channelTitle: video.snippet?.channelTitle,

    thumbnail:
      video.snippet?.thumbnails?.high?.url ||
      video.snippet?.thumbnails?.medium?.url ||
      video.snippet?.thumbnails?.default?.url,

    views: video.statistics?.viewCount || "N/A",
  };
};

export default normalizeVideo;