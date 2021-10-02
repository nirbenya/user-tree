import * as React from 'react';
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom';
const LoginPage = React.lazy(() => import('./pages/login/login'));
const UsersTreePage = React.lazy(() => import('./pages/users-tree/users-tree'));
import AppHeader from './components/app-header/app-header';
import { useSelector } from 'react-redux';
import { isUserAuthenticated } from './redux/auth/auth-selectors';
import { Div, Flex } from './atomic/box';

const ProtectedRoute = ({ component: Component, ...rest }: RouteProps) => {
	const isAuthenticated = useSelector(isUserAuthenticated);

	if (!isAuthenticated) {
		return <Redirect to={'/login'} />;
	}

	return <Route component={Component} {...rest} />;
};

function App() {
	const isAuthenticated = useSelector(isUserAuthenticated);
	return (
		<Flex height={'100%'} flexDirection={'column'} className="App">
			<React.Fragment>
				{isAuthenticated && <AppHeader />}

				<Div overflow={'auto'} height={'100%'} flexGrow={1}>
					<React.Suspense fallback={null}>
						<Switch>
							<ProtectedRoute path={'/'} exact component={() => <Redirect to={'/users'} />} />
							<Route path={'/login'} component={LoginPage} />
							<ProtectedRoute path={'/users'} component={UsersTreePage} />
						</Switch>
					</React.Suspense>
				</Div>
			</React.Fragment>
		</Flex>
	);
}

export default App;
