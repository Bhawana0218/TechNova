import { ArrowRight, BookmarkIcon, Building, Calendar, CheckCircle, FileText, FlagIcon, IndianRupee, MapPinIcon, MessageSquareIcon, Share2Icon, Shield, StarIcon, Tag, ThumbsUpIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { allProjects } from '../Projects.js';
import Proposal from './Proposal.jsx';
import ViewClient from './ViewClient.jsx';
import MessageClient from './MessageClient.jsx';
const ProjectModal = ({ project, onClose }) =>{
    const [currentProject, setCurrentProject] = useState(project);
    const [activeTab, setActiveTab] = useState('overview');
    const [showClientModal, setShowClientModal] = useState(false);
    const [showMessageModal, setShowMessageModal] = useState(false);
    // const [ openDetailPage , setOpenDetailPage ] = useState(true);
    const [showProposalModal, setShowProposalModal] = useState(false);
    const [ saved , setSaved ] = useState(false);
    const [viewed , setViewed ] = useState(0);
    useEffect(() =>{
        const interval = setInterval (() =>{
        setViewed(prev => prev +1 )
        }, 10000);
        return () => clearInterval (interval);
    }, []);
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
    const handleBack = () => {
    if(onClose) onClose();
    };

    const handleShare = () => {
    alert('Link copied to clipboard!');
    };
   const handleReport = () => {
    alert('Reporting project...');
    };
    const handleApply = ()=>{
        setShowProposalModal(true);
    }
    const handleSave = () =>{
        setSaved(!saved);
    }
    const handleViewClient = () =>{
        setShowClientModal(true);
    }
     const handleSendMessage = () => {
        setShowMessageModal(true);
    };

    const handleCloseClientModal = () => {
        setShowClientModal(false);
    };

    const handleCloseMessageModal = () => {
        setShowMessageModal(false);
    };

    const handleSendMessageSubmit = (message) => {
        alert(`Your message has been sent to ${currentProject.clientInfo.name}!`);
    };
    const [similarProjectsPage, setSimilarProjectsPage] = useState(0);
    const similarProjects = allProjects.filter(
    proj =>
         proj.category === currentProject.category && 
    proj.id !== currentProject.id
        );
   
    const projectsPerPage = 4;
    const totalPages = Math.ceil(similarProjects.length / projectsPerPage);
    const currentSimilarProjects = similarProjects.slice(
    similarProjectsPage * projectsPerPage,
    (similarProjectsPage + 1) * projectsPerPage
    ); 
    const handleProjectSelect = (project) =>{
    setCurrentProject(project);
    window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (
        <div className='max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-8'>
            <div className='flex flex-col lg:flex-row gap-8'>
                <div className='flex-1'>
                    <button onClick={handleBack} className='flex items-center text-blue-900 hover:text-blue-700 mb-6 group'>
                        <ArrowRight className='w-5 h-5 rotate-180 mr-2 group-hover:-translate-x-1 transition-transform'/>Back to Projects
                    </button>
                    {/* project */}
                    <div className='bg-gradient-to-l from-blue-200 to-purple-100 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden mb-8 border border-gray-200/50'>
                    <div className='p-8'>
                        <div className='flex justify-between items-start mb-6'>
                            <div>
                                <div className='flex items-center mb-3'>
                                    <span className='bg-gradient-to-r from-blue-300 to-purple-300 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3'>{currentProject.category}</span>
                                    <span className='bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium'>{currentProject.experience}</span>
                                </div>
                                <h1 className='text-3xl font-bold text-gray-900 mb-4'>{currentProject.title}</h1>
                                <div className='flex flex-wrap gap-4 text-gray-700'>
                                    <div className='flex items-center'>
                                        <IndianRupee className='w-5 h-5 mr-2 text-green-600'/>
                                        <span className='font-medium'>{currentProject.budget}</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <MapPinIcon className='w-5 h-5 mr-2 text-blue-600'/>
                                        <span>{currentProject.location}</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Calendar className='w-5 h-5 mr-2 text-orange-600'/>
                                        <span>Deadline: {currentProject.deadline}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col space-y-3'>
                                <button onClick={handleApply} className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                                    <ThumbsUpIcon className='w-5 h-5 mr-2'/> Apply Now</button>
                                    <div className='flex space-x-2'>
                                        <button onClick={handleSave} className={`p-3 rounded-lg font-medium transition-all duration-200 flex items-center ${
                                            saved ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}>
                                            <BookmarkIcon className={`w-5 h-5 ${ saved ? 'fill-current': ''}`}/>
                                        </button>
                                        <button onClick={handleShare} className='p-3 bg-gray-100 tetx-gray-700 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-200 flex items-center'>
                                            <Share2Icon className='w-5 h-5'/>
                                        </button>
                                        <button onClick={handleReport }className='p-3 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg  font-medium transition-colors duration-200 flex items-center'>
                                            <FlagIcon className='w-5 h-5'/>
                                        </button>
                                    </div>
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-2 mb-8'>
                            {currentProject.skills.map((skill, index)=>(
                                <span key={index} className='bg-gradient-to-r from-blue-200 to-purple-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-sm'>
                                    <Tag className='w-4 h-4 mr-2'/>{skill}
                                </span>
                            ))}
                        </div>

                        {/* side bar */}
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
                            <div className='bg-blue-50 p-4 rounded-lg text-center'>
                                <div className='text-2xl font-bold text-blue-600'>{currentProject.proposals}</div>
                                <div className='text-sm text-gray-600'>Proposals</div>
                            </div>
                            <div className='bg-purple-50 p-4 rounded-lg text-center'>
                                <div className='text-2xl font-bold text-purple-600'>{currentProject.rating}</div>
                                <div className='text-sm text-gray-600'>Ratings</div>
                            </div>
                            <div className='bg-green-50 p-4 rounded-lg text-center'>
                                <div className='text-2xl font-bold text-green-600'>{viewed}</div>
                                <div className='text-sm text-gray-600'>Views</div>
                            </div>
                            <div className='bg-orange-50 p-4 rounded-lg text-center'>
                                <div className='text-2xl font-bold text-orange-600'>{currentProject.timeline.filter(t => t.completed).length}/{currentProject.timeline.length}</div>
                                <div className='text-sm text-gray-600'>Completed</div>
                            </div>
                        </div>
                        <div className='border-b border-gray-200 mb-6'>
                            <nav className='flex space-x-8'>{['overview', 'requirements','deliverables','timeline', 'client'].map((tab) =>(
                                <button key={tab} onClick={() => setActiveTab(tab)} className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                                    activeTab === tab ? 'border-blue-500 text-blue-800' : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
                                }`}>{tab}</button>
                            ))}</nav>
                        </div>
                        {/* tab content */}
                        <div className='prose max-x-none'>
                            {activeTab === 'overview' && (
                                <div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-4'>Project Description</h3>
                                    <p className='text-gray-700 leading-relaxed mb-6'>{currentProject.description}</p>
                                    <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6 border border-blue-200'>
                                        <h4 className='font-bold text-gray-900 mb-3 flex items-center'>
                                            <FileText className='w-5 h-5 mr-2 text-blue-600'/>Project Details
                                        </h4>
                                        <div className='grid grid-col-1 md:grid-cols-2 gap-4'>
                                            <div>
                                                <p className='text-sm text-gray-600'>Project Type</p>
                                                <p className='font-medium'>{currentProject.type}</p>
                                            </div>
                                            <div>
                                                <p className='text-sm text-gray-600'>Experience Level</p>
                                                <p className='font-medium'>{currentProject.experience}</p>
                                            </div>
                                            <div>
                                                <p className='text-sm text-gray-600'>Proposals Received</p>
                                                <p className='font-medium'>{currentProject.proposals}</p>
                                            </div>
                                            <div>
                                                <p className='text-sm text-gray-600'>Attachments</p>
                                                <p className='font-medium'>{currentProject.attachments}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'requirements' && (
                                <div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-4'>Project Requirements</h3>
                                    <ul className='space-y-3'>{currentProject.requirements.map((req, index) =>(
                                        <li key={index} className='flex items-start p-4 bg-gray-50 rounded-lg'>
                                            <CheckCircle className='w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0'/>
                                            <span className='text-gray-700'>{req}</span>
                                        </li>
                                    ))}</ul>
                                </div>
                            )}
                            {activeTab === 'deliverables' && (
                                <div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-4'>Deliverables</h3>
                                    <ul className='space-y-3'>
                                        {currentProject.deliverables.map((deliverable, index)=>(
                                            <li className='flex items-start p-4 bg-gray-50 rounded-lg'>
                                                <CheckCircle className='w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0'/>
                                                <span className='text-gray-700'>{deliverable}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {activeTab === 'timeline' && (
                                <div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-4'>Project Timeline</h3>
                                    <div className='space-y-4'>
                                        {currentProject.timeline.map((phase, index) =>(
                                            <div key={index} className='flex items-center p-4 bg-gray-50 rounded-lg'>
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                                                    phase.completed ? 'bg-green-500 text-white ' : 'bg-gray-300 text-gray-600' 
                                                }`}>
                                                    {phase.completed ? '✓' : index + 1}
                                                </div>
                                                <div className=' flex-1 '>
                                                    <h4 className='font-medium'>{phase.phase}</h4>
                                                    <p className='text-sm text-gray-600'>{phase.duration}</p>
                                                </div>
                                                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                    phase.completed ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                                }`}>{phase.completed ? 'Completed': 'Pending'}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {activeTab === 'client' && (
                                <div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-4'>Client Information</h3>
                                    <div className='bg-gradinet-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200'>
                                        <div className='flex items-center mb-4'>
                                            <div className='w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4'>
                                                <Building className='w-8 h-8 text-white'/>
                                            </div>
                                            <div>
                                                <h4 className='font-bold text-lg text-gray-900'>{currentProject.clientInfo.name}</h4>
                                                <div className='flex items-center mt-1'>
                                                    <StarIcon className='w-4 h-4 fill-yellow-400 text-yellow-400 mr-1'/>
                                                    <span className='text-sm font-medium'>{currentProject.clientInfo.rating}</span>
                                                    <span className="text-gray-400 mx-2">•</span>
                                                    <span className='text-sm text-gray-600'>{currentProject.clientInfo.totalProjects} projects</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='text-gray-700 mb-4'>{currentProject.clientInfo.description}</p>
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                            <div>
                                                <p className='text-sm text-gray-600'>Location</p>
                                                <p className='font-medium'>{currentProject.clientInfo.location}</p>
                                            </div>
                                            <div>
                                                <p className='text-sm text-gray-600'>Member since</p>
                                                <p className='font-medium'>{currentProject.clientInfo.joined}</p>
                                            </div>
                                            <div>
                                                <p className='text-sm text-gray-600'>Verification</p>
                                                <p className='font-medium flex items-center'><Shield className='w-4 h-4 text-green-500 mr-1'/>Verified</p>
                                            </div>
                                        </div>

                                        <div className='flex space-x-3 mt-6'>
                                            <button onClick={handleViewClient} className='flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-200'>View Client Profile</button>
                                            <button onClick={ handleSendMessage} className='flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center'>
                                                <MessageSquareIcon className='w-5 h-5 mr-2'/> Message</button>
                                        </div>
                                    </div>
                                 </div>
                               )}
                            </div>
                        </div>
                    </div>

                    {/* similar project */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Similar Projects</h3>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => setSimilarProjectsPage(prev => Math.max(0, prev - 1))}
                    disabled={similarProjectsPage === 0}
                    className="p-2 bg-gray-100 rounded-lg disabled:opacity-50"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-sm text-gray-600">
                    {similarProjectsPage + 1} of {totalPages}
                  </span>
                  <button 
                    onClick={() => setSimilarProjectsPage(prev => Math.min(totalPages - 1, prev + 1))}
                    disabled={similarProjectsPage === totalPages - 1}
                    className="p-2 bg-gray-100 rounded-lg disabled:opacity-50"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="grid gap-6">
                {currentSimilarProjects.map((proj) => (
                  <div 
                    key={proj.id} 
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer hover:bg-gradient-to-br bg-gradient-to-r from-blue-200 to-purple-200"
                    onClick={() => handleProjectSelect(proj)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-gray-900">{proj.title}</h4>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        ₹{proj.budget}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{proj.client}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {proj.skills.map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{proj.posted}</span>
                      <div className="flex items-center">
                        <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{proj.rating}</span>
                        <span className="mx-2">•</span>
                        <span>{proj.proposals} proposals</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>

                {/* sidebar */}
                <div className='lg:w-85 flex-shrink-0'>
                    <div className='bg-blue-50  backdrop-blur-sm rounded-2xl shadow-xl p-4 mt-12 sticky top-8 border border-gray-200/50'>
                    <div className='flex items-center justify-between mb-6'>
                        <h3 className="text-lg font-bold text-gray-900">Project Details</h3>
                        <span className='bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium'>{currentProject.experience}</span>
                    </div>
                    <div className='space-y-4 mb-6'>
                        <div className='flex items-center justify-between'>
                            <span className='text-gray-600'>Budge</span>
                            <span className='font-medium'>{currentProject.budget}</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span className='text-gray-600'>Posted</span>
                            <span className="font-medium">{currentProject.posted}</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span className='text-gray-600'>Deadline</span>
                            <span className="font-medium">{currentProject.deadline}</span>
                        </div>
                    </div>

                    <div className='border-t border-gray-200 pt-6 mb-6'>
                         <h4 className="font-bold text-gray-900 mb-4">Client Info</h4>
                         <div className='flex items-center mb-3'>
                            <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-3'>
                                <Building className='w-5 h-5 text-white'/>
                            </div>
                            <div>
                                <p className="font-medium">{currentProject.clientInfo.name}</p>
                                <div className='flex items-center'>
                                    <StarIcon className='w-4 h-4 fill-yellow-400 text-yellow-400 mr-1'/>
                                    <span className='text-sm'>{currentProject.clientInfo.rating}</span>
                                </div>
                            </div>
                         </div>
                         <p className="text-sm text-gray-600">{currentProject.clientInfo.location}</p>
                    </div>
                    <button onClick={handleApply} className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-200 mb-3 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                        <ThumbsUpIcon className="w-5 h-5 mr-2" />Apply Now
                    </button>
                    <button onClick={handleSendMessage} className='w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded-lg font-medium transition-colors duration-200 mb-3 flex items-center justify-center'>
                       <MessageSquareIcon className="w-5 h-5 mr-2" />Message Client</button>
                       <button  onClick={handleSave} className={`w-full py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${
                  saved ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}><BookmarkIcon className={`w-5 h-5 mr-2 ${saved ? 'fill-current' : ''}`} />{saved ? 'Saved to Favorites' : 'Save Project'}</button>
                    </div>
                </div>
            </div>
            {showProposalModal && <Proposal setShowProposal={setShowProposalModal} 
      currentProject={currentProject}/>}
      {showClientModal && (
                <ViewClient 
                    client={currentProject.clientInfo} 
                    onClose={handleCloseClientModal}
                    clientName={currentProject.clientInfo.name}
                    
                />
            )}
             {showMessageModal && (
                <MessageClient 
                    clientName={currentProject.clientInfo.name}
                    onClose={handleCloseMessageModal}
                    onSendMessage={handleSendMessageSubmit}
                />
            )}
        </div>
    );
}
export default ProjectModal;