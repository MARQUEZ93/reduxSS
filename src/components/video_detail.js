import React from 'react';

const VideoDetail = ({video}) => {

  console.log(video);
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
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
            {video.snippet.channelTitle}
            {video.snippet.publishedAt}
            {video.snippet.description}
          </div>
        </div>
      </div>
    </div>
  );

};

export default VideoDetail;
