import React from 'react';

export class Search extends React.Component {
	state = {
		search: 'Spider-Man',
		type: '',
	};

	//Обработка нажатия клавиши Enter
	handleKey = event => {
		if (event.key === 'Enter') {
			event.preventDefault();
			this.props.searchMovies(this.state.search, this.state.type); //Передача введенных данных в searchMovies
		}
	};

	//Обработка нажатия радио кнопки
	handleFilter = event => {
		this.setState(
			() => ({ type: event.target.dataset.type }),
			() => {
				console.log(this.props);
				this.props.searchMovies(this.state.search, this.state.type);
			}
		);
	};

	render() {
		return (
			<div className='search-container'>
				<form className='d-flex input-search'>
					<input
						className='form-control mr-2'
						type='search'
						placeholder='Movie search'
						aria-label='Search'
						value={this.state.search}
						onChange={event => this.setState({ search: event.target.value })} //Обработчик на изменения данных в input и сохранение в state
						onKeyDown={this.handleKey} //Обработка нажатия Enter
					/>
					<button
						type='button'
						className='btn btn-info text-nowrap'
						onClick={() =>
							this.props.searchMovies(this.state.search, this.state.type)
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
								onChange={this.handleFilter}
								checked={this.state.type === '&'}
							/>
							<span className='form-check-label'>All</span>
						</label>
						<label className='form-check'>
							<input
								className='form-check-input'
								name='type'
								type='radio'
								data-type='movie'
								onChange={this.handleFilter}
								checked={this.state.type === 'movie'}
							/>
							<span className='form-check-label'>Movies</span>
						</label>
						<label className='form-check'>
							<input
								className='form-check-input'
								name='type'
								type='radio'
								data-type='series'
								onChange={this.handleFilter}
								checked={this.state.type === 'series'}
							/>
							<span className='form-check-label'>Series</span>
						</label>
						<label className='form-check'>
							<input
								className='form-check-input'
								name='type'
								type='radio'
								data-type='game'
								onChange={this.handleFilter}
								checked={this.state.type === 'game'}
							/>
							<span className='form-check-label'>Game</span>
						</label>
					</div>
				</div>
			</div>
		);
	}
}
