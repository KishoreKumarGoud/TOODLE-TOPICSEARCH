# Topic Search React App

## Description
This project is a React application that displays a list of topics and allows users to search and filter them by name. It simulates TOTLE’s topic browsing UI for the Catalogue Management System.

- Example Input: `thermo` → Shows `Thermodynamics` card.
- Example Input: `xyz` → Shows `No topics found`.

## Features
- Dynamic search filtering (case-insensitive)
- Displays topic cards with name and category
- Handles empty input gracefully
- Simple and clean UI design

## Folder Structure
topic-search/
├── src/
│ ├── components/
│ │ └── TopicSearch.jsx
│ ├── App.js
│ ├── index.js
│ └── App.css
├── public/
│ └── index.html
├── package.json
├── README.md
└── video/
└── topic-search-demo.mp4

bash
Copy code

## Setup Instructions

1. Clone the repository:
```bash
git clone YOUR_GITHUB_REPO_LINK>](https://github.com/KishoreKumarGoud/TOODLE-TOPICSEARCH.git
Navigate to the project folder:

bash
Copy code
cd topic-search
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open http://localhost:3000 in your browser to see the app running.

How to Use
Type any topic name in the search input.

Matching topic cards will appear dynamically.

If no matches are found, it will display: "No topics found".

Leaving the input empty will show all topics.

Code Overview
The main component is TopicSearch.jsx inside src/components.

The component uses React useState for managing the search input.

Topics are stored in an in-memory array and filtered in real-time.

Basic inline styling and clean layout for each topic card.

Demo Video
A 2-minute demo video showing:

Code structure

Live search examples

Explanation of filtering logic

Video location in repo: video/topic-search-demo.mp4

GitHub Repository:(https://github.com/KishoreKumarGoud/TOODLE-TOPICSEARCH.git)
Access the project here
