import React from 'react';
import { MoviesList } from '../components/MoviesList';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

export class Main extends React.Component {
	state = {
		movies: [],
		loading: true,
	};

	//Запрос на сервер при монтировании
	componentDidMount() {
		fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&type=&s=furious`)
			.then(response => response.json())
			.then(data => this.setState({ movies: data.Search, loading: false }));
	}

	//Функция для передачи в компонент <Search /> и в Search.jsx (в props). Реализация поска по введенным данным
	searchMovies = (string, type = '&') => {
		this.setState({ loading: true });
		fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${string}&type=${type}`)
			.then(response => response.json())
			.then(data => this.setState({ movies: data.Search, loading: false }));
	};

	render() {
		const { movies, loading } = this.state;
		return (
			<main className='container content-app'>
				<Search searchMovies={this.searchMovies} />
				{/*Передача searchMovies в Search.jsx для последующего вызова в нем*/}
				{
					/*Передача в MoviesList = Если загрузка true - отрисовка прелоадера, если false - полученные данных*/
					loading ? <Preloader /> : <MoviesList movies={movies} />
				}
			</main>
		);
	}
}
