import React from 'react';

const Filter = ({filter, onFilterChange}) => (
    <input type="text" className="filter" onChange={(event) => onFilterChange(event.target.value)} />
);

Filter.propTypes = {
    filter: React.PropTypes.string,
	onFilterChange: React.PropTypes.func.isRequired
};

export default Filter;