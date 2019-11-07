import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    // var newObj = {
    //   currentVideo: action.video
    // };
    // if (state !== null) {
    //   newObj[videos] = state.videos;
    // }
    // return newObj;
    // console.log()
    // return {
    //   videos: state.videos,
    //   video: action.video
    // };
    // console.log(action.video)
    return action.video;
  } else {
    return state;
  }
};

export default currentVideoReducer;
