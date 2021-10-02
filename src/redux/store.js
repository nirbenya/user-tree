import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// reducers
import peopleReducer from './people/people-reducer';
import authReducer from './auth/auth-reducer';

const store = createStore(
	combineReducers({
		people: peopleReducer,
		auth: authReducer,
	}),
	{},
	composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
