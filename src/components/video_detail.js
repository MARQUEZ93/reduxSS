import React from 'react';

const VideoDetail = ({video}) => {

  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  let date = new Date(Date.parse(video.snippet.publishedAt)).toDateString();
  return (
    <div className="video=detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div className="detailsTitle">{video.snippet.title}</div>
        <div className="detailsDescription">
          <img className="detailsImg" src={video.snippet.thumbnails.high.url} />
          <div className="detailsDescriptionText">
            <div className="channelTitle">{video.snippet.channelTitle}</div>
            <div className="publishedAt">Published on {date}</div>
            <div className="description">{video.snippet.description}</div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default VideoDetail;
