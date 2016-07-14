//  Rajiv Ramaiah, CS52, Summer '16
//  Sources: http://cs52.me/assignments/sa4/

import React from 'react';
import VideoListItem from './video_list_item.js';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />;
  });

  return (
    <ul>
       {videoItems}
    </ul>
  );
};

export default VideoList;
