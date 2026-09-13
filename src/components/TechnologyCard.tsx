import type { Data } from "../types/data.type";

const TechnologyCard = ({
	item: { name, badge, category, description, difficulty, icon, rating },
}: {
	item: Data;
}) => {
	return (
		<div className="card">
			<div className="card-header">
				<div className="card-logo">
					<img src={icon} alt={description} />
				</div>
				<div className="card-badge">
					<span className="badge">{badge}</span>
				</div>
			</div>
			<div className="card-content">
				<h3>{name}</h3>
				<p>{description}</p>
			</div>
			<div className="card-footer">
				<div className="card-info">
					<div className="card-category">{category}</div>
					<div className="card-difficulty">{difficulty}</div>
					<div className="card-rating">{rating}</div>
				</div>
        <button>Add to Stack</button>
			</div>
		</div>
	);
};

export default TechnologyCard;
