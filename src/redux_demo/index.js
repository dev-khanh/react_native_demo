import {combineReducers} from 'redux';
import {renderData, todo} from './reducers';
export default combineReducers({
  renderData,
  todo,
});
