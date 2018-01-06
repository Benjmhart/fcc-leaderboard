import React from 'react';

import PropTypes from 'prop-types';

const BoardControl = ({sortType, switchType}) => {
	const recentArrow = (sortType === 'recent') ? '∇':'';
	const alltimeArrow = (sortType === 'alltime') ? '∇':'';
	return (
		<div className="board-control">
			<div className="grid-item isEven control-num">
				<p>#</p>
			</div>
			<div className="grid-item isEven control-campername">
				<p>Camper Name</p>
			</div>
			<div className="grid-item isEven control-30day" onClick={switchType}>
				<p>Last 30 days{recentArrow}</p>
			</div>
			<div className="grid-item isEven control-AllTime" onClick={switchType}>
				<p>All Time{alltimeArrow}</p>
			</div>
		</div>
	)
}

//proptypes
BoardControl.propTypes = {
	sortType: PropTypes.string.isRequired, 
	switchType: PropTypes.func.isRequired
}

export default BoardControl