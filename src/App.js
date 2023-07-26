import logo from './logo.svg';
import './App.css';
import Movies from './components/movies'

const App = () => {

    const movies = [
        {
          name: '300',
          year: '2006',
          rating: 'R',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTE2LpPM__U8XIBZgVJHATxO7PQU8xOcqiETN_PiWPvaj8zXuS'
        },
        {
          name: 'Matrix',
          year: '1999',
          rating: 'R',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MOU9bwdtLj5bMlHioRxzkr2HEyll3bm1qab6D71WulrKJrtY'
        },
        {
          name: 'Training Day',
          year: '2001',
          rating: 'R',
          image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR52q48a5FylCEAEUGW1zaRrSzusB5mLjbR2bGNF9Ba2kBO8Llx'
        },
        {
          name: 'The Wolf of Wall Street',
          year: '2013',
          rating: 'R',
          image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTrqI60p3I82Q67Wh6HEyDC24Orl0qFzSWNX7EH6niO1SnvBsPl'
        },
        {
          name: 'The Big Short',
          year: '2015',
          rating: 'R',
          image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8fdOGJJMV9tCAGESTuzZieVcqrdn-oJ5uMHJKlQP2oowtDUOk'
        }
    ]

  return (
    <div className="App background_image">
      <h1 className='h1'>This is where the Movies Go To Rest</h1>
     {movies.map((movie) => (
      <Movies
        key={movie.name}
        name={movie.name}
        year={movie.year}
        rating={movie.rating}
        image={movie.image}
        />
        ))}
     
    </div>
  );
}

export default App;
