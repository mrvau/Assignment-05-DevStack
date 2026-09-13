export interface Data {
	id: string;
	name: string;
	category: "Frontend" | "Language" | "Backend" | "CSS" | "Database" | "DevOps" | "DevTools" | "Design";
	description: string;
	icon: string;
	rating: number;
	difficulty: "Beginner" | "Intermediate" | "Advanced";
	badge: "Popular" | "Trending" | "Enterprise" | "Essential" | "Mature" | "Classic" | "Powerful";
}