/* eslint-disable prettier/prettier */
const urlGetMovies = 'http://vietco.dfm-engineering.com/webservice/restful/server.php/local_user_get_profile';
const postApi = 'http://vietco.dfm-engineering.com/webservice/restful/server.php/local_user_post_profile';
function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            token: 'e2aa59eeb28565ae6dc2922ddc0080aa',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    const movies = yield response.status === 200 ? response.json() : [];
    return movies;
}
function* insertNewMovieFromApi(newMovie) {
    const response = yield fetch(postApi, {
        method: 'POST',
        headers: {
            token: 'e2aa59eeb28565ae6dc2922ddc0080aa',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fullname: newMovie.name,
            email: 'devdqkhanh@gmail.com',
            phone: '234234234',
            gender: 1,
            courseid: 1,
            parent_code: '32432',
            parent_code_confirm: '32432',
            personage: 'Dradron',
        }),
    });
    console.log('repose: ', response);
    return yield (response.status === 200);
}
export const Api = {
    getMoviesFromApi,
    insertNewMovieFromApi,
};
