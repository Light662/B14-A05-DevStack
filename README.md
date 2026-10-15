# 🚀 Dev Stack Builder

### Build Your Ideal Development Stack

**Explore technologies. Compare tools. Build your stack.**

Dev Stack Builder is a responsive web application that helps developers explore popular technologies and build a development stack for their next project. Each technology card shows useful details such as its category, difficulty level, rating, and badge. Add technologies to your stack, remove them individually, or clear your selection.

🌐 **Live Demo:** https://b14-devstack-delta.vercel.app/

📂 **GitHub Repository:** https://github.com/Light662/B14-A05-DevStack

## ✨ Features

- **Explore Technologies:** Browse technology cards with icons, descriptions, categories, difficulty levels, ratings, and badges.
- **Build Your Stack:** Add technologies to your personal stack, remove individual items, or clear the entire stack. Duplicate selections are prevented.
- **Responsive Interface:** Browse the technology collection alongside a stack sidebar, with a clean gradient theme and toast notifications for stack actions.

## 🛠️ Technologies Used

- **React** — Build reusable UI components.
- **TypeScript** — Add type safety to the application.
- **Tailwind CSS** — Create styling and responsive layouts.
- **DaisyUI** — Use additional UI component styles.
- **React Icons** — Display technology and social icons.
- **React-Toastify** — Show notifications when stack items are added or removed.
- **JSON** — Store the technology data.
- **Vite** — Run the development server and build the project.

## ⚙️ Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Light662/B14-A05-DevStack.git
   ```

2. Open the project folder:

   ```bash
   cd B14-A05-DevStack
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the local development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal.

## 🧠 React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like markup inside JavaScript or TypeScript. It makes it easier to describe the UI that React should display.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. **State** is data managed by a component that can change over time. Updating state can cause React to render the UI again.

### 3. What does the `useState` hook do, and where is it useful?

`useState` lets a function component remember information and update it. In this project, state keeps track of the technologies selected for the stack, so the sidebar updates when items are added or removed.

### 4. What does the `useEffect` hook do? How can it load data from a JSON file?

`useEffect` runs side-effect code after a component renders. It can be used to fetch a JSON file when a component first appears. For example, an effect can call `fetch("/data.json")`, convert the response with `response.json()`, and save the result in state. A loading state can be shown until the data arrives.

### 5. Why does React need a `key` when rendering a list with `map()`?

A `key` gives each item a stable identity. React uses it to tell which items were added, removed, or changed. A unique value such as `technology.id` is usually a good key.

### 6. What is conditional rendering in React?

Conditional rendering means showing different UI depending on a condition. For example, the stack sidebar can show “Your stack is empty” when no technologies are selected, and show the selected technology list when there are items.

### 7. How can data be passed from a parent component to a child component, and how can a child notify the parent?

A parent passes data to a child through props. To let a child request a change, the parent can pass a callback function as a prop. The child calls that function, and the parent updates its state. This keeps the shared state in the parent while allowing child components to interact with it.

## 👤 Author

**Dev Stack Builder** — a development stack selection project.
