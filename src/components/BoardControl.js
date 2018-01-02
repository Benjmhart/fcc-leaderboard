import React from 'react';


const BoardControl = (props) => (
	<div className="board-control">
		<div className="grid-item isEven control-num">
			<p>#</p>
		</div>
		<div className="grid-item isEven control-campername">
			<p>Camper Name</p>
		</div>
		<div className="grid-item isEven control-30day">
			<p>Last 30 days</p>
			{/** use logic to inser an arrow on the field doing the sorting */}
		</div>
		<div className="grid-item isEven control-AllTime">
			<p>All Time</p>
		</div>
	</div>
)

//proptypes

export default BoardControl