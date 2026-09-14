# DevStack

DevStack is an interactive React app for exploring development technologies and building a personal stack. Browse frontend, backend, database, CSS, DevOps, and other tools, then add your choices to a stack for easy comparison and management.

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Toastify
- ESLint

## Features

1. **Explore technology options** - View technology cards with descriptions, categories, difficulty levels, ratings, and badges.
2. **Build a custom stack** - Add technologies to your stack while preventing duplicate selections.
3. **Manage selections easily** - Remove individual technologies or clear the entire stack, with toast notifications for each action.

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like elements inside JavaScript or TypeScript. React uses JSX to describe what the user interface should look like in a clear and readable way.

### 2. What is the difference between props and state?

Props are values passed from a parent component to a child component. State is data managed inside a component that can change and cause the UI to update.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` adds changeable data to a function component. In `TechnologyGrid`, it stores the loaded technologies, selected technologies, and loading status.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after a component renders. It loads `/data.json` when `TechnologyGrid` first appears, so the technology data is available for the cards.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each list item. This lets React update only the items that changed and keeps list rendering efficient and predictable.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In `Stack`, the selected technology list is shown when `selectedItems.length` is greater than zero; otherwise, the message `Your stack is empty` is displayed.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

The parent passes data through props. It can also pass a function as a prop, which the child calls to send an event or value back. In this project, `TechnologyGrid` passes `selectedItems` and handler functions to `Stack`, and `Stack` calls those handlers when a user removes an item.
