import React from 'react';
import PropTypes from 'prop-types';

//Create logic to insert props into p tags,  and to add the class isEven dynamically if the number is Even.
const BoardItem = ({prop}) => { 
	const { username, img, recent, alltime, i } = prop;
	const even = (i % 2 ===1) ? 'isEven' : '';

	return (
	<div className={`board-item ${even}`} key={i}>
		<div className={"grid-item item-num "+even} key={`a${i}`}>
			<p key={`b${i}`}>{i+1}</p>
		</div>
		<div className={"grid-item item-campername "+even} key={`c${i}`}>
			<p key={`d${i}`}> <img src ={img} alt={username} key={`i${i}`} className='avatar'/> {username}</p>
		</div>
		<div className={"grid-item item-30day "+even} key={`e${i}`}>
			<p key={`f${i}`}>{recent}</p>
		</div>
		<div className={"grid-item item-AllTime "+even} key={`g${i}`}>
			<p key={`h${i}`}>{alltime}</p>
		</div>
	</div>
);
}

//proptypes

BoardItem.propTypes = {
	prop: PropTypes.object.isRequired, 
}

export default BoardItem