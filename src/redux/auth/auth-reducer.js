export const SET_USER = 'SET_USER';
export const LOG_OUT = 'LOG_OUT';

const initialState = { user: undefined };

function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER: {
			debugger;
			return {
				...state,
				user: action.payload,
			};
		}
		case LOG_OUT: {
			return initialState;
		}
		default: {
			return state;
		}
	}
}

export default reducer;
