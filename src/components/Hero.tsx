import heroImage from "../assets/banner-stack.png";
const Hero = () => {
	return (
		<main className="container hero">
			<div className="hero-content">
				<h1>
					Build your ideal
					<br />
					<span>Development Stack</span>
				</h1>
				<p>
					Explore frontend, backend, database, and tooling options, compare them side by
					side, and put together the stack that fits your next project.
				</p>
				<div className="cta">
					<button>Explore Technologies</button>
					<button>Learn More</button>
				</div>
			</div>
			<div className="hero-image">
				<img src={heroImage} alt="Banner Stack Image" />
			</div>
		</main>
	);
};

export default Hero;
