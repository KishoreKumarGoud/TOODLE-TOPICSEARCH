import React, { useState, useMemo, useRef, useEffect } from "react";
import { Search } from "lucide-react";

const INITIAL_TOPICS = [
  { id: 1, name: "Thermodynamics", category: "Physics" },
  { id: 2, name: "Machine Learning", category: "Computer Science" },
  { id: 3, name: "Organic Chemistry", category: "Chemistry" },
  { id: 4, name: "Microeconomics", category: "Economics" },
  { id: 5, name: "Introduction to Algorithms", category: "Computer Science" },
   { id: 6, name: "React-JS Library", category: "Javascript" },
];

const CATEGORY_COLORS = {
  Physics: "text-blue-700 bg-blue-100",
  "Computer Science": "text-green-700 bg-green-100",
  Chemistry: "text-orange-700 bg-orange-100",
  Economics: "text-purple-700 bg-purple-100",
  Javascript: "text-red-700 bg-blue-200",
};

export default function TopicSearch() {
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);

  // Auto-focus search input on load
  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return INITIAL_TOPICS;
    return INITIAL_TOPICS.filter((t) => t.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="max-w-4xl mx-auto p-6 select-none">

      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight select-none">
        Browse Topics
      </h1>

      {/* Search Bar */}
      <div className="relative mb-6 select-none">
        <Search className="absolute left-4 top-3.5 text-gray-400 h-5 w-5 pointer-events-none" />
        <input
          ref={searchRef}
          type="text"
          placeholder="Search topics…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            w-full pl-12 pr-4 py-3 rounded-xl
            bg-gray-50 border border-gray-300
            focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300
            transition-all text-gray-900
            outline-none
          "
        />
      </div>

      {/* Results */}
      <p className="text-gray-600 text-sm mb-4 select-none">
        Showing <span className="font-medium">{filtered.length}</span>{" "}
        result{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center py-16 text-gray-500 select-none">

            {/* Clean SaaS-style empty illustration */}
            <svg
              className="mx-auto mb-4 w-28 h-28 opacity-70"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 48 48"
            >
              <path d="M6 10h36M10 6h28M8 10v28a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V10"/>
              <circle cx="17" cy="19" r="4" />
              <path d="M10 34c2-4 6-8 12-8s10 4 12 8" />
            </svg>

            <p className="text-base font-medium text-gray-700">
              No matching topics found
            </p>
            <p className="text-sm mt-1 text-gray-500">
              Try a different keyword
            </p>
          </div>
        ) : (
          filtered.map((topic) => (
            <div
              key={topic.id}
              className="
                bg-white border border-gray-200 rounded-xl
                p-5 shadow-sm 
                hover:shadow-md hover:border-gray-300
                transition-all duration-150 cursor-default
                select-none
              "
            >
              <h3 className="text-lg font-medium text-gray-900 mb-3 select-none">
                {topic.name}
              </h3>

              <span
                className={`
                  inline-block text-xs px-3 py-1 rounded-full 
                  ${CATEGORY_COLORS[topic.category]}
                  select-none
                `}
              >
                {topic.category}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
