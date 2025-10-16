import Recat , { useState } from 'react';
import { Paperclip, Upload, X } from 'lucide-react';
const Proposal= ({ setShowProposal, currentProject })=>{
    const [attachments, setAttachments] = useState([]);
    const [ proposal, setProposal ] = useState({coverLetter:'', hourRate: '', availability: '', attahements: []});
    const handleSubmit = (e) =>{
       e.preventDefault();
       alert("Your Proposal hasve been Submitted Successfully.");
       setShowProposal(false);
       setProposal({ coverLetter:'', hourRate:'', availability: '', attahements: []});
       setAttachments([]);
    }
    const handleFileChange = (e)=>{
        const files = Array.from(e.target.value);
        setAttachments(prev => [...prev, ...files]);
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full h-[90vh] overflow-hidden shadow-2xl">
                <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">Submit Proposal</h2>
                        <button className="text-white hover:text-gray-200" onClick= {() => setShowProposal(false)}>
                            <X className='w-6 h-6'/>
                        </button>
                    </div>
                    <p className='text-blue-100 mt-2'>Apply for : {currentProject.title}</p>
                </div>
                <form action="" onSubmit = {handleSubmit} className='p-6 h-[calc(100%-120px)] overflow-y-auto'>
                    <div className='mb-6'>
                        <label htmlFor="letter" className='block text-sm font-medium text-gray-700 mb-2'>Cover Letter</label>
                        <textarea name="letter" id="letter" value={proposal.coverLetter} onChange={(e)=> setProposal({...proposal, coverLetter: e.target.value})}  className='w-full p-4 border boredr-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[150px]' placeholder="Tell the client why you're the best fit for this project...." required/>
                    </div>
                    <div className='grid grid-col-1 md:grid-col-2 gap-6 mb-6'>
                        <div>
                            <label htmlFor="hour" className='block text-sm font-medium text-gray-700 mb-2'>Hourly Rate</label>
                            <input type="number" id="hour" min="20" max="70" value={proposal.hourRate} onChange={(e) => setProposal({...proposal, hourRate:e.target.value})}  className='w-full p-4 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' placeholder='23' required/>
                        </div>
                        <div>
                            <label htmlFor="avilable" className='block text-sm font-medium text-gray-700 mb-2'>Availability</label>
                            <select id="available" value={proposal.availability} onChange={(e) =>setProposal({...proposal,availability:e.target.value})} className='w-full p-4 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' required>
                                <option value="">Select Availability</option>
                                <option value="immediate">Immediate</option>
                                <option value="1-2 weeks">1-2 Weeks</option>
                                <option value="2-4 weeks">2-4 Weeks</option>
                                <option value="1+ month">1+ Month</option>
                            </select>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="file" className='block text-sm font-medium text-gray-700 mb-2'>Attachments</label>
                        <div className='border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors'>
                            <Upload className='w-12 h-12 text-gray-400 mx-auto mb-4'/>
                            <p className='text-gray-600 mb-2'>Click and Drop file here or click to browser</p>
                            
                            <input type="file" multiple onChange={handleFileChange} className='hidden' id='file-upload' />
                            <label htmlFor='file-upload' className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors'>
                                <Paperclip className='w-4 h-4 mr-2'/>Browse Files
                            </label>
                            {attachments.length > 0 && (
                                <div className='mt-4'>
                                    <p className='text-sm text-gray-600'>Selected files:</p>
                                    <ul className='mt-2'>
                                        {attachments.map((file,index)=>(
                                            <li key={index} className='text-sm text-gray-700 truncate'>{file.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                         </div>
                    </div>
                    <div className='flex justify-end space-x-4 mt-8'>
                        <button type='button' onClick={()=>(setShowProposal(false))} className='px-6 py-3 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors'>Cancel</button>
                        <button type="submit" className='px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl'>Submit Proposal</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Proposal;
