import { ArrowRight, File, Filter , Folder, FolderPlus } from "lucide-react";
import React, { useState, useEffect } from "react";
import { allProjects } from "../Projects";
import ProjectModal from "./ProjectModal";
// import './style.css';
// --- CONFIG DATA ---
const CATEGORIES = ["All", "Web Development", "Mobile Development","Design", "Backend Development", "Writing", "Data Science"];

// --- ICONS ---
const ICONS = {
  dollar: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 mr-1 text-[var(--color-accent)]"
    >
      <path d="M12 1V23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  sun: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  ),
  moon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  ),
};

// --- UTILITIES ---
const timeAgo = (dateString) => {
  const now = new Date();
  const past = new Date(dateString);
  const diffTime = Math.abs(now - past);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays === 1) return "Posted Today";
  if (diffDays < 30) return `${diffDays} days ago`;
  return past.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
};

// --- MARKETPLACE COMPONENT ---
const Marketplace = ({onBack}) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterBudgetMin, setFilterBudgetMin] = useState(0);
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  // const [theme, setTheme] = useState("dark");

  // Load projects initially
  useEffect(() => {
    setProjects(allProjects);
  }, []);

  // Filter and sort projects
  const filteredProjects = projects
    .filter((project) => {
      const searchMatch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatch = filterCategory === "All" || project.category === filterCategory;
      const budgetMatch = project.budget >= filterBudgetMin;
      return searchMatch && categoryMatch && budgetMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return sortOrder === "asc"
          ? new Date(a.posted) - new Date(b.posted)
          : new Date(b.posted) - new Date(a.posted);
      } else if (sortBy === "budget") {
        return sortOrder === "asc" ? a.budget - b.budget : b.budget - a.budget;
      }
      return 0;
    });
    if (selectedProject) {
    return (
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500`}>
     <style>{`
        :root {
        //   --color-bg-primary: #1e1e2d;
          --color-bg-secondary: white;
          --color-text-primary:#27293b
        //    #f8f8f2;
          --color-text-subtle: #b4b4c4;
          --color-accent: #657de6;
          --color-accent-text: #ffffff;
          --color-border: #3b3e56;
          --color-input-bg: gray-400;
          #1e1e2d;
          --color-input-border: #4d5069;
          --color-tag-bg: #4d5069;
          --color-tag-text: #f8f8f2;
          --color-range-track: #4d5069;
          --color-range-thumb: #657de6;
        }

        .light-theme {
          --color-bg-primary: #ffffff;
          --color-bg-secondary: #f3f4f6;
          --color-text-primary: #1f2937;
          --color-text-subtle: #4b5563;
          --color-accent: #4f46e5;
          --color-accent-text: #ffffff;
          --color-border: #d1d5db;
          --color-input-bg: #ffffff;
          --color-input-border: #d1d5db;
          --color-tag-bg: #e0e7ff;
          --color-tag-text: #3730a3;
          --color-range-track: #d1d5db;
          --color-range-thumb: #4f46e5;
        }

        .toggle-switch:checked {
          background-color: var(--color-accent);
        }
        .toggle-switch {
          transition: background-color 0.3s;
        }
        .toggle-switch + .toggle-switch-label {
          background-color: var(--color-slider-track);
        }
        .toggle-switch:checked + .toggle-switch-label {
          background-color: var(--color-accent);
        }
      `}</style> 

      
      <div className="p-4 sm:p-8 max-w-7xl mx-auto">
        {/* HEADER */}
       
         <button onClick={onBack} className='flex items-center text-blue-900 hover:text-blue-700 mb-6 group'>
                        <ArrowRight className='w-5 h-5 rotate-180 mr-2 group-hover:-translate-x-1 transition-transform'/>Back to Home
                    </button>
        {/* MAIN CONTENT */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg mb-8">
      {/* Left Section: Icon + Title */}
      <div className="flex items-center gap-6 mb-4 md:mb-0">
        <div className="bg-gradient-to-tr from-blue-400 to-purple-500 p-4 rounded-full shadow-lg transform transition-transform ">
          <File className="text-white w-8 h-8" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Project Listings
          </h1>
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Explore all your projects, manage progress, and track updates easily.
          </p>
        </div>
      </div>

      {/* Right Section: Action Button */}
      <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition transform hover:-translate-y-1 hover:scale-105">
        <FolderPlus className="w-5 h-5" />
        Add New Project
      </button>
    </div>


        <div className="flex flex-col  lg:flex-row gap-8">
          {/* FILTERS */}
          <aside className="lg:w-1/3 p-6 bg-gradient-to-b from-blue-200 to-white rounded-xl shadow-xl h-fit sticky top-4  border border-[var(--color-border)] transition-colors duration-500">
            <div className="flex items-center mb-4 space-x-3">
            <Filter className="w-10 h-10 mb-4"/>
            <h2 className="text-2xl font-bold mb-6 flex items-center">Filters</h2>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Search Keywords</label>
              <input
                type="text"
                placeholder="e.g., React, Logo, Python"
                className="w-full pl-3 pr-3 py-2 placeholder:text-gray-400 rounded-lg bg-[var(--color-input-bg)] border border-[var(--color-input-border)]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                className="w-full px-4 py-2 rounded-lg border border-[var(--color-input-border)]"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Minimum Budget</label>
             <input
           type="range"
           min="0"
           max="90000"
           step="100"
            value={filterBudgetMin}
             onChange={(e) => setFilterBudgetMin(Number(e.target.value))}
           className="filter-range"
              />
              <div className="flex justify-between text-sm font-semibold mt-1">
                <span>Min: ₹{filterBudgetMin}</span>
                <span>Max: ₹90,000</span>
              </div>
            </div>
            <div className="mt-6">
    <button
      onClick={() => {
        setSearchTerm("");
        setFilterCategory(CATEGORIES[0]);
        setFilterBudgetMin(0);
      }}
      className="w-full py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md transition-all duration-300"
    >
      Reset Filters
    </button>
  </div>
          </aside>

          {/* PROJECTS */}
          <main className="lg:w-3/4 space-y-6">
            <div className="flex justify-between items-center mb-6 p-4 rounded-xl shadow-inner border bg-[var(--color-bg-secondary)]">
              <p>
                Showing <span className="font-bold text-[var(--color-accent)]">{filteredProjects.length}</span> results
              </p>
              <div className="flex gap-3">
                <button
                  className="px-3 py-1 rounded-full bg-blue-500 hover:scale-105"
                  onClick={() => {
                    if (sortBy === "date") setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                    else {
                      setSortBy("date");
                      setSortOrder("desc");
                    }
                  }}
                >
                  Date
                </button>
                <button
                  className="px-3 py-1 rounded-full bg-blue-500 hover:scale-105"
                  onClick={() => {
                    if (sortBy === "budget") setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                    else {
                      setSortBy("budget");
                      setSortOrder("desc");
                    }
                  }}
                >
                  Budget
                </button>
              </div>
            </div>

            {filteredProjects.length === 0 ? (
              <p className="text-center text-[var(--color-text-subtle)]">No projects match your filters.</p>
            ) : (
              filteredProjects.map((project) => (
             
 <div
  key={project.id}
  className="bg-gradient-to-t from-blue-200 via-blue-50 to-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-200 group"
>
  <div className="flex justify-between items-start mb-3">
    <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
      {project.title}
    </h2>
    <div className="flex flex-col items-end">
      <span className="text-xl font-bold text-green-600 flex items-center">
        <span className="text-lg">₹</span>
        {project.budget.toLocaleString()}
      </span>
      <span className="text-xs text-gray-500 mt-1">{timeAgo(project.posted)}</span>
    </div>
  </div>
  
  <p className="text-gray-600 mb-4 text-medium line-clamp-2 leading-relaxed">
    {project.description}
  </p>
  
  <div className="flex flex-wrap gap-2 mb-4">
    {project.skills.map((tag, i) => (
      <span 
        key={i} 
        className="px-2.5 py-1 text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200 rounded-full font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-200"
      >
        {tag}
      </span>
    ))}
  </div>
  
  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
    <div className="flex items-center">
      <img
        src={`https://placehold.co/40x40/4b5563/e5e7eb?text=${project.client.charAt(0)}`}
        alt={`${project.client} Logo`}
        className="w-8 h-8 rounded-full object-cover mr-3 shadow-md border-2 border-gray-300 group-hover:border-blue-400 transition-colors duration-200"
      />
      <span className="text-sm text-gray-600">Client: {project.client}</span>
    </div>
    <button 
      onClick={() => setSelectedProject(project)} 
      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl group-hover:scale-105"
    >
      View & Apply
    </button>
  </div>
</div> 
              ))
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Marketplace; 