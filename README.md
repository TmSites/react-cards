# React Bookstore Project 📚

A clean, lightweight, and responsive single-page bookstore application built with **React** and **Tailwind CSS (v4)**. 

This project displays a collection of book bundles as visual cards. Clicking on any card or its integrated action button dynamically opens a detailed view displaying the raw mock data of that specific book using dynamic routing.

## 🚀 Features

* **Dynamic Routing:** Built with `react-router-dom` utilizing parameters (`/book/:id`) to render dynamic detail pages.
* **Component-Level Navigation:** Uses a reusable `LinkButton` component embedded directly inside components for seamless user flow.
* **Modern Styling:** Styled completely with the latest **Tailwind CSS v4** utility-first framework.
* **Interactive UI:** Click triggers mapped onto both the image assets and detail buttons for optimal user experience.

---

## 🛠️ Tech Stack

* **Frontend Library:** React
* **Routing:** React Router Dom (v6)
* **Styling Framework:** Tailwind CSS (v4)
* **Build Tool:** Vite
* **Version Control:** Git & GitHub

---

## 📂 Project Structure Explained

* **`src/reactss/mockdata.js`**: Contains the local array of book objects (`bookBundles`), acting as our database.
* **`src/reactss/kartlar.jsx`**: The reusable card component that structures the book title, image, and price.
* **`src/reactss/KitapDetal.jsx`**: The dynamic details page that uses `useParams()` and `parseInt()` to extract the URL ID, filter the matching data item using `.find()`, and format the raw JSON object inside `<pre>` tags.
* **`src/css-s/Home.css`**: The main entry point for the global Tailwind CSS configuration utilizing v4 directives.

---

## 💻 How to Run Locally

1. Clone the repository to your local machine.
2. Open your terminal in the project directory and install the necessary dependencies:
   ```bash
   npm install