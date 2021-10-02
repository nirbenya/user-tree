import _ from 'lodash';

export const getUser = (state, id) => state.people.users.data[id];

export const getIsManager = (state, id) =>
	!_.isEmpty(_.filter(_.values(state.people.users.data), person => person?.managerId === id));

export const getUsersCollection = collectionName => state => {
	return state.people.users.indexes[collectionName];
};

export const getHierarchyCollection = getUsersCollection('hierarchy');
