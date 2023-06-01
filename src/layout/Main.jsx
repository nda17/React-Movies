import React, { useState, useEffect } from 'react';
import { MoviesList } from '../components/MoviesList';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

export function Main() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	//Функция для передачи в компонент <Search /> и в Search.jsx (в props). Реализация поиска по введенным данным
	const searchMovies = (string, type = '&') => {
		setLoading(true);
		fetch(`https://www.omdbapi.com/?apikey=1b111e43&s=${string}&type=${type}`)
			.then(response => response.json())
			.then(data => {
				setLoading(false);
				setMovies(data.Search);
			})
			.catch(error => {
				console.error(error);
				setLoading(false);
			});
	};

	//Запрос на сервер при монтировании
	useEffect(() => {
		fetch('https://www.omdbapi.com/?apikey=1b111e43&type=&s=Spider-Man')
			.then(response => response.json())
			.then(data => {
				setMovies(data.Search);
				setLoading(false);
			})
			.catch(error => {
				console.error(error);
				setLoading(false);
			});
	}, []);

	return (
		<main className='container content-app'>
			<Search searchMovies={searchMovies} />
			{/*Передача searchMovies в Search.jsx для последующего вызова в нем*/}
			{
				/*Передача в MoviesList = Если загрузка true - отрисовка прелоадера, если false - полученные данных*/
				loading ? <Preloader /> : <MoviesList movies={movies} />
			}
		</main>
	);
}
