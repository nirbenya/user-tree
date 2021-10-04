import * as React from 'react';

import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import LoginPage from './login';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import 'isomorphic-fetch';
import '@testing-library/jest-dom';
import fetchMock from 'fetch-mock';

const mockSecrets = {
	'4B405BFCA79C31A73FCCAEAE31F2BA5BD2F65B78C8F406A7A4AB9CC9CEABE6C9': 5542035486,
};

const usersMock = [
	{
		'email': 'anthony.xiouping@xtreet.tvl',
		'firstName': 'Anthony',
		'id': 5542035486,
		'lastName': 'Xiouping',
		'managerId': 6523331453,
		'password': 'mllv9n0x',
	},
];

fetchMock.get('https://gongfetest.firebaseio.com/secrets.json', mockSecrets);
fetchMock.get('https://gongfetest.firebaseio.com/users.json', usersMock);
fetchMock.get('https://gongfetest.firebaseio.com/users/0.json', usersMock[0]);

describe('<Login />', () => {
	it('should render perform login successfully and navigate to users page', async () => {
		const history = { push: jest.fn() };
		render(
			<QueryClientProvider client={new QueryClient()}>
				<Provider store={store}>
					<LoginPage history={history} />
				</Provider>
			</QueryClientProvider>,
		);

		// expect button to be in disabled state when no values are entered
		await waitFor(() => {
			expect(screen.getByText('Log in')).toBeDisabled();
		});
		fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'anthony.xiouping@xtreet.tvl' } });
		fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'mllv9n0x' } });

		await waitFor(() => {
			expect(screen.getByText('Log in')).not.toBeDisabled();
		});

		fireEvent.click(screen.getByText('Log in'));

		await waitFor(() => {
			expect(history.push).toHaveBeenLastCalledWith('/users');
		});
	});

	it('should perform login with error and show alert on submit', async () => {
		const history = { push: jest.fn() };
		render(
			<QueryClientProvider client={new QueryClient()}>
				<Provider store={store}>
					<LoginPage history={history} />
				</Provider>
			</QueryClientProvider>,
		);

		// expect button to be in disabled state when no values are entered
		await waitFor(() => {
			expect(screen.getByText('Log in')).toBeDisabled();
		});
		fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'nir.by@gloat.com' } });
		fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'mllv9n0x' } });

		await waitFor(() => {
			expect(screen.getByText('Log in')).not.toBeDisabled();
		});

		const alert = jest.fn();
		window.alert = alert;

		fireEvent.click(screen.getByText('Log in'));

		await waitFor(() => {
			expect(alert).toHaveBeenLastCalledWith('Login failed');
		});
	});
});
