import { AlertCircle, ArrowRight, CheckCircle, Clock, FileText, IndianRupee, Plus, UserRound } from 'lucide-react';
import React, { useState } from 'react';
import NewProjectform from './NewProjectForm';
import ProjectGrid from './ProjectGrid';
import ViewEdit from './ViewEdit';
import {  initProjects } from './initProjects.js';
const Client = ({onBack}) => {
  const [projects, setProjects] = useState(initProjects);
  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '', deadline: '', budget: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: projects.length + 1,
      ...formData,
      status: 'pending',
      progress: 0,
      team: 1,
      files: 0,
      messages: 0
    };
    setProjects([...projects, newProject]);
    setFormData({ title: '', description: '', deadline: '', budget: '' });
    setShowForm(false);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setEditingProject(null);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setEditingProject(null);
  };
  const startEditing = (project) => {
    setSelectedProject(project);
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      budget: project.budget.replace('₹', ''),
      deadline: project.deadline,
    });
  };

  const saveEdit = (e) => {
    e.preventDefault();
    const updatedProject = {
      ...editingProject,
      title: formData.title,
      description: formData.description,
      budget: `₹${formData.budget}`,
      deadline: formData.deadline,
    };
    setProjects(projects.map(project => project.id === editingProject.id ? updatedProject : project));
    setEditingProject(null);
    setSelectedProject(updatedProject);
    setFormData({ title: '', description: '', budget: '', deadline: '' });
  };

  const updateProjectStatus = (id, status) => {
    let newProgress = 0;
    switch (status) {
      case 'completed':
        newProgress = 100;
        break;
      case 'in-progress':
        newProgress = 60;
        break;
      case 'pending':
        newProgress = 20;
        break;
      default:
        newProgress = 10;
    }
    setProjects(projects.map(project => project.id === id ? { ...project, status, progress: newProgress } : project));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-gradient-to-r from-green-400 to-emerald-500';
      case 'in-progress': return 'bg-gradient-to-r from-blue-400 to-cyan-500';
      case 'pending': return 'bg-gradient-to-r from-yellow-400 to-orange-400';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className='w-5 h-5' />;
      case 'in-progress': return <Clock className='w-5 h-5' />;
      case 'pending': return <AlertCircle className='w-5 h-5' />;
      default: return null;
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-400  to-purple-400 p-6'>
      <div className='max-w-7xl mx-auto'>
          <button onClick={onBack} className='flex items-center text-blue-900 hover:text-blue-700 mb-6 group'>
                        <ArrowRight className='w-5 h-5 rotate-180 mr-2 group-hover:-translate-x-1 transition-transform'/>Back to Home
                    </button>
        <div className='mb-8 items-center gap-3'>
          <div className='flex items-center gap-3'>
         <UserRound className='w-10 h-10 mb-2'/>
          <h1 className='text-3xl sm:text-4xl font-extrabold flex items-centertext-4xl bg-gradient-to-br from-blue-800 to-pink-800 bg-clip-text mb-2'>Client Dashboard</h1>
          </div>
          <p className='text-gray-800 text-lg pt-4'>Manage and review your Projects</p>
        </div>
        <hr className='w-full h-5 py-3'/>
        {/* cards */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
          <div className='bg-gradient-to-r from-blue-50 to bg-purple-50 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 transform hover:scale-105 transition-transform duration-200'>
            <div className='flex items-center'>
              <div className='p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'>
                <FileText className='w-6 h-6' />
              </div>
              <div className='ml-4'>
                <p className='text-md text-gray-600 font-medium'>Total Projects</p>
                <p className='text-2xl font-bold text-gray-800'>{projects.length}</p>
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-r from-green-50 to-teal-50 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 transform hover:scale-105 transition-transform duration-200'>
            <div className='flex items-center'>
              <div className='p-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg'>
                <CheckCircle className='w-6 h-6' />
              </div>
              <div className='ml-4'>
                <p className='text-md text-gray-600 font-medium'>Completed</p>
                <p className='text-2xl font-bold text-gray-800'>{projects.filter(project => project.status === 'completed').length}</p>
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-r from-yellow-50 to-orange-50 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 transform hover:scale-105 transition-transform duration-200'>
            <div className='flex items-center'>
              <div className='p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'>
                <Clock className='w-6 h-6' />
              </div>
              <div className='ml-4'>
                <p className='text-md text-gray-600 font-medium'>In Progress</p>
                <p className='text-2xl font-bold text-gray-800'>{projects.filter(project => project.status === 'in-progress').length}</p>
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-r from-purple-50 to-pink-50 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 transform hover:scale-105 transition-transform duration-200'>
            <div className='flex items-center'>
              <div className='p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'>
                <IndianRupee className='w-6 h-6' />
              </div>
              <div className='ml-4'>
                <p className='text-md text-gray-600 font-medium'>Total Budget</p>
                <p className='text-2xl font-bold text-gray-800'>₹{projects.reduce((sum, proj) => sum + parseInt(proj.budget.replace('₹', '').replace(',', '')), 0)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold text-gray-800'>Your Projects</h2>
          <button onClick={() => setShowForm(!showForm)} className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:translate-y-0.5'>
            <Plus className='w-5 h-5' />New Project
          </button>
        </div>

        {showForm && (<NewProjectform setProjects={setProjects} setShowForm={setShowForm} projects={projects}/>)}

        <ProjectGrid
          projects={projects}
          deleteProject={(id) => setProjects(projects.filter((p) => p.id !== id))}
          openProject={(p) => openProject(p)}
          startEditing={(p) => startEditing(p)}
          getStatusColor={getStatusColor}
          getStatusIcon={getStatusIcon}
        />
      </div>
      {(selectedProject || editingProject) && (
        <ViewEdit
          selectedProject={selectedProject}
          closeProject={closeProject}
          updateProjectStatus={updateProjectStatus}
          getStatusColor={getStatusColor}
          startEditing={startEditing}
          editingProject={editingProject}
          setEditingProject={setEditingProject}
          formData={formData}
          handleInputChange={handleInputChange}
          saveEdit={saveEdit}
        />
      )}
    </div>
  );
};

export default Client;
