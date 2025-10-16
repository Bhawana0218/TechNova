import React, { useState } from "react";
import { allProjects } from "./Projects";
import MarketPlace from "./ProjectDetailsPage/MarketPlace.jsx";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer.jsx";
const HomePage = () => {
  // --- CONFIGURATION (from config.js) ---
  const [activePage, setActivePage] = useState('home');
  // const [projectPage, setProjectPage] = useState(false);
  //  const onBack = () =>{
  //   setProjectPage(false);
  // }
  // if (projectPage) {
  //   // Render Marketplace as a new page
  //   return <MarketPlace onBack={onBack} />;
  // }
 
  // const LoadPage = () =>{
  //   setProjectPage(true);
  // }
   const onBack = () => setActivePage("home");

 
  const CATEGORIES = [
    "All",
    "Mobile Development",
    "Web Development",
    "Design",
    "Backend Development",
    "Writing",
    "Data Science",
  ];
  const openProjects = () => {
    setShowMarketplace(true); 
  };
  const [showMarketplace, setShowMarketplace] = useState(false);

  // --- FILTER + SEARCH STATE ---
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
   
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // --- DATE HELPER ---
  const timeAgo = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffDays = Math.ceil(Math.abs(now - past) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) return "Posted Today";
    if (diffDays < 30) return `${diffDays} days ago`;
    return past.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // --- FILTERED PROJECTS ---
  const filteredProjects = allProjects.filter((p) => {
    const searchMatch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch =
      filterCategory === "All" || p.category === filterCategory;
    return searchMatch && categoryMatch;
  });
   if (activePage === "projectList") {
  return <MarketPlace onBack={() => setActivePage("home")} />;
}
  return (
    <div>
    
    <div
      className='min-h-screen font-sans transition-colors duration-500'>
      {/* --- HERO SECTION --- */}

      <section
  id="home"
  className="hero-section flex items-center justify-center p-8 text-center mt-0 min-h-[100vh]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
       url('https://picsum.photos/1600/900?blur=2') 
    `,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="max-w-4xl text-white">
    <h1 className="text-7xl sm:text-7xl font-extrabold mb-8">
      Your Success Starts Here.
    </h1>
    <p className="text-xl sm:text-2xl mb-8 font-light">
      Find the perfect project or the right talent, focusing on simplicity
      and efficiency.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="#projects"
        className="px-8 py-3 rounded-lg font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition shadow-xl"
      >
        Browse Projects
      </a>
      <a
        href="#"
        className="px-8 py-3 rounded-lg font-bold text-lg bg-white text-gray-900 hover:bg-gray-100 transition shadow-xl"
      >
        Become a Freelancer
      </a>
    </div>
  </div>
</section>
      {/* --- HIGHLIGHTS SECTION --- */}
      <section className="p-8 sm:p-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose TaskNova?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300 max-w-6xl mx-auto">
          {[
            {
              title: "Streamlined Workflow",
              desc: "Our intuitive dashboards simplify project management and proposal tracking.",
              icon: "📈",
            },
            {
              title: "No Overwhelm",
              desc: "Designed to avoid the complexity of existing platforms, focusing on an engaging UI/UX.",
              icon: "⚡",
            },
            {
              title: "Role-Based Experience",
              desc: "Dedicated dashboards for Clients and Freelancers ensure relevant tools for each role.",
              icon: "🎯",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-center hover:scale-[1.03] transition-transform"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- MARKETPLACE SECTION --- */}
      <section id="projects" className="p-8 sm:p-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Explore Projects
        </h2>

        <div className="flex justify-center mb-6 gap-4">
          <input
            type="text"
            placeholder="Search projects..."
            className="border p-2 rounded-lg w-1/3 text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
         <select
  className="border-2 border-gray-400 dark:border-gray-600 p-2 rounded-lg text-black bg-white dark:bg-gray-800 outline-1 outline-black"
  value={filterCategory}
  onChange={(e) => setFilterCategory(e.target.value)}
>
  {CATEGORIES.map((cat) => (
    <option key={cat}>{cat}</option>
  ))}
</select>



        </div>
{/* PROJECT GRID  */}


<div className="overflow-hidden w-full py-6">
  <div className="flex gap-8 animate-[moveLeft_15s_linear_infinite]">
    {filteredProjects.concat(filteredProjects).map((p, i) => (
      <div
        key={i}
        className="bg-white border border-gray-200 dark:border-gray-700 p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] flex flex-col group min-w-[360px] max-w-[520px] h-[420px] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 dark:from-blue-900/10 dark:to-purple-900/10 pointer-events-none"></div>
        
        {/* Title and Badge */}
        <div className="flex items-start justify-between mb-3 relative z-10">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {p.title}
          </h3>
          <div className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
            New
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 pt-2 text-sm  
           flex-grow line-clamp-3 overflow-hidden leading-relaxed relative  z-10 ">
          {p.description}
        </p>

        {/* Client and Budget */}
        <div className="flex items-center justify-between mb-3 mt-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-400 px-2 py-1 rounded-lg">
              Client:
            </span>
            <span className="text-sm text-gray-900 dark:text-gray-100 font-bold">{p.client}</span>
          </div>
          <span className="text-base font-extrabold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-3 py-1 rounded-lg">
            ₹{p.budget}
          </span>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-3 relative z-10">
          {p.skills.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-700 dark:to-pink-700 text-purple-800 dark:text-white border border-purple-200 dark:border-purple-600 rounded-full text-xs font-bold hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-600 dark:hover:to-pink-500 transition-all duration-300 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700 relative z-10">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            Posted {timeAgo(p.posted)}
          </p>
          <button onClick={()=> setActivePage("projectList")} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white rounded-lg text-sm font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
            Apply Now
          </button>
        
        </div>
      </div>
    ))}
  </div>

  <style>{`
    @keyframes moveLeft {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `}</style>
</div>

{<NewsLetter/>}

      </section>

      {/* --- FOOTER --- */}
      <div
      className="bg-black p-8 sm:p-16 text-center text-gray-100 py-10 mt-20 border-t border-gray-800"
      >
        <Footer/>
      </div>

    </div>
      
    </div>
  );
};

export default HomePage;
