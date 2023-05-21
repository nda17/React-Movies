import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

//Анимация логотипа
document.addEventListener('DOMContentLoaded', () => {
	let count = 0;
	setInterval(function () {
		count === 360 ? (count = 0) : count++;
		document.querySelector(
			'.logo-image'
		).style.transform = `rotate3d(1, 1, 1, ${count}deg)`;
	}, 15);
});
