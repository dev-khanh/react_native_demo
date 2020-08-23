/* eslint-disable prettier/prettier */
import { connect } from 'react-redux';
import MoviesCompoments from '../components/MovieCompoments';
import { addMoviesAction, fetchMoviesAction, fetchSuccessAction, fetchFailedAction } from '../actions';
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
        onAddMovie: (newMovie) => {
            dispatch(addMoviesAction(newMovie));
        },
    };
};
const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MoviesCompoments);
export default MovieContainer;
