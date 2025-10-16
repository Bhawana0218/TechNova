import { Save, X } from 'lucide-react';
import React from 'react'
const ViewEdit = ({
  selectedProject, closeProject, updateProjectStatus, getStatusColor, startEditing, editingProject, formData, handleInputChange, saveEdit, setEditingProject
}) => {
//   if (!selectedProject) return null;
    return (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn'>
            {/* view Modal */}
            <div className='bg-gradient-to-b from-blue-300 to-pink-200 rounded-2xl shadow-2xl max-w-md w-full p-6 transform animate-slideUp'>
                <div className=' flex justify-between items-center bg-gradient-to-t from-pink-200 to-white pl-4 rounded-xl mb-4'>
                    <h3 className='w-full h-8  text-xl font-bold text-gray-800 rounded-sm'>{selectedProject.title}</h3>
                    <button onClick={closeProject} className='text-gray-400 hover:text-gray-600 transition-colors duration-200 rounded-full'>
                        <X className='w-7 h-7'/>
                    </button>
                </div>
                <p className='text-gray-600 mb-4'>{selectedProject.description}</p>
                <div className='space-y-3 mb-6'>
                    <div className='flex justify-between'>
                        <span className='text-gray-600'>Status:</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getStatusColor(selectedProject.status)}`}>
                            {selectedProject.status.replace('-','').toUpperCase()}
                        </span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-gray-600'>Budget:</span>
                        <span className='font-medium text-gray-800'>{selectedProject.budget}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-gray-600'>Deadline:</span>
                        <span className='font-medium text-gray-800'>{selectedProject.deadline}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-gray-600'>Team Size:</span>
                        <span className='font-medium text-gray-800'>{selectedProject.team} members</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-gray-600'>Files:</span>
                        <span className='font-medium text-gray-800'>{selectedProject.files}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-gray-600'>Messages:</span>
                        <span className='font-medium text-gray-800'>{selectedProject.messages}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-gray-600'>Progress:</span>
                        <span className='font-medium text-gray-800'>{selectedProject.progress}</span>
                    </div>
                </div>

                <div className='mb-4'>
                    <div className='flex justify-between text-sm text-gray-600 mb-1'>
                        <span>Progress</span>
                        <span>{selectedProject.progress}%</span>
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-3'>
                        <div className='bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-300' style={{width: `${ selectedProject.progress}%`}}></div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-2 mb-4'>
                    
                         <button onClick={() => updateProjectStatus(selectedProject.id, 'completed')} className={`py-2 px-4 rounded-lg font-medium transition-all duration-200
                         ${selectedProject.status === 'completed' ? 'bg-green-500 text-white': 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                            Complted</button>
                         <button onClick={() => updateProjectStatus(selectedProject.id, 'in-progress')} className={`py-2 px-4 rounded-lg font-medium transition-all duration-200
                         ${selectedProject.status === 'in-progress' ? 'bg-blue-500 text-white': 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                           In Progress</button>
                            <button onClick={() => updateProjectStatus(selectedProject.id, 'pending')} className={`py-2 px-4 rounded-lg font-medium transition-all duration-200
                         ${selectedProject.status === 'pending' ? 'bg-yellow-500 text-white': 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                            Pending</button>
                         <button onClick={() => startEditing(selectedProject)} className='bg-gradient-to-r from-gray-600 to-gray-700 text-white py-2 px-4 rounded-lg font-mediu, hover:from-gray-700 hover:to-gray-800 transition-all duration-200'>
                            Edit</button>
                        <button onClick={closeProject} className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl'>
                            Close
                        </button>
                </div>
            </div>

            {/* Editing Modal */}
            {editingProject && (
                <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn'>
                    <div className='bg-gradient-to-b from-blue-300 to-pink-200 rounded-2xl shadow-2xl max-w-md w-full p-6 transform animate-slideUp'>
                        <div className='w-full h-8 bg-gradient-to-t from-pink-200 to-white pl-4 flex rounded-xl justify-between items-center mb-4'>
                            <h3 className='text-xl py-4 font-bold text-gray-800'>Edit Project</h3>
                            <button onClick={closeProject} className='text-gray-400 hover:text-gray-600 transition-colors duration-200'>
                                <X className='w-6 h-6'/>
                            </button>
                        </div>
                        <form onSubmit={saveEdit} className='space-y-4'>
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>Project Title</label>
                                <input type="text" name='title' value={formData.title} onChange={handleInputChange} className='w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200' required />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>Budget(₹)</label>
                                <input type="text" name='budget' value={formData.budget} onChange={handleInputChange} required
                                className='w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus-ring-blue-500 focus:border-transparent transition-all duration-200' />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>Description</label>
                                <textarea name="description" value={formData.description} onChange={handleInputChange} rows='3' required
                                className='w-full px-4 py-3 border border-gray-600 rounded-xl focus:right-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'></textarea>
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>Deadline</label>
                                <input type="text" name='deadline' value={formData.deadline} onChange={handleInputChange} required
                                className='w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200' />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>Progress(%)</label>
                                <input type="number" min='0' max='100' value={editingProject.progress} onChange={(e) =>{
                                    const progress = Math.min(100, Math.max(0, parseInt(e.target.value) || 0))
                                    setEditingProject({...editingProject, progress})
                                }}  className='w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'/>
                            </div>
                            <div className='flex gap-2'>
                                <button type='submit' className='flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl'>
                                    <Save className='w-4 h-4 inline mr-2'/>Save Changes
                                </button>
                                <button type="button" onClick={closeProject} className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl font-medium hover:bg-gray-300 transition-all duration-200" >
                                    Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            
        </div>
    );
};
export default ViewEdit;