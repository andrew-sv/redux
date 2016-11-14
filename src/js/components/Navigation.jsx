import React, {PropTypes} from 'react';
import classNames from 'classnames';

const Navigation = ({menus, selectedMenuId, onMenuClick}) => (
    <ul className="nav navbar-nav">
        {menus.map(menu => (
            <li key={menu.id} className={classNames({'active': menu.id == selectedMenuId})}>
	            <a href="#" onClick={() => onMenuClick(menu.id)}>{menu.name}</a>
            </li>
        ))}
    </ul>
);

Navigation.propTypes = {
    menus: PropTypes.array.isRequired,
	selectedMenuId: PropTypes.string.isRequired,
	onMenuClick: PropTypes.func.isRequired
};

export default Navigation;