import _ from 'lodash';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { fetchUsersHirarchy } from '../../redux/people/people-actions';

// selectors
import { getHierarchyCollection, getIsManager, getUser } from '../../redux/people/people-selectors';

// components
import { Div, Flex } from '../../atomic/box';
import UserDetailsBox from './user-details-box';

const UserBox = React.memo(({ id, parentId }: { id?: number; parentId?: number }) => {
	const user = useSelector(state => getUser(state, id));
	const isManager = useSelector(state => getIsManager(state, id));

	const usersIndexes = useSelector(getHierarchyCollection);

	if (user?.managerId !== parentId) {
		return null;
	}

	return (
		<Flex
			justifyContent={'flex-start'}
			flexDirection={'column'}
			alignItems={'flex-start'}
			style={{ left: 40, position: 'relative' }}
			data-testid={user?.id}
		>
			<Div flexGrow={1}>
				<UserDetailsBox user={user} isManager={isManager} />
				<div>
					{_.map(usersIndexes, id => (
						<UserBox key={id} id={id} parentId={user?.id} />
					))}
				</div>
			</Div>
		</Flex>
	);
});

const UsersTreePage = () => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(fetchUsersHirarchy());
	}, []);

	return (
		<Div padding={'lg'} maxWidth={'500px'} marginHorizontal={'auto'}>
			<UserBox />
		</Div>
	);
};

export default UsersTreePage;
