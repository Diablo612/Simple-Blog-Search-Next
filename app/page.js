"use client"
import { useState } from 'react';

const mockData = [
  { id: 1, title: 'JavaScript Basics', category: 'Technology' },
  { id: 2, title: 'CSS Flexbox Tutorial', category: 'Design' },
  { id: 3, title: 'Next.js for Beginners', category: 'Technology' },
  { id: 4, title: 'React Hooks Overview', category: 'Technology' },
  { id: 5, title: 'TailwindCSS: A Utility-First CSS Framework', category: 'Design' },
  { id: 6, title: 'How to Build a Blog with Next.js', category: 'Web Development' },
  { id: 20, title: "The Future of Artificial Intelligence", category: "Technology" },
  { id: 21, title: "5 Web Design Trends for 2024", category: "Design" },
  { id: 22, title: "Exploring React: A JavaScript Library for Building User Interfaces", category: "Web Development" },
  { id: 23, title: "How Cloud Computing Is Changing the Business Landscape", category: "Technology" },
  { id: 24, title: "CSS Grid Layout: A Beginner's Guide", category: "Web Development" },
  { id: 25, title: "UX Design Best Practices for Mobile Apps", category: "Design" },
  { id: 26, title: "Blockchain: The Future of Secure Transactions", category: "Technology" },
  { id: 27, title: "HTML5 Semantic Elements: A Guide", category: "Web Development" },
  { id: 28, title: "The Evolution of E-commerce: Trends to Watch in 2024", category: "Technology" },
  { id: 29, title: "Building Accessible Websites: A Step-by-Step Guide", category: "Web Development" },
  { id: 30, title: "10 Creative Ways to Improve Your Brand Identity Through Design", category: "Design" },
  { id: 31, title: "Serverless Architecture: What You Need to Know", category: "Technology" },
  { id: 32, title: "How to Optimize Your Website's Load Time", category: "Web Development" },
  { id: 33, title: "Responsive Web Design: Tips for Building Mobile-Friendly Sites", category: "Web Development" },
  { id: 34, title: "How to Create Stunning Visual Designs for Social Media", category: "Design" },
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(mockData);
  const [categoryFilter, setCategoryFilter] = useState('all');

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setSearchTerm(searchQuery);

    let results = mockData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (categoryFilter !== 'all') {
      results = results.filter(item => item.category === categoryFilter);
    }

    setFilteredData(results);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategoryFilter(selectedCategory);

    let results = mockData.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategory !== 'all') {
      results = results.filter(item => item.category === selectedCategory);
    }

    setFilteredData(results);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Blog Search</h1>

      {/* Search Box */}
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for blog posts..."
          className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            transition: 'border-color 0.3s ease',
          }}
        />
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <select
          value={categoryFilter}
          onChange={handleCategoryChange}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Design">Design</option>
          <option value="Web Development">Web Development</option>
        </select>
      </div>

      {/* Results Display */}
      <div>
        {filteredData.length === 0 ? (
          <p className="text-center text-gray-500">No results found</p>
        ) : (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="mb-4 p-6 border border-gray-200 rounded-lg transition-shadow hover:shadow-lg cursor-pointer"
              style={{
                backgroundColor: '#fff',
              }}
            >
              <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
              <p className="text-gray-600">{item.category}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
