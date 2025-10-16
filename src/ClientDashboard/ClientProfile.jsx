import { User, Briefcase, Calendar, Users, FileText, MessageCircle, CheckCircle, AlertCircle, Edit, Award, Star, TrendingUp, IndianRupee, X, Activity, BarChart3, Globe, MapPin, Building, Phone, Mail, Search, UserRound, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

const ClientProfile = ({ onBack }) => {
  const [projects, setProjects] = useState([
    { id: 1, title: 'E-commerce Platform', description: 'Full-stack e-commerce solution with payment integration', deadline: '2025-10-17', budget: '45000', status: 'completed', progress: 100, team: 3, files: 12, messages: 8 },
    { id: 2, title: 'Mobile App Development', description: 'Cross-platform mobile application for customer engagement', deadline: '2025-11-12', budget: '32000', status: 'in-progress', progress: 65, team: 2, files: 7, messages: 15 },
    { id: 3, title: 'Data Analytics Dashboard', description: 'Real-time analytics dashboard for business intelligence', deadline: '2025-10-28', budget: '28000', status: 'in-progress', progress: 30, team: 4, files: 5, messages: 6 },
    { id: 4, title: 'AI Chatbot Integration', description: 'AI-powered customer support chatbot', deadline: '2025-10-22', budget: '35000', status: 'pending', progress: 5, team: 2, files: 2, messages: 3 }
  ]);
  
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [isContacting, setIsContacting] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showSendMessage, setShowSendMessage] = useState(false);
  const [messageContent, setMessageContent] = useState('');
  const [notificationCount, setNotificationCount] = useState(3);

  const [clientData, setClientData] = useState({
    name: 'Tech Innovations Inc.',
    email: 'contact@techinnovations.com',
    phone: '+91 98765 43210',
    company: 'Tech Innovations Inc.',
    location: 'Bangalore, India',
    joinDate: 'March 15, 2024',
    totalProjects: 12,
    completedProjects: 8,
    activeProjects: 4,
    totalSpent: '₹2,850,000',
    rating: 4.8,
    avatar: 'https://placehold.co/120x120/4f46e5/ffffff?text=TI',
    website: 'www.techinnovations.com',
    industry: 'Technology & Software',
    size: '50-200 employees',
    verified: true
  });

  const [formData, setFormData] = useState({...clientData});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = () => {
    setClientData({...formData});
    setIsEditing(false);
  };

  const handleSendMessage = () => {
    if (messageContent.trim()) {
      alert(`Message sent: "${messageContent}"`);
      setMessageContent('');
      setShowSendMessage(false);
      setNotificationCount(prev => prev + 1);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 75) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = [
    { icon: Briefcase, value: clientData.totalProjects, label: 'Total Projects', color: 'from-blue-50 to-cyan-50' },
    { icon: CheckCircle, value: clientData.completedProjects, label: 'Completed', color: 'from-green-50 to-emerald-50' },
    { icon: TrendingUp, value: clientData.activeProjects, label: 'Active', color: 'from-purple-50 to-pink-50' },
    { icon: IndianRupee, value: clientData.totalSpent, label: 'Total Spent', color: 'from-yellow-50 to-orange-50' }
  ];

  const renderOverview = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-blue-500" />
              Project History
            </h2>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-gradient-to-r from-purple-300 to-blue-100 p-4 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status.replace('-', ' ')}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-gray-600">
                      <IndianRupee className="w-4 h-4" />
                      {project.budget}
                    </span>
                    <span className="flex items-center gap-1 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {project.deadline}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{project.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-500" />
            Client Information
          </h2>
          
          <div className="space-y-4">
            {[
              { icon: User, label: 'Name', value: formData.name },
              { icon: Mail, label: 'Email', value: formData.email },
              { icon: Building, label: 'Company', value: formData.company },
              { icon: MapPin, label: 'Location', value: clientData.location },
              { icon: Globe, label: 'Website', value: clientData.website },
              { icon: Phone, label: 'Phone', value: clientData.phone },
              { icon: Calendar, label: 'Member Since', value: clientData.joinDate },
              { icon: Star, label: 'Rating', value: clientData.rating }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{item.label}</p>
                  <p className="font-medium text-gray-800">
                    {item.label === 'Rating' ? (
                      <div className="flex items-center gap-1">
                        <span>{item.value}</span>
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      </div>
                    ) : item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-2xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Quick Stats</h3>
          <div className="space-y-2">
            {[
              { label: 'Total Projects:', value: clientData.totalProjects },
              { label: 'Completed:', value: clientData.completedProjects },
              { label: 'Active:', value: clientData.activeProjects },
              { label: 'Total Spent:', value: clientData.totalSpent }
            ].map((stat, index) => (
              <div key={index} className="flex justify-between">
                <span>{stat.label}</span>
                <span className="font-bold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderPostedProjects = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-200 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-200">
                {project.title}
              </h2>
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                {project.status.replace('-', ' ')}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4 text-sm line-clamp-2 leading-relaxed">
              {project.description}
            </p>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Budget:</span>
                <span className="font-semibold text-green-600">₹{project.budget}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Deadline:</span>
                <span className="font-medium text-gray-800">{project.deadline}</span>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-medium text-gray-600">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="w-4 h-4" />
                {project.team} team
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MessageCircle className="w-4 h-4" />
                {project.messages} messages
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderActivity = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Activity className="w-6 h-6 text-blue-500" />
            Recent Activity
          </h2>
          
          <div className="space-y-4">
            {[
              { action: 'Project Completed', project: 'E-commerce Platform', time: '2 hours ago', icon: CheckCircle, color: 'text-green-500' },
              { action: 'Project Started', project: 'Mobile App Development', time: '1 day ago', icon: TrendingUp, color: 'text-blue-500' },
              { action: 'Payment Received', project: 'Data Analytics Dashboard', time: '2 days ago', icon: IndianRupee, color: 'text-purple-500' },
              { action: 'New Message', project: 'AI Chatbot Integration', time: '3 days ago', icon: MessageCircle, color: 'text-yellow-500' },
              { action: 'Milestone Reached', project: 'E-commerce Platform', time: '1 week ago', icon: Award, color: 'text-orange-500' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-300 rounded-xl">
                <div className={`p-3 rounded-full ${activity.color.replace('text', 'bg')}-100`}>
                  <activity.icon className={`w-5 h-5 ${activity.color}`} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{activity.action}</p>
                  <p className="text-sm text-gray-600">Project: {activity.project}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Activity Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Completed Projects</span>
              <span className="font-semibold text-green-600">8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Active Projects</span>
              <span className="font-semibold text-blue-600">4</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Messages</span>
              <span className="font-semibold text-purple-600">156</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Payments</span>
              <span className="font-semibold text-yellow-600">₹2.85M</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-2xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Engagement Score</h3>
          <div className="text-3xl font-bold mb-2">92%</div>
          <p className="text-sm opacity-90">Highly engaged client with excellent communication</p>
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-blue-500" />
            Analytics Dashboard
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Project Timeline</h3>
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <div key={project.id} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{project.title}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.progress}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Budget Distribution</h3>
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <div key={project.id} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{project.title}</span>
                    <span className="text-sm font-medium">₹{project.budget}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Completion Rate</span>
              <span className="font-semibold text-green-600">83%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Avg. Project Value</span>
              <span className="font-semibold text-blue-600">₹285K</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Response Time</span>
              <span className="font-semibold text-purple-600">2.3 hrs</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Satisfaction</span>
              <span className="font-semibold text-yellow-600">4.8/5</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl shadow-2xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Performance Insights</h3>
          <p className="text-sm opacity-90">Client shows high engagement and consistent project delivery. Excellent for long-term partnerships.</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br  p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
         <button onClick={onBack} className='flex items-center text-blue-900 hover:text-blue-700 mb-6 group'>
                        <ArrowRight className='w-5 h-5 rotate-180 mr-2 group-hover:-translate-x-1 transition-transform'/>Back to Home
                    </button>
        {/* Header */}
         <div className='mb-8 items-center gap-3'>
          <div className='flex items-center gap-3'>
         <UserRound className='w-10 h-10 mb-2'/>
          <h1 className='text-3xl sm:text-4xl font-extrabold flex items-centertext-4xl bg-gradient-to-br from-blue-800 to-pink-800 bg-clip-text mb-2'>Client Profile</h1>
          </div>
          <p className="text-gray-600">
        Welcome to your Client Profile! Here you can manage your information, view active projects, and check recent updates.
      </p>
        </div>
        <hr className='w-full h-5 py-3'/>
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border border-gray-200">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="relative">
              <img
                src={clientData.avatar}
                alt={clientData.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-xl"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                {clientData.verified ? <CheckCircle className="w-4 h-4 text-white" /> : <AlertCircle className="w-4 h-4 text-white" />}
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-b-2 border-blue-300 bg-transparent text-3xl font-bold"
                    />
                  ) : (
                    clientData.name
                  )}
                </h1>
                {clientData.verified && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified
                  </span>
                )}
              </div>
              
              {isEditing ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 bg-transparent text-gray-600"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 bg-transparent text-gray-500 text-sm"
                  />
                </div>
              ) : (
                <>
                  <p className="text-gray-600">{clientData.email}</p>
                  <p className="text-gray-500 text-sm">{clientData.company}</p>
                </>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => {
                  if (isEditing) { handleSaveProfile();

                  } else { setIsEditing(true); }
                }}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Edit className="w-5 h-5" />
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
              <button 
                onClick={() => setIsContacting(!isContacting)}
                className="flex items-center gap-2 bg-white border-2 border-blue-500  px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 relative"
              >
                <MessageCircle className="w-5 h-5" />
                Contact
                {notificationCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-black text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {stats.map((stat, index) => (
              <div key={index} className={`bg-gradient-to-r ${stat.color} p-4 rounded-2xl border border-gray-200`}>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-500 text-white rounded-xl">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { id: 'overview', label: 'Overview', icon: TrendingUp },
            { id: 'posted', label: 'Posted Projects', icon: FileText },
            { id: 'activity', label: 'Activity', icon: Activity },
            { id: 'analytics', label: 'Analytics', icon: BarChart3 }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'posted' && renderPostedProjects()}
        {activeTab === 'activity' && renderActivity()}
        {activeTab === 'analytics' && renderAnalytics()}

        {/* Contact Modal */}
        {isContacting && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
              <div className="flex justify-between bg-gradient-to-b from-blue-200 via-white to-purple-200 rounded-md items-center mb-4">
                <h3 className="text-xl font-bold  text-gray-800">Contact Client</h3>
                <button 
                  onClick={() => setIsContacting(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span>{clientData.email}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span>{clientData.phone}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Globe className="w-5 h-5 text-blue-500" />
                  <span>{clientData.website}</span>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  setIsContacting(false);
                  setShowSendMessage(true);
                }}
                className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </div>
        )}

        {/* Send Message Modal */}
        {showSendMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
              <div className="flex justify-between bg-gradient-to-b from-blue-200 py-2 pl-3 rounded-xl to-purple-200 items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Send Message</h3>
                <button 
                  onClick={() => setShowSendMessage(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <textarea
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
                placeholder="Type your message here..."
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
              
              <div className="flex gap-3 mt-4">
                <button 
                  onClick={() => setShowSendMessage(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl font-medium hover:bg-gray-300 transition-all duration-200"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSendMessage}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientProfile;