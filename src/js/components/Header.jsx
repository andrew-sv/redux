import React from 'react';
import NavigationContainer from '../containers/NavigationContainer.jsx';
import FilterContainer from '../containers/FilterContainer.jsx';

const Header = ({title}) => (
	<nav className="header">
		<span className="title">{title}</span>
		<FilterContainer />
		<NavigationContainer />
	</nav>
);

Header.propTypes = {
	title: React.PropTypes.string.isRequired
};

export default Header;