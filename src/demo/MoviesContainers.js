/* eslint-disable prettier/prettier */
import { connect } from 'react-redux';
import MoviesCompoments from './MovieCompoments';
const mapStateToProps = (state) => {
    return {
        movies: state.movieReducers,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies: () => {
            dispatch(fetchMoviesAction());
        },
    };
};
const fetchMoviesAction = (sort) => {
    return {
        type: 'FETCH_MOVIES',
        sort,
    };
};
const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MoviesCompoments);
export default MovieContainer;
