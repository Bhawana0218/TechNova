
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import '../style.css';
const Profile = ({onBack}) => {
  return (
    <div className={` 
     min-h-screen font-sans transition-colors duration-500`}>

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


      <div id="app" className="p-4 sm:p-8 max-w-7xl mx-auto">
         <button onClick={onBack} className='flex items-center text-blue-900 hover:text-blue-700 mb-6 group'>
                        <ArrowRight className='w-5 h-5 rotate-180 mr-2 group-hover:-translate-x-1 transition-transform'/>Back to Home
                    </button>
        {/* Header */}
        <header
          className="mb-8 border-b pb-4 transition-colors duration-500"
          id="main-header"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold flex items-center text-[var(--color-text-primary)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-3 text-[var(--color-accent)]"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="14" r="8" />
              </svg>
              Freelancer Profile
            </h1>
          </div>
          <p className="mt-1 text-gray-600">
            Detailed portfolio, skills, and project history for{" "}
            <strong>Jane Doe</strong>.
          </p>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8 h-fit sticky top-4">
            {/* Profile Card */}
            <section className="bg-[var(--color-bg-secondary)] p-6 rounded-xl shadow-lg border border-[var(--color-border)] text-center">
              <img
                src="https://placehold.co/120x120/657de6/ffffff?text=JD"
                alt="Jane Doe Profile"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[var(--color-accent)] object-cover shadow-xl"
              />
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
                Jane Doe
              </h2>
              <p className="text-md text-[var(--color-accent)] font-medium mb-3">
                Senior Web Developer & UI/UX Expert
              </p>
              <div className="flex items-center justify-center space-x-1 text-yellow-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="text-xl font-bold">4.9/5.0</span>
                <span className="text-sm text-[var(--color-text-subtle)]">
                  (28 Reviews)
                </span>
              </div>
              <button className="w-full mt-2 bg-[var(--color-accent)] text-[var(--color-accent-text)] px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-colors duration-200">
                Message Jane
              </button>
            </section>

            {/* Core Skills */}
            <section className="bg-[var(--color-bg-secondary)] p-6 rounded-xl shadow-lg border border-[var(--color-border)]">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-text-primary)]">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Tailwind CSS",
                  "Node.js",
                  "Figma",
                  "MongoDB",
                  "UI/UX",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-[var(--color-tag-bg)] text-[var(--color-tag-text)] rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Stats */}
            <section className="bg-[var(--color-bg-secondary)] p-6 rounded-xl shadow-lg border border-[var(--color-border)]">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-text-primary)]">
                Stats
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between text-[var(--color-text-primary)]">
                  <span className="text-[var(--color-text-subtle)]">
                    Total Projects:
                  </span>
                  <span className="font-bold text-[var(--color-accent)]">15</span>
                </li>
                <li className="flex justify-between text-[var(--color-text-primary)]">
                  <span className="text-[var(--color-text-subtle)]">
                    Success Rate:
                  </span>
                  <span className="font-bold text-green-500">95%</span>
                </li>
                <li className="flex justify-between text-[var(--color-text-primary)]">
                  <span className="text-[var(--color-text-subtle)]">
                    Avg. Project Value:
                  </span>
                  <span className="font-bold">₹2,800</span>
                </li>
              </ul>
            </section>
          </aside>

          {/* Main Section */}
          <main className="lg:col-span-3 space-y-8">
            {/* About Section */}
            <section className="bg-[var(--color-bg-secondary)] p-6 rounded-xl shadow-lg border border-[var(--color-border)]">
              <h2 className="text-2xl font-bold mb-3 text-[var(--color-text-primary)]">
                About Jane
              </h2>
              <p className="text-[var(--color-text-subtle)] leading-relaxed">
                Highly motivated and detail-oriented Senior Web Developer with
                7+ years of experience specializing in the MERN stack and modern
                CSS frameworks like Tailwind. I focus on delivering clean,
                scalable, and highly performant web applications that meet both
                client needs and user expectations. My work includes full-scale
                SaaS platforms, e-commerce integrations, and complex data
                visualization tools.
              </p>
            </section>

            {/* Portfolio */}
            <section className="bg-[var(--color-bg-secondary)] p-6 rounded-xl shadow-lg border border-[var(--color-border)]">
              <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)] flex items-center">
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
                  className="mr-2 text-[var(--color-accent)]"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5.36-5.36a2 2 0 0 0-2.83 0L3 21" />
                </svg>
                Portfolio Showcase
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((num) => (
                  <div
                    key={num}
                    className="border border-[var(--color-border)] rounded-lg overflow-hidden"
                  >
                    <img
                      src={`https://picsum.photos/600/350?random=${num}`}
                      alt={`Project ${num}`}
                      className="w-full object-cover aspect-video"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-[var(--color-text-primary)]">
                        {num === 1
                          ? "SaaS Platform UI Redesign"
                          : "Node.js API Development"}
                      </h3>
                      <p className="text-sm text-[var(--color-text-subtle)]">
                        Role:{" "}
                        {num === 1
                          ? "Lead Frontend Developer (React, TypeScript)"
                          : "Backend Engineer (Node, Express, MongoDB)"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Project History */}
            <section className="bg-[var(--color-bg-secondary)] p-6 rounded-xl shadow-lg border border-[var(--color-border)]">
              <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)] flex items-center">
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
                  className="mr-2 text-[var(--color-accent)]"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                Project History & Reviews
              </h2>

              <div className="space-y-6">
                {[
                  {
                    text: '"Exceptional quality and delivered early."',
                    rating: "5.0",
                    details:
                      "Jane rebuilt our entire marketing site, including a dynamic blog system. Communication was flawless.",
                    client:
                      "Client: HealthTech Start-up (Completed Oct 2025)",
                  },
                  {
                    text: '"Perfect adherence to brand guidelines."',
                    rating: "5.0",
                    details:
                      "Delivered a clean, modern logo and detailed style guide that perfectly captured our vision.",
                    client:
                      "Client: Coffee Roasters Inc. (Completed Sep 2025)",
                  },
                ].map((review, i) => (
                  <div
                    key={i}
                    className="border border-[var(--color-border)] p-4 rounded-lg"
                  >
                    <p className="font-semibold text-lg text-[var(--color-text-primary)] mb-1">
                      {review.text}
                    </p>
                    <div className="flex items-center space-x-1 text-yellow-500 mb-2 text-sm">
                      <span>{review.rating}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <p className="text-[var(--color-text-subtle)] mb-2">
                      {review.details}
                    </p>
                    <p className="text-xs text-[var(--color-accent)] font-medium">
                      {review.client}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
