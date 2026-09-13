import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Data } from "../types/data.type";
import Stack from "./Stack";
const TechnologyGrid = () => {
	const [data, setData] = useState<Data[]>([]);
	const [selectedItems, setSelectedItems] = useState<Data[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("/data.json");
			const result = await response.json();
			setData(result);
		};

		fetchData();
	}, []);

	const handleSelection = (id: string) => {
		if (selectedItems.some((item) => item.id === id)) {
			alert("Item already selected!");
		}

		const selectedItem = data.filter((item) => item.id === id);

		setSelectedItems([...selectedItems, selectedItem[0]]);
	};

	const handleRemoveSelection = (id: string) => {
		const remainingItems = selectedItems.filter((item) => item.id !== id);
		setSelectedItems(remainingItems);
	};

	const handleRemoveAll = () => {
		setSelectedItems([]);
	}

	return (
		<div className="container technology">
			<h2>
				Explore the <span>Technologies</span>
			</h2>
			<p>Pick one technology per category to build your ideal stack.</p>

			<div className="technology-container">
				<div className="technology-grid">
					{data.map((item) => (
						<TechnologyCard
							key={item.id}
							item={item}
							handleSelection={handleSelection}
						/>
					))}
				</div>
				<div>
					<Stack selectedItems={selectedItems} handleRemoveSelection={handleRemoveSelection} handleRemoveAll={handleRemoveAll} />
				</div>
			</div>
		</div>
	);
};

export default TechnologyGrid;
