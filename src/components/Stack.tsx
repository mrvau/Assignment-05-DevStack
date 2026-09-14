import cross from "../assets/cross.png";
import type { Data } from "../types/data.type";

interface StackProps {
  selectedItems: Data[];
  handleRemoveSelection: (id:string) => void;
  handleRemoveAll: () => void;
}

const Stack = ({ selectedItems, handleRemoveSelection, handleRemoveAll }: StackProps) => {
	return (
		<div className="stack">
			<h3>Your Stack</h3>
			<p>{selectedItems.length ? `${selectedItems.length} Technologies Selected` : "No Technologies selected yet"}</p>

			{selectedItems.length ? (
				<>
					<ul>
						{selectedItems.map((item) => (
							<li key={item.id}>
								<div className="info">
									<img src={item.icon} alt={item.description} />
									<div className="name">
										<h4>{item.name}</h4>
										<p>{item.category}</p>
									</div>
								</div>

								<div className="cross">
									<button onClick={() => handleRemoveSelection(item.id)}>
										<img src={cross} alt="Cross Icon" />
									</button>
								</div>
							</li>
						))}
					</ul>
          <button onClick={handleRemoveAll}>Remove All</button>
				</>
			) : (
				<div>Your stack is empty</div>
			)}
		</div>
	);
};

export default Stack;
