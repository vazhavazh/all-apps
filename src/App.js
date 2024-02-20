
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/start-rating';

function App() {
  return (
		<div className='App'>
			{/* <Accordian /> */}
			{/* <RandomColor /> */}
			<StarRating quantityOfStars={10} />
		</div>
	);
}

export default App;
