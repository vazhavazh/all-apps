// single selection
//  multiple selection

import data from "./data";
import { useState } from "react";
import "./style.css";

export default function Accordian() {
	const [selected, setSelected] = useState(null);
	const [enableMultiSelection, setEnableMultiSelection] = useState(false);
	const [multiple, setMultiple] = useState([]);

	const handleSingleSelection = (currentId) => {
		setSelected(currentId === selected ? null : currentId);
		console.log(currentId);
	};
	const handleEnableButton = () => {
		setEnableMultiSelection(!enableMultiSelection);
	};
	const handleMultiSelection = (currentId) => {
		let copyOfMultiplySelection = [...multiple];

		const indexOfCurrentId = copyOfMultiplySelection.indexOf(currentId);
		console.log(indexOfCurrentId);
		if (indexOfCurrentId === -1) {
			copyOfMultiplySelection.push(currentId);
		} else {
			copyOfMultiplySelection.splice(indexOfCurrentId, 1);
		}
		setMultiple(copyOfMultiplySelection);
	};
	console.log(selected, multiple);
	return (
		<div className='wrapper'>
			<button onClick={handleEnableButton}>Enable Multi selection</button>
			<div className='accordian'>
				{data && data.length > 0 ? (
					data.map((dataEl) => (
						<div
							key={dataEl.id}
							className='item'>
							<div
								onClick={() =>
									enableMultiSelection
										? handleMultiSelection(dataEl.id)
										: handleSingleSelection(dataEl.id)
								}
								className='title'>
								<h3>{dataEl.question}</h3>
								<span>+</span>
							</div>
							{enableMultiSelection
								? multiple.indexOf(dataEl.id) !== -1 && (
										<div className='content'>{dataEl.answer}</div>
								  )
								: selected === dataEl.id && (
										<div className='content'>{dataEl.answer}</div>
								  )}
							{/* {selected === dataEl.id ? (
								<div className='content'>{dataEl.answer}</div>
							) : null} */}
						</div>
					))
				) : (
					<div>No data found</div>
				)}
			</div>
		</div>
	);
}
