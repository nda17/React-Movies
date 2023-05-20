//Cписок полученных фильмов с сервера
import React from 'react'; ////???????????????
import {Movie} from './MovieCard';

export function MoviesList (props) {
    const {movies} = props;
    //Вернуть вниз список полученных фильмов
    return  <div className="row row-cols-1 row-cols-md-4 g-4">
                {movies.map(movie => (
                    <Movie key={movie.imdbID} {...movie} />
                ))}
            </div>
}