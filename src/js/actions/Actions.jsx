
/*
 * Action Types
 */
export const NAVIGATE_TO = 'NAVIGATE_TO';
export const APPLY_FILTER= 'APPLY_FILTER';


/*
 * Action Creators
 */
export function applyFilter(filter) {
	return { type: APPLY_FILTER, filter };
}

export function navigateTo(menuId) {
	return { type: NAVIGATE_TO, menuId };
}