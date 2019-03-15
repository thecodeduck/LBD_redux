export const ADD_TODO = 'action:addTodo';
export const TOGGLE_TODO = 'action:toggleTodo';
export const SET_VISIBILITY_FILTER = 'action:setVisibilityFilter';

export const VisibilityFilters = {
	SHOW_ALL: 'vf:showAll',
	SHOW_COMPLETED: 'vf:showCompleted',
	SHOW_ACTIVE: 'vf:showActive',
};

export function addTodo(input) {
	return {
		type: ADD_TODO,
		payload: {
			input,
		},
	};
}

export function toggleTodo(index) {
	return {
		type: TOGGLE_TODO,
		payload: {
			index,
		},
	};
}

export function setVisibilityFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		payload: {
			filter,
		},
	};
}
