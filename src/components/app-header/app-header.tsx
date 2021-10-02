import * as React from 'react';
import Header from '../../atomic/header/header';
import { Flex } from '../../atomic/box';
import Avatar from '../../atomic/avatar';
import { useUser } from '../../redux/auth/auth-selectors';
import Button from '../../atomic/button';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/auth-actions';

const AppHeader = () => {
	const user = useUser();
	const dispatch = useDispatch();

	return (
		<Header>
			<Flex padding={'xs'} justifyContent={'flex-end'}>
				<Flex gap={'xs'} alignItems={'center'}>
					<Button size={'xs'} onClick={() => dispatch(logout())}>
						Log out
					</Button>
					{user && <Avatar photo={user.photo} size={'sm'} name={`${user.firstName} ${user.lastName}`} />}
				</Flex>
			</Flex>
		</Header>
	);
};

export default AppHeader;
