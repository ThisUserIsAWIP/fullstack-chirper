import * as React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './navbar';
import Post from './post';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Edit from './edit';
import Home from './home';
import Users from './Users';

const App = (props: AppProps) => {




	return (

		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path={'/post'}>
					<Post />
				</Route>
				<Route exact path={'/newuser'}>
					<Users />
				</Route>
				<Route exact path={'/:id'}>
					<Edit />
				</Route>
			</Switch>
			<Home />
			
		</BrowserRouter>

	);
}



interface AppProps { };

interface AppState { };


export default App;

//
// const App = (props: AppProps) => {
// 	const [greeting, setGreeting] = React.useState<string>('');

// 	React.useEffect(() => {
// 		(async () => {
// 			try {
// 				const res = await fetch('/api/hello');
// 				const greeting = await res.json();
// 				setGreeting(greeting);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		})();
// 	}, []);

// 	return (
// 		<div className="min-vh-100 d-flex justify-content-center align-items-center">
// 			<h1 className="display-1">Hello {greeting}!</h1>
// 		</div>
// 	);
// };

// interface AppProps {}

// export default App;
