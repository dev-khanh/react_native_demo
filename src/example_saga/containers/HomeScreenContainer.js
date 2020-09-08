import {connect} from 'react-redux';
import HomeScreenCompoments from '../componment/HomeScreenCompoments';
import {addParams, addState} from '../actions';
import {UPDATE} from '../actions/actionTypes';
const connectState = (state) => {
  return {
    count: state.mainReducer.count,
    receivedMovies: state.mainReducer.receivedMovies,
  };
};
const connectStateApi = (dispatch) => {
  return {
    setonClick: () => {
      dispatch(addState());
    },
    setOnClickParams: (params) => {
      dispatch(addParams(params));
    },
    dispatchCount: (count, navigation) => {
      dispatch({type: UPDATE, count: count + 1});
      if (count === 9) {
        navigation.navigate('next');
      }
    },
  };
};
const HomeScreenContainer = connect(
  connectState,
  connectStateApi,
)(HomeScreenCompoments);
export default HomeScreenContainer;
