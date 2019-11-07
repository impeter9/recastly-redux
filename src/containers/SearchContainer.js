import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

var mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (value) => {
      dispatch(handleVideoSearch(value));
    }
  };
};

var SearchContainer = connect(null, mapDispatchToProps)(Search);
//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;