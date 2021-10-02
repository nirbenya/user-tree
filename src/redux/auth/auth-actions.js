import { LOG_OUT } from './auth-reducer';

export const logout = () => {
	return dispatch => {
		dispatch({ type: LOG_OUT });
	};
};
