import _ from 'lodash';

export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

function reducer(
	state = {
		users: {
			data: {},
			indexes: {},
		},
	},
	action,
) {
	switch (action.type) {
		case UPDATE_USER: {
			return {
				...state,
				users: {
					...state.users,
					data: {
						...state.users.data,
						[action.payload.id]: {
							...state.users.data[action.payload.id],
							...action.payload.data,
						},
					},
				},
			};
		}
		case DELETE_USER: {
			return {
				...state,
				users: {
					...state.users,
					indexes: {
						[action.meta.collectionName]: _.filter(state.users.indexes, id => id !== action.payload.id),
					},
				},
			};
		}

		case 'FETCH_USERS_SUCCESS': {
			return {
				...state,
				users: {
					data: _.keyBy(action.payload, 'id'),
					indexes: {
						[action.meta.collectionName]: _.map(action.payload, 'id'),
					},
				},
			};
		}

		case 'UPDATE_USER_SUCCESS': {
			return {
				...state,
				users: {
					...state.users,
					data: {
						...state.users.data,
						[action.payload.id]: {
							...state.users.data[action.payload.id],
							...action.payload.data,
						},
					},
				},
			};
		}
		default: {
			return state;
		}
	}
}

export default reducer;
