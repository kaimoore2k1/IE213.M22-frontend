import React from "react";
import ReactDOM from "react-dom";
import "./sass/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import JWTManager from "./modules/utils/jwt";
import AuthContextProvider from "./modules/context/AuthContext";

const httpLink = createHttpLink({
	// uri: 'https://senshopdottech.herokuapp.com/',
	uri: 'http://localhost:4000/',
	credentials: 'include'
})


const authLink = setContext((_, { headers }) => {
	// get the authentication token from JWTManager if it exists
	const token = JWTManager.getToken()
	//console.log(token)
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ''
		}
	}
})

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
})


ReactDOM.render(
	<ApolloProvider client={client}>
		<AuthContextProvider>
			<BrowserRouter>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</BrowserRouter>
		</AuthContextProvider>
	</ApolloProvider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
