import { connect } from 'react-redux';
import { applyFilter } from '../actions/Actions.jsx';
import Filter from '../components/Filter.jsx';

const mapStateToProps = (state) => {
	return {
		filter: state.cardsApp.filter
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFilterChange: (filter) => {
			dispatch(applyFilter(filter))
		}
	}
};

const FilterContainer = connect(
	mapStateToProps, mapDispatchToProps
)(Filter);

export default FilterContainer;