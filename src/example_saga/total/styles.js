import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
module.exports = {
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHomeScreen: {
    fontWeight: 'bold',
    fontSize: 35,
  },
};
