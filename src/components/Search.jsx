import React, {useState} from 'react';

export const Search = (props) => {
	const { searchMovies = Function.prototype } = props;

	const [search, setSearch] = useState('Spider-Man');
	const [type, setType] = useState('');

	//Обработка нажатия клавиши Enter
	const handleKey = event => {
		if (event.key === 'Enter') {
			event.preventDefault();
			searchMovies(search, type); //Передача введенных данных в searchMovies
		}
	};

	//Обработка нажатия радио кнопки
	const handleFilter = event => {
		setType(event.target.dataset.type);
		searchMovies(search, event.target.dataset.type);
	};

	return (
		<div className='search-container'>
			<form className='d-flex input-search'>
				<input
					className='form-control mr-2'
					type='search'
					placeholder='Movie search'
					aria-label='Search'
					value={search}
					onChange={event => setSearch(event.target.value)} //Обработчик на изменения данных в input и сохранение в state
					onKeyDown={handleKey} //Обработка нажатия Enter
				/>
				<button
					type='button'
					className='btn btn-info text-nowrap'
					onClick={() =>
						searchMovies(search, type)
					} //Обработка клика по кнопке Search
				>
					Search
				</button>
			</form>
			<div className='form-container'>
				<h5>Type of content:</h5>
				<div className='radio-search'>
					<label className='form-check'>
						<input
							className='form-check-input'
							name='type'
							type='radio'
							data-type='&'
							onChange={handleFilter}
							checked={type === '&'}
						/>
						<span className='form-check-label'>All</span>
					</label>
					<label className='form-check'>
						<input
							className='form-check-input'
							name='type'
							type='radio'
							data-type='movie'
							onChange={handleFilter}
							checked={type === 'movie'}
						/>
						<span className='form-check-label'>Movies</span>
					</label>
					<label className='form-check'>
						<input
							className='form-check-input'
							name='type'
							type='radio'
							data-type='series'
							onChange={handleFilter}
							checked={type === 'series'}
						/>
						<span className='form-check-label'>Series</span>
					</label>
					<label className='form-check'>
						<input
							className='form-check-input'
							name='type'
							type='radio'
							data-type='game'
							onChange={handleFilter}
							checked={type === 'game'}
						/>
						<span className='form-check-label'>Game</span>
					</label>
				</div>
			</div>
		</div>
	);
}

