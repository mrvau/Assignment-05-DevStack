import type { Data } from "../types/data.type";

interface TechnologyCardProps {
	item: Data;
	handleSelection: (id: string) => void;
	isSelected: boolean;
}

const TechnologyCard = ({
	item: {id, name, badge, category, description, difficulty, icon, rating },
	handleSelection,
	isSelected
}: TechnologyCardProps) => {
	console.log(badge.toLowerCase());
	return (
		<div className="card">
			<div className="card-header">
				<div className="card-logo">
					<img src={icon} alt={description} />
					<h3>{name}</h3>
				</div>
				<div className={`card-badge ${badge.toLowerCase()}`}>
					<span className="badge">{badge}</span>
				</div>
			</div>
			<div className="card-content">
				<p>{description}</p>
			</div>
			<div className="card-footer">
				<div className="card-info">
					<div className="card-category">{category}</div>
					<div className="card-difficulty">{difficulty}</div>
					<div className="card-rating">★ {rating}</div>
				</div>
				<button onClick={() => handleSelection(id)} disabled={isSelected}>{isSelected ? "Added to Stack" : "Add to Stack"}</button>
			</div>
		</div>
	);
};

export default TechnologyCard;
