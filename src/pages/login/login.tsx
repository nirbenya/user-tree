import _ from 'lodash';
import * as React from 'react';
import { useQuery } from 'react-query';
import { Field, Formik, FieldProps } from 'formik';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { getHierarchyCollection } from '../../redux/people/people-selectors';
import { fetchUsersHirarchy } from '../../redux/people/people-actions';

// constants
import { SET_USER } from '../../redux/auth/auth-reducer';
import { DB_BASE_URL } from '../../constants/constants';

// components
import Box, { Flex } from '../../atomic/box';
import Input from '../../atomic/input';
import Panel from '../../atomic/panel';
import Button from '../../atomic/button';

// helpers
import regex from '../../helpers/regex';
import encodeAuth from '../../helpers/encodeAuth';

// types
import { User } from '../../types/user';

const LoginPage = ({ history }: any) => {
	const { data: secrets } = useQuery(['secrets'], async () => {
		const res = await fetch('https://gongfetest.firebaseio.com/secrets.json');

		if (!res.ok) {
			throw new Error('Failed to retrieve initial data');
		}

		return await res.json();
	});

	const dispatch = useDispatch();

	const usersIds = useSelector(getHierarchyCollection);

	React.useEffect(() => {
		dispatch(fetchUsersHirarchy());
	}, []);

	const onSubmit = async ({ email, password }: { email: string; password: string }) => {
		const secret = encodeAuth(email, password);
		const userId = secrets[secret];

		const userIndex = _.findIndex(usersIds, id => userId === id);

		if (userIndex >= 0) {
			const userResponse = await fetch(`${DB_BASE_URL}/users/${userIndex}.json`);

			const user: User = await userResponse.json();
			if (userResponse.ok && user) {
				dispatch({ type: SET_USER, payload: user });

				return history.push('/users');
			}
		}

		window.alert('Login failed');
	};

	return (
		<Flex alignItems={'center'} justifyContent={'center'} height={'100%'}>
			<Panel padding={'md'} variant={'shadow'} flexGrow={1} maxWidth={'600px'}>
				<Formik
					validateOnChange
					validateOnMount
					onSubmit={onSubmit}
					//initialValues={{ password: '', email: '' }}
					initialValues={{ password: 'mllv9n0x', email: 'anthony.xiouping@xtreet.tvl' }}
				>
					{({ handleSubmit, isValid, values }) => (
						<form onSubmit={handleSubmit}>
							<Box marginBottom={'sm'}>
								<Field
									validate={(value: string) => {
										return regex.email.test(value) ? undefined : 'required';
									}}
									name={'email'}
								>
									{({ field }: FieldProps) => (
										<Input
											value={field.value}
											placeholder={'Email'}
											onChange={field.onChange}
											name={field.name}
										/>
									)}
								</Field>
							</Box>
							<Box marginBottom={'sm'}>
								<Field name={'password'} validate={(value: string) => (value ? undefined : 'required')}>
									{({ field }: FieldProps) => (
										<Input
											placeholder={'Password'}
											type={'password'}
											value={field.value}
											onChange={field.onChange}
											name={field.name}
										/>
									)}
								</Field>
							</Box>
							<Button block disabled={!isValid} type={'submit'}>
								Log in
							</Button>
						</form>
					)}
				</Formik>
			</Panel>
		</Flex>
	);
};

export default LoginPage;
