import { connect } from 'react-redux';
import { navigateTo } from '../actions/Actions.jsx';
import Navigation from '../components/Navigation.jsx';

const mapStateToProps = (state) => {
	return {
		title: state.cardsApp.title,
		menus: state.cardsApp.menus,
		selectedMenuId: state.cardsApp.selectedMenuId
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onMenuClick: (id) => {
			dispatch(navigateTo(id))
		}
	}
};

const NavigationContainer = connect(
	mapStateToProps, mapDispatchToProps
)(Navigation);

export default NavigationContainer;