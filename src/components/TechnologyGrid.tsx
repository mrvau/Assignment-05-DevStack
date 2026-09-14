import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Data } from "../types/data.type";
import Stack from "./Stack";
const TechnologyGrid = () => {
	const [data, setData] = useState<Data[]>([]);
	const [selectedItems, setSelectedItems] = useState<Data[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const response = await fetch("/data.json");
				const result = await response.json();
				setData(result);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	const handleSelection = (id: string) => {
		if (selectedItems.some((item) => item.id === id)) {
			alert("Item already selected!");
			return;
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
	};

	return (
		<div className="container technology">
			<h2>
				Explore the <span>Technologies</span>
			</h2>
			<p>Pick one technology per category to build your ideal stack.</p>

			<div className="technology-container">
				{isLoading ? (
					<div className="text-lg text-gray-500">Loading...</div>
				) : (
					<div className="technology-grid">
						{data.map((item) => {
							const isSelected = selectedItems.some(
								(selected) => selected.id === item.id,
							);
							return (
								<TechnologyCard
									key={item.id}
									item={item}
									handleSelection={handleSelection}
									isSelected={isSelected}
								/>
							);
						})}
					</div>
				)}
				<div>
					<Stack
						selectedItems={selectedItems}
						handleRemoveSelection={handleRemoveSelection}
						handleRemoveAll={handleRemoveAll}
					/>
				</div>
			</div>
		</div>
	);
};

export default TechnologyGrid;
