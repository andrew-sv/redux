import { combineReducers } from 'redux';
import { REPORTDATA } from '../models/Data.jsx';
import { APPLY_FILTER, NAVIGATE_TO } from '../actions/Actions.jsx';
// import
// import

// Initial state object
const initialState = {
	title: 'Cards Application',
	filter: '',
	categories: [
		{name: '(None)'},
		{name: 'User Interface'},
		{name: 'Help'},
		{name: 'Administrator'},
		{name: 'Setup'}
	],
	selectedCategory: {name: 'User Interface'},
	menus: [
		{id: '1', name: 'List', type: 'list'},
		{id: '2', name: 'Cards', type: 'card'}
	],
	selectedMenuId: '2',
	items: REPORTDATA
};

// Action handlers

function navigateTo(state, action) {
	return Object.assign({}, state, { selectedMenuId: action.menuId });
}

function applyFilter(state, action) {
	return Object.assign({}, state, { filter: action.filter });
}


// Basic reducer
function cardsApp(state = initialState, action) {
	switch (action.type) {
		case NAVIGATE_TO:
			return navigateTo(state, action);
		case APPLY_FILTER:
			return applyFilter(state, action);
		default:
			return state;
	}
}

// combined reducer
const AppReducer = combineReducers({
	cardsApp
});

export default AppReducer;


