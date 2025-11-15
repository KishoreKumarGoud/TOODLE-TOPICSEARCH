import React from "react";
import TopicSearch from "./Components/TopicSearch";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        TOTLE — Topic Search
      </h1>

      <TopicSearch />
    </div>
  );
}
