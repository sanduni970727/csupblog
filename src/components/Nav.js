import { Link } from 'react-router-dom';

import Logo from '../img/logo.png';

function Nav() {
	return (
		<header>
			<div className="header-container">
				<div className="right-menu">
					<div className="logo">
						<img src={Logo} alt="Logo" />
					</div>

					<Link to="/">CSUP BLOG</Link>
				</div>
				<div className="left-menu">
					<Link to="/">Home</Link>
					<Link to="/create" className="button-container">
						Add Post
					</Link>
				</div>

				<div className="left-menu">
					<Link to="/about" className="button-container">
						About Us
					</Link>
				</div>

				<div className="left-menu">
					<Link to="/reg" className="button-container">
						Registration
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Nav;
