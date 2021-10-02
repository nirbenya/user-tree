import _ from 'lodash';
import { DB_BASE_URL } from '../../constants/constants';
export const fetchUsersHirarchy = () => {
	return async dispatch => {
		debugger;
		dispatch({ type: 'FETCH_USERS_REQUEST' });
		const res = await fetch(`${DB_BASE_URL}/users.json`);

		const response = await res.json();

		if (res.ok) {
			return dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response, meta: { collectionName: 'hierarchy' } });
		}

		dispatch({ type: 'FETCH_USERS_ERROR', payload: response });
	};
};

export const updateUserDetails = ({ data, id }) => {
	return async (dispatch, getState) => {
		const state = getState();
		const userIndex = _.findIndex(state.people.users.indexes.hierarchy, userId => userId === id);
		dispatch({ type: 'UPDATE_USER_REQUEST' });
		const res = await fetch(`${DB_BASE_URL}/users/${userIndex}.json`, {
			method: 'PATCH',
			body: JSON.stringify(data),
		});

		const response = await res.json();

		if (res.ok) {
			return dispatch({ type: 'UPDATE_USER_SUCCESS', payload: { data: response, id } });
		}

		dispatch({ type: 'UPDATE_USER_ERROR', payload: response });
		throw new Error('Failed to update user');
	};
};

export const deleteHierarchyUser = ({ id }) => {
	return async (dispatch, getState) => {
		const state = getState();

		const userIndex = _.findIndex(state.people.users.indexes.hierarchy, userId => userId === id);

		const res = await fetch(`${DB_BASE_URL}/users/${userIndex}.json`, {
			method: 'DELETE',
		});
	};
};
