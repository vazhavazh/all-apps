import { useEffect, useState } from "react";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

function ImageSlider({ url, page = 1, limit = 5 }) {
	const [images, setImages] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [errorMsg, setErrorMsg] = useState(null);
	const [loading, setLoading] = useState(false);

	const fetchImages = async (currentUrl) => {
		try {
			setLoading(true);

			const response = await fetch(`${currentUrl}?page=${page}&limit=${limit}`);
			const data = await response.json();

			if (data) {
				setImages(data);
				setLoading(false);
			}
		} catch (error) {
			setErrorMsg(error.message);
			setLoading(false);
		}
	};

	useEffect(() => {
		if (url !== "") {
			fetchImages(url);
		}
	}, [url]);

	console.log(images);

	if (loading) {
		return <div>Loading data please wait</div>;
	}

	if (errorMsg !== null) {
		return <div>Error occurred ! {errorMsg}</div>;
	}

	return (
		<div className='container'>
			<BsArrowBarLeft className='arrow arrow-left' />
			{images && images.length !== 0
				? images.map((image) => (
						<img
							key={image.id}
							alt={image.download_url}
							src={image.download_url}
							className='current-image'
						/>
				  ))
				: null}
			<BsArrowBarRight className='arrow arrow-right' />
			<span className='circle-indicators'></span>
		</div>
	);
}

export default ImageSlider;
