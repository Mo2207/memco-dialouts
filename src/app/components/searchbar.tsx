
"use client";
import { useState } from "react";

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (query: string) => void;
};

export default function SearchBar({
  placeholder = "Search...",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full max-w-md mx-auto bg-white rounded-md shadow-sm border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="grow px-4 py-2 rounded-l-md outline-none text-gray-700"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-[#3a7a9e] text-white hover:bg-blue-600 focus:ring-blue-500 font-medium rounded-r-md transition"
      >
        Search
      </button>
    </form>
  );
}
