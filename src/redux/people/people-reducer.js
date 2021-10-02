import _ from 'lodash';

export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

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
			debugger;

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
			debugger;
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
