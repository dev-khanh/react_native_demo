import {connect} from 'react-redux';
import DemoCompoment from '../componment/logic/demoComponment';
const connectState = (state) => {
  return {
    name: state.name,
  };
};
const DemoContainer = connect(connectState)(DemoCompoment);
export default DemoContainer;
