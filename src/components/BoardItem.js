import React from 'react';

//Create logic to insert props into p tags,  and to add the class isEven dynamically if the number is Even.
const BoardItem = (props) => (
	<div className="board-item">
		<div className="grid-item item-num">
			<p>1</p>
		</div>
		<div className="grid-item item-campername">
			<p>bobby fisher</p>
		</div>
		<div className="grid-item item-30day">
			<p>2000</p>
		</div>
		<div className="grid-item item-AllTime">
			<p>10000</p>
		</div>
	</div>
)

//proptypes

export default BoardItem