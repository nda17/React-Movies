//Карточка фильма:
export function MovieCard (props) {
	//Деструктуризация и переименование входящих props (данные о фильме)
	const {
		Title: title,
		Year: year,
		imdbID: id,
		Type: type,
		Poster: poster,
	} = props;

	// Создание карточки фильма с данными из props:
	return (
		<div id={id} className='col'>
			<div className='card h-100'>
				{poster === 'N/A' ? (
					<img
						src={`https://placehold.co/300x450?text=${title}`}
						className='card-img-top'
						alt={title}
					/>
				) : (
					<img src={poster} className='card-img-top' alt={title} />
				)}
				<div className='card-body'>
					<h5 className='card-title'>{title}</h5>
					<div className='card-content-container'>
						<p className='card-text'>{year}</p>
						<p className='card-text'>{type}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
