/* eslint-disable prettier/prettier */
import { connect } from 'react-redux';
import MoviesCompoments from '../components/MovieCompoments';
import { fetchMoviesAction } from '../actions/actionTypes';
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
const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MoviesCompoments);
export default MovieContainer;
