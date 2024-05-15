import React from 'react';
import YouTube from 'react-youtube';

const YoutubeVideo = ({ videoId }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YoutubeVideo;