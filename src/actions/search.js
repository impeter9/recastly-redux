import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import { connect } from 'react-redux';



var handleVideoSearch = (q) => {
  return (dispatch) => {
    console.log('this is q' + q);
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, (data) => {
      console.log(data);
      dispatch(changeVideo(data[0]));
      dispatch(changeVideoList(data));
    });
  };
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
