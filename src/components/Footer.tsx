import logo from "../assets/logo-text.png";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-description">
						<img src={logo} alt="DevStack Logo" />
						<p>
							Curated tools, technologies, and resources for developers building
							modern software.
						</p>
						<div className="social-links">
							<ul>
								<li>
									<a href="#">GitHub</a>
								</li>
								<li>
									<a href="#">Twitter</a>
								</li>
								<li>
									<a href="#">LinkedIn</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="links">
						<h5>PRODUCT</h5>
						<ul>
							<li>
								<a href="">Home</a>
							</li>
							<li>
								<a href="">Technologies</a>
							</li>
							<li>
								<a href="">Projects</a>
							</li>
						</ul>
					</div>
					<div className="links">
						<h5>COMPANY</h5>
						<ul>
							<li>
								<a href="">About</a>
							</li>
							<li>
								<a href="">Contact</a>
							</li>
							<li>
								<a href="">Careers</a>
							</li>
						</ul>
					</div>
					<div className="links">
						<h5>LEGAL</h5>
						<ul>
							<li>
								<a href="">Privacy Policy</a>
							</li>
							<li>
								<a href="">Terms of Service</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="copyright">
					<div className="copyright-text">
						<p>&copy; 2026 Dev Stack. All rights reserved.</p>
					</div>
					<div className="copyright-links">
						<a href="">Privacy</a>
						<a href="">Terms</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
