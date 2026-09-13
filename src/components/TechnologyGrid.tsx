import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Data } from "../types/data.type";
const TechnologyGrid = () => {
	const [data, setData] = useState<Data[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("/data.json");
			const result = await response.json();
			setData(result);
		};

    fetchData();
	}, []);

	return (
		<div className="container technology-grid">
			<h2>
				Explore the <span>Technologies</span>
			</h2>
			<p>Pick one technology per category to build your ideal stack.</p>

			<div className="grid-container">
				{data.map((item) => (
					<TechnologyCard key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default TechnologyGrid;
