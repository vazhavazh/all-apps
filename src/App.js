import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/start-rating";

function App() {
	return (
		<div className='App'>
			{/* <Accordian /> */}
			{/* <RandomColor /> */}
			{/* <StarRating quantityOfStars={10} /> */}
			<ImageSlider
				url={"https://picsum.photos/v2/list"}
				limit={"10"}
				page={"1"}
			/>
		</div>
	);
}

export default App;
