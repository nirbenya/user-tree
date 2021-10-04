import * as React from 'react';

// components
import Header from '../../atomic/header/header';
import { Flex } from '../../atomic/box';
import Avatar from '../../atomic/avatar';
import Button from '../../atomic/button';

// hooks
import { useUser } from '../../redux/auth/auth-selectors';
import { useDispatch } from 'react-redux';

// actions
import { logout } from '../../redux/auth/auth-actions';

const AppHeader = () => {
	const user = useUser();
	const dispatch = useDispatch();

	return (
		<Header>
			<Flex padding={'xs'} justifyContent={'flex-end'}>
				<Flex gap={'xs'} alignItems={'center'}>
					{user && (
						<React.Fragment>
							<Button size={'xs'} onClick={() => dispatch(logout())}>
								Log out
							</Button>
							<Avatar photo={user.photo} size={'sm'} name={`${user.firstName} ${user.lastName}`} />
						</React.Fragment>
					)}
				</Flex>
			</Flex>
		</Header>
	);
};

export default AppHeader;
