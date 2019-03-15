import { combineReducers } from 'redux';
import {
	ADD_TODO,
	TOGGLE_TODO,
	SET_VISIBILITY_FILTER,
	VisibilityFilters,
} from './actions';

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, { type, payload }) {
	switch (type) {
		case SET_VISIBILITY_FILTER: {
			return payload.filter;
		}
		default:
			return state;
	}
}

function todos(state = [], { type, payload }) {
	switch (type) {
		case ADD_TODO: {
			return [
				...state,
				{
					text: payload.input,
					completed: false,
				},
			];
		}
		case TOGGLE_TODO: {
			const i = payload.index;
			const newTodos = state.slice();
			newTodos[i] = {
				...newTodos[i],
				completed: !newTodos[i].completed,
			};
			return newTodos;
		}
		default:
			return state;
	}
}

// function todoApp(state = initialState, action) {
// 	switch (action.type) {
// 		case SET_VISIBILITY_FILTER:
// 			return Object.assign({}, state, {
// 				visibilityFilter: action.payload.filter,
// 			});
// 		case ADD_TODO:
// 			return Object.assign({}, state, {
// 				todos: todos(state.todos, action),
// 			});
// 		case TOGGLE_TODO:
// 			return Object.assign({}, state, {
// 				todos: todos(state.todos, action),
// 			});
// 		default:
// 			return state;
// 	}
// }

const todoApp = combineReducers({
	visibilityFilter,
	todos,
});

export default todoApp;
