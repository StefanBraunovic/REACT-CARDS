import './App.css';
import IdCard from './components/idCard/IdCard';

import Wrapper from './components/wrapper/Wrapper';
import MovieCard from './components/movieCard/MovieCard';
import BookCard from './components/bookCard/BookCard';

function App() {
	return (
		<div className="App">
			<Wrapper>
				<IdCard />
				<IdCard />
				<IdCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<BookCard />
				<BookCard />
				<BookCard />
			</Wrapper>
		</div>
	);
}

export default App;
