import { combineReducers } from 'redux';
import {
	ADD_TODO,
	TOGGLE_TODO,
	SET_VISIBILITY_FILTER,
	VisibilityFilters,
} from '../actions/actions';

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER: {
			return action.payload.filter;
		}
		default:
			return state;
	}
}

function todos(state = [], action) {
	switch (action.type) {
		case ADD_TODO: {
			return [
				...state,
				{
					text: action.payload.input,
					completed: false,
				},
			];
		}
		case TOGGLE_TODO: {
			const i = action.payload.index;
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
