import React from 'react';
import { connect } from 'react-redux';
import Header from './Header.jsx';
import FilteredWorkItems from '../containers/FilteredWorkItems.jsx';


const Application = ({title}) => (
	<div className="base-component">
		<Header title={title} />
		<FilteredWorkItems />
	</div>
);

Application.propTypes = {
	title: React.PropTypes.string.isRequired
};

export default connect((state) => ({ title: state.cardsApp.title }))(Application);