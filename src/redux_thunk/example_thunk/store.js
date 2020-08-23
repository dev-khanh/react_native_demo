import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {fetchData, fetchDataFulfilled, fetchDataRejected} from './reducer';
export const getPeople = () => {
  return async (dispatch) => {
    try {
      const starWarsPromise = await fetch(
        'https://reactnative.dev/movies.json',
      );
      dispatch(fetchData(true));
      const people = await starWarsPromise.json();
      console.log('people-----------', people);
      dispatch(fetchDataFulfilled(people));
    //   dispatch(fetchDataFulfilled(people.results));
    } catch (error) {
      console.log('Getting People Error---------', error);
      dispatch(fetchDataRejected(error));
    }
  };
};

// export const getPeople = () => {
//     return dispatch => {
//         //Dispatch the fetchData action creator before retrieving to set our loading state to true.
//         dispatch(fetchData(true));
//         //Then get the data.
//         axios.get('https://swapi.co/api/people').then(res => {
//             //Set the results to the people array.
//             dispatch(fetchDataFulfilled(res.data.results));
//             //Error handle the promise and set your errorMessage
//         }).catch(err => dispatch(fetchDataRejected(err)));
//     }
// }

// export const getPeople = () => {
//     return dispatch => {
//         //Dispatch the fetchData action creator before retrieving to set our loading state to true.
//         dispatch(fetchData(true));
//         //Then do a get request the get the err, and response callback, if there's an error dispatch the fetchDataRejected.
//         superagent.get('https://swapi.co/api/people')
//         //When the data is retrieved we will invoke the end method.
//         .end((err, res) => {
//             //if there is an error use our fetchDataReject
//             if(err) dispatch(fetchDataRejected(err));
//             //We will set our loading state when fetching data is successful.
//             dispatch(fetchDataFulfilled(res.body.results));
//         })
//     }
// }
//Export our store as a default epxport
export default createStore(reducer, applyMiddleware(thunk));
