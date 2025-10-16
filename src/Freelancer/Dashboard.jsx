import React from "react";
import { ArrowRight, TrendingUp, Clock, Star, Briefcase, FileText, User, Award, AlertTriangle, CheckCircle, Calendar } from "lucide-react";

const Dashboard = ({ onBack }) => {
  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto min-h-screen font-sans bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="mb-8 border-b pb-4 border-purple-200">
        <button 
          onClick={onBack} 
          className='flex items-center text-purple-700 hover:text-purple-900 mb-6 group transition-colors'
        >
          <ArrowRight className='w-5 h-5 rotate-180 mr-2 group-hover:-translate-x-1 transition-transform'/>Back to Home
        </button>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold flex items-center text-gray-800">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mr-3">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            Freelancer Dashboard
          </h1>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white">
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>
        <p className="mt-1 text-gray-600">
          Welcome back, <strong className="text-purple-700">Freelancer User</strong>. Manage your projects and view your performance.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <main className="lg:col-span-2 space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-5 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-purple-100 mb-1">Total Earnings</p>
                  <p className="text-3xl font-bold text-white">₹12,450</p>
                </div>
                <div className="bg-white/20 p-2 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-xs text-green-300 flex items-center mt-2">
                <CheckCircle className="w-4 h-4 mr-1" />
                +8% last month
              </span>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-5 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-pink-100 mb-1">Active Projects</p>
                  <p className="text-3xl font-bold text-white">3</p>
                </div>
                <div className="bg-white/20 p-2 rounded-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-xs text-pink-100 mt-2">2 awaiting feedback</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-5 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-blue-100 mb-1">Average Rating</p>
                  <p className="text-3xl font-bold text-white flex items-center">
                    4.9
                    <Star className="w-5 h-5 ml-1 text-yellow-300 fill-current" />
                  </p>
                </div>
                <div className="bg-white/20 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-xs text-blue-100 mt-2">Based on 15 reviews</p>
            </div>
          </div>

          {/* Active Projects Section */}
          <section className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
            <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-purple-600" />
              Your Active Projects
            </h2>

            <ul className="space-y-4">
              <li className="p-4 border border-purple-100 rounded-xl hover:shadow-md transition-shadow bg-gradient-to-r from-purple-50 to-indigo-50">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-lg text-gray-800">E-commerce API Integration</p>
                    <p className="text-sm text-gray-600">Client: Retail Giant Corp.</p>
                  </div>
                  <span className="px-3 py-1 text-sm font-bold rounded-full bg-purple-600 text-white">
                    In Progress
                  </span>
                </div>
                <div className="mt-2 flex justify-between text-sm text-gray-600">
                  <span>₹5,500 Budget</span>
                  <span>Due: 15 Oct 2025</span>
                </div>
              </li>

              <li className="p-4 border border-purple-100 rounded-xl hover:shadow-md transition-shadow bg-gradient-to-r from-pink-50 to-rose-50">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-lg text-gray-800">Brand Identity Redesign</p>
                    <p className="text-sm text-gray-600">Client: Coffee Roasters Inc.</p>
                  </div>
                  <span className="px-3 py-1 text-sm font-bold rounded-full bg-yellow-500 text-white">
                    Awaiting Review
                  </span>
                </div>
                <div className="mt-2 flex justify-between text-sm text-gray-600">
                  <span>₹800 Budget</span>
                  <span>Submitted: 29 Sep 2025</span>
                </div>
              </li>
            </ul>

            <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg">
              View All Projects
            </button>
          </section>

          {/* Recent Proposals Section */}
          <section className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
            <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-purple-600" />
              Recent Proposals
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 border-b border-purple-100 last:border-b-0 hover:bg-purple-50 rounded-lg transition-colors">
                <span className="text-gray-800 font-medium">UX Audit for Mobile App</span>
                <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                  Submitted 1 day ago
                </span>
              </div>
              <div className="flex justify-between items-center p-3 border-b border-purple-100 last:border-b-0 hover:bg-purple-50 rounded-lg transition-colors">
                <span className="text-gray-800 font-medium">Python Script Automation</span>
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  Client Viewed
                </span>
              </div>
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          {/* Profile Status */}
          <section className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Profile Status</h2>
            <p className="text-sm text-gray-600 mb-2">
              Completion: <span className="font-bold text-purple-600">85%</span>
            </p>

            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                style={{ width: "85%" }}
              ></div>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              You're close! Adding a portfolio link will reach 100%.
            </p>

            <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg">
              Update Profile
            </button>
          </section>

          {/* Your Top Skills */}
          <section className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Your Top Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind CSS", "Node.js", "UX Design", "MongoDB", "JavaScript", "Python"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 rounded-full font-medium border border-purple-200"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </section>

          {/* Alerts */}
          <section className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Alerts</h2>
            <div className="space-y-3">
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-start">
                <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold">Urgent:</span> Payment due for project #105 is delayed.
                </div>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-sm flex items-start">
                <Calendar className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <div>New message from Client: Retail Giant Corp.</div>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;