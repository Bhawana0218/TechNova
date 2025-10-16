 import React from 'react';
 import { Calendar, Edit, Eye, IndianRupee, MessageSquare, Upload, Users, X } from 'lucide-react';
 const ProjectGrid = ({projects, deleteProject, openProject, startEditing , getStatusColor , getStatusIcon }) =>{
    return (

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-1" >
                 
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)}
                    {project.status.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                
                {/* progress bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-600">{project.budget}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-600">{project.deadline}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">{project.team} members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Upload className="w-4 h-4 text-yellow-600" />
                    <span className="text-gray-600">{project.files} files</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-pink-600" />
                    <span className="text-gray-600">{project.messages} messages</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => openProject(project)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>
                  <button 
                    onClick={() => startEditing(project)}
                    className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 px-4 rounded-xl text-sm font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
     )
 };

export default ProjectGrid;