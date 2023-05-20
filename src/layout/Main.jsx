import React from 'react';
import {MoviesList} from '../components/MoviesList';
import {Preloader} from '../components/Preloader';
import {Search} from '../components/Search';

export class Main extends React.Component {

    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=1b111e43&s=avatar')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    render() {
        const {movies} = this.state;

        return <main className="container content-app">
                {
                    movies.length ? (<MoviesList movies={this.state.movies} />) : <Preloader />
                }
            </main>
    }
}


