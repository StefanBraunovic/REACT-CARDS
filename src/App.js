import './App.css';
import IdCard from './components/idCard/IdCard';

import Wrapper from './components/wrapper/Wrapper';
import MovieCard from './components/movieCard/MovieCard';
import BookCard from './components/bookCard/BookCard';
import dateFormat from 'dateformat';

function App() {
	return (
		<div className="App">
			<h1>ID Cards</h1>
			<Wrapper>
				<IdCard
					name="Boris"
					surname="Dabanović"
					date={dateFormat('09 27 1992', 'shortDate')}
					city="Podgorica"
					src="/user_1.jpg"
				/>
				<IdCard
					name="Lidija"
					surname="Gigović"
					date={dateFormat('11 13 1995', 'shortDate')}
					city="Budva"
					src="/user2.jpg"
				/>
				<IdCard
					name="Andjela"
					surname="Nenadić"
					date={dateFormat('9 19 1995', 'shortDate')}
					city="Podgorica"
					src="/user3.jpg"
				/>
			</Wrapper>
			<h1>Movie Cards</h1>
			<Wrapper>
				<MovieCard
					src="/movie3.jpg"
					name="Matrix"
					director="Lana Wachowski, Lilly Wachowski"
					type="Sci-fi/Action "
					actors="Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving"
					date="1999"
				/>
				<MovieCard
					name="Inception"
					director="Christopher Nolan"
					type="Action/Sci-fi "
					actors="Leonardo DiCaprio, Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page,[a] Tom Hardy, Dileep Rao"
					src="/movie2.jpg"
					date="2010 "
				/>
				<MovieCard
					name="Avengers: Endgame"
					director="Joe Russo, Anthony Russo"
					type="Action/Sci-fi"
					actors=" Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner"
					src="/movie1.jpg"
					date="2019"
				/>
			</Wrapper>
			<h1>Book Cards</h1>
			<Wrapper>
				<BookCard
					src="book1.jpeg"
					naslov="The Catcher in the Rye"
					citat="This fall I think you’re riding for—it’s a special kind of fall, a horrible kind. The man falling isn’t permitted to feel or hear himself hit bottom. He just keeps falling and falling. The whole arrangement’s designed for men who, at some time or other in their lives, were looking for something their own environment couldn’t supply them with. Or they thought their own environment couldn’t supply them with. So they gave up looking. They gave it up before they ever really even got started."
					pisac="J. D. Salinger"
					godina_izdavanja="1951"
				/>
				<BookCard
					src="book2.jpg"
					naslov="The Man Who Knew Too Much"
					citat="To solve one of the great mathematical problems of his day, Alan Turing proposed an imaginary programmable calculating machine. But the idea of actually producing a Turing machine did not crystallize until he and his brilliant Bletchley Park colleagues built devices to crack the Nazis' Enigma code, thus ensuring the Allies' victory in World War II."
					pisac="David Leavitt"
					godina_izdavanja="2006"
				/>
				<BookCard
					src="book3.jpg"
					naslov="A Brief History of Time"
					citat="Even if there is only one possible unified theory, it is just a set of rules and equations. What is it that breathes fire into the equations and makes a universe for them to describe? The usual approach of science of constructing a mathematical model cannot answer the questions of why there should be a universe for the model to describe. Why does the universe go to all the bother of existing?"
					pisac="Stephen Hawking"
					godina_izdavanja="1988"
				/>
			</Wrapper>
		</div>
	);
}

export default App;
