import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function StarRating({ quantityOfStars = 5 }) {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	const handleClick = (currentIndex) => {
		setRating(currentIndex);
	};

	const handleMouseEnter = (currentIndex) => {
		setHover(currentIndex);
	};

	const handleMouseLive = () => {
		setHover(rating);
	};

	return (
		<div className='star-rating'>
			{[...Array(quantityOfStars)].map((_, index) => {
				index += 1;
				return (
					<FaStar
						className={index <= (hover || rating) ? "active" : "inactive"}
						key={index}
						onClick={() => handleClick(index)}
						onMouseMove={() => handleMouseEnter(index)}
						onMouseLeave={() => handleMouseLive()}
						size={40}
					/>
				);
			})}
		</div>
	);
}
