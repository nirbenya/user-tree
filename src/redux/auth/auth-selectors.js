import { useSelector } from 'react-redux';

export const isUserAuthenticated = state => !!state.auth.user;

export const useUser = () => {
	return useSelector(state => state.auth.user);
};
