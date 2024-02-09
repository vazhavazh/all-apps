// single selection
//  multiple selection

import data from "./data";
import { useState } from "react";

export default function Accordian() {
	const [selected, setSelected] = useState(null);

	const handleSingleSelection = (currentId) => {
		setSelected(currentId === selected ? null : currentId);
	};
	console.log(selected);
	return (
		<div className='wrapper'>
			<div className='accordian'>
				{data && data.length > 0 ? (
					data.map((dataEl) => (
						<div
							key={dataEl.id}
							className='item'>
							<div
								onClick={() => handleSingleSelection(dataEl.id)}
								className='title'>
								<h3>{dataEl.question}</h3>
								<span>+</span>
							</div>
							{selected === dataEl.id ? (
								<div className='content'>{dataEl.answer}</div>
							) : null}
						</div>
					))
				) : (
					<div>No data found</div>
				)}
			</div>
		</div>
	);
}
