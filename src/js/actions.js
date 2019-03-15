export const ADD_TODO = 'action:addTodo';
export const TOGGLE_TODO = 'action:toggleTodo';
export const SET_VISIBILITY_FILTER = 'action:setVisibilityFilter';

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE',
};

let nextTodoId = 0;

export function addTodo(input) {
	return {
		type: ADD_TODO,
		payload: {
			id: nextTodoId++,
			input,
		},
	};
}

export function toggleTodo(id) {
	return {
		type: TOGGLE_TODO,
		payload: {
			id,
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
