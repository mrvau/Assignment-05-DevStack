import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
	return (
		<div className="md:border-b border-gray-300 m-1">
			<nav className="container nav">
				<div className="hamburger">
					<img src={hamburger} alt="Hamburger Icon" />
				</div>
				<div className="logo">
					<img src={logo} alt="Logo of DevStack" />
				</div>
				<div className="nav-items">
					<ul>
						<li>Home</li>
						<li>Technologies</li>
						<li>Projects</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className="nav-buttons">
					<button>Sign In</button>
					<button>Sign Up</button>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
