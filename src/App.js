import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';
import NewBlog from './components/NewBlog';
import Blog from './components/Blog';
import AboutUs from './components/AboutUs';
import Registration from './components/Registration';

function App() {
	return (
		<Router>
			<Nav />
			<Switch>

				<Route path="/create">
					<NewBlog />
				</Route>

				<Route path="/posts/:id">
					<Blog />
				</Route>

				<Route path="/about">
					<AboutUs />
				</Route>

				<Route path="/reg">
					<Registration />
				</Route>

				<Route  path="/">
					<Home />
				</Route>

			</Switch>
		</Router>
	);
}

export default App;
