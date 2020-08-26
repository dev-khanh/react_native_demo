/* eslint-disable prettier/prettier */
const moviesReducers = (movies = [], action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return action.receivedMovies;
        default:
            return movies;
    }
};
export default moviesReducers;
