import {connect} from 'react-redux';
import NextScreen from '../componment/NextScreen';
const connectState = (state) => {
  return {
    count: state.count,
  };
};
const NextScreenContainer = connect(connectState)(NextScreen);
export default NextScreenContainer;
