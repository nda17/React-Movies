//Cписок полученных фильмов с сервера
import { MovieCard } from './MovieCard';

export function MoviesList(props) {
	const { movies = [] } = props;
	//Вернуть вниз список полученных фильмов
	return (
		<div className='row row-cols-1 row-cols-md-4 g-4'>
            {/*Если данные есть - отрисовка, если нет - Nothing found*/}
			{movies.length ? movies.map(movie => (<MovieCard key={movie.imdbID} {...movie} />)) : <h4 className='not-found'>Nothing found</h4> }
		</div>
	);
}
