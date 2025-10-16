import { FileText } from 'lucide-react';
import React , { useState } from 'react';
const NewProjectform = ({ projects, setProjects, setShowForm }) =>{
     const [ formData, setFormData ] = useState({ title:'', description: '', deadline: '', budget:''});
      const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
      const handleSubmit = (e)=>{
        e.preventDefault();
        const newProjects= {
            id: projects.length +1,
            ...formData,
            status: 'in-progress',
            progress:5,
            team: 1,
            files: 0,
            messages: 0,
        };
        setProjects([...projects, newProjects]);
        setFormData({title:'', description: '', deadline: '', budget: ''});
        setShowForm(false);
     };
    return (
        <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-6 boredr border-white/20 transform animate-pulse'>
            <h3 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'><FileText className='w-6 h-6 text-blue-600'/>Create New Project</h3>
            <form action="" onSubmit={handleSubmit} className='space-y-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Project Title</label>
                        <input type="text" name='title' placeholder='Enter project title' value={formData.title} onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200' required/>
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Budget(₹)</label>
                        <input type="number" name='budget' placeholder='Enter budget' value={formData.budget} onChange={handleInputChange} required
                        className='w-full px-4 py-3 boredr border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'/>
                    </div>
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Description</label>
                    <textarea name="description" placeholder='Enter project description' value={formData.description} onChange={handleInputChange} rows='3' required
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'></textarea>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Deadline</label>
                        <input type="date" name='deadline' value={formData.deadline} onChange={handleInputChange} required 
                        className='w-full px-4 py-3 border border-gray-300 rounded-cl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'/>
                    </div>
                    <div className='flex gap-2 pt-6'>
                        <button type='submit' className='flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl'>Create Project</button>
                        <button type='button' onClick={()=> setShowForm(false) } className='flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl font-medium hover:bg-gray-300 transition-all duration-200 '>Cancel</button>
                        </div>
                </div>
            </form>

        </div>
    );
}
export default NewProjectform;