import React, {PropTypes} from 'react';

const Item = ({type, displayid, title, category}) => (
	<div className={'view-item ' + type}>
		<span className="displayId">{displayid}</span>
		<span className="title" title={title}>{title}</span>
		<span className="category label label-info">{category}</span>
	</div>
);

Item.propTypes = {
	id: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired,
	displayid: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired
};

export default Item;