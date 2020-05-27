import * as types from '../types';

const initialState = {
	isLoading: false,
	snippets: '',
	error: '',
};

export const snippetsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_SNIPPETS:
		case types.ADD_SNIPPET:
			return {
				...state,
				isLoading: true,
			};
		case types.GET_SNIPPETS_SUCCESS:
			return {
				...state,
				isLoading: false,
				snippets: action.payload,
			};
		case types.ADD_SNIPPET_SUCCESS:
			return {
				...state,
				isLoading: false,
				snippets: [...state.snippets, action.payload],
			};
		default:
			return state;
	}
};
