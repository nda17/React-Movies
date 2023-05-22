import gh from '../icons/github.svg';
import title from '../images/movies-logo.png';

export function Footer() {
	return (
		<footer className='footer'>
			<nav className='navbar navbar-container navbar-light bg-dark'>
				<div className='container-fluid'>
					<p className='copyright'>
						© {new Date().getFullYear()}
						<a className='navbar-brand' href='https://github.com/nfdmitry'>
							<img
								className='copyright-image'
								src={gh}
								alt='Github'
								width='30'
								height='30'
							/>
						</a>
					</p>
					<a className='navbar-brand text-info' href='#'>
						<img 
							className='title-image' 
							src={title} 
							alt={'Title'} 
						/>
					</a>
				</div>
			</nav>
		</footer>
	);
}
