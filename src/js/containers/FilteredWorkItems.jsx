import { connect } from 'react-redux';
import WorkItems from '../components/WorkItems.jsx';


const getFilteredItems = (items, filter) => {
	let reg = new RegExp(filter, 'i');
	return items.filter(({title}) => title.search(reg) !== -1);
};

const getSelectedType = (menus, menuId) => {
	return menus.find(({id}) => id == menuId).type;
};

const mapStateToProps = (state) => {
	return {
		items: getFilteredItems(state.cardsApp.items, state.cardsApp.filter),
		type: getSelectedType(state.cardsApp.menus, state.cardsApp.selectedMenuId)
	};
};

const FilteredWorkItems = connect(
	mapStateToProps, {}
)(WorkItems);

export default FilteredWorkItems;