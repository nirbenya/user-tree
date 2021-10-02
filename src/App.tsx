import * as React from 'react';
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import LoginPage from './pages/login/login';
import UsersTreePage from './pages/users-tree/users-tree';
import AppHeader from './components/app-header/app-header';
import { useSelector } from 'react-redux';
import { isUserAuthenticated, useUser } from './redux/auth/auth-selectors';
import { Div } from './atomic/box';

const ProtectedRoute = ({ component: Component, ...rest }: RouteProps) => {
	const user = useUser();

	if (!user) {
		return <Redirect to={'/login'} />;
	}

	return <Route component={Component} {...rest} />;
};

function App() {
	const isAuthenticated = useSelector(isUserAuthenticated);
	return (
		<div className="App">
			<React.Fragment>
				{isAuthenticated && <AppHeader />}

				<Div overflow={'auto'} height={'100vh'}>
					<Switch>
						<ProtectedRoute path={'/'} exact component={() => <Redirect to={'/users'} />} />
						<Route path={'/login'} component={LoginPage} />
						<ProtectedRoute path={'/users'} component={UsersTreePage} />
					</Switch>
				</Div>
			</React.Fragment>
		</div>
	);
}

export default App;
