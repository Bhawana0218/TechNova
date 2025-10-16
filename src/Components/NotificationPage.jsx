import React, { useState } from 'react';
import { Bell, Mail, MessageSquare, FileText, Check, X, Filter, Search, Calendar, User, Award, ArrowRight,  DollarSign, IndianRupee } from 'lucide-react';

const NotificationPage = ({ onBack }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'message',
      title: 'New Message from Client',
      description: 'Saurabh Jen sent you a message about your proposal',
      time: '2 minutes ago',
      read: false,
      client: 'Saurabh Jen',
    },
    {
      id: 2,
      type: 'proposal',
      title: 'Proposal Accepted',
      description: 'Your proposal for "Website Redesign" has been accepted',
      time: '1 hour ago',
      read: false,
      client: 'Sarah Khan',
    },
    {
      id: 3,
      type: 'update',
      title: 'Project Update',
      description: 'The "Mobile App Development" project has been updated',
      time: '3 hours ago',
      read: true,
      client: 'Tech Solutions Inc',
    },
    {
      id: 4,
      type: 'message',
      title: 'New Message from Client',
      description: 'Mike Wilson wants to discuss the timeline for your project',
      time: '5 hours ago',
      read: true,
      client: 'Mike Wilson',
    },
    {
      id: 5,
      type: 'milestone',
      title: 'Milestone Completed',
      description: 'You completed a milestone for "E-commerce Platform"',
      time: '1 day ago',
      read: true,
      client: 'E-commerce Co',
    },
    {
      id: 6,
      type: 'payment',
      title: 'Payment Received',
      description: 'Payment of ₹35000 for "Logo Design" project received',
      time: '2 days ago',
      read: true,
      client: 'Creative Agency',
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const filteredNotifications = notifications.filter(notification => {
    const matchesFilter = filter === 'all' || notification.type === filter;
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type) => {
    switch(type) {
      case 'message': return <MessageSquare className="w-5 h-5 text-blue-500" />;
      case 'proposal': return <FileText className="w-5 h-5 text-green-500" />;
      case 'update': return <Bell className="w-5 h-5 text-purple-500" />;
      case 'milestone': return <Award className="w-5 h-5 text-yellow-500" />;
      case 'payment': return <IndianRupee className="w-5 h-5 text-teal-500" />;
      default: return <Mail className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'message': return 'bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500';
      case 'proposal': return 'bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500';
      case 'update': return 'bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500';
      case 'milestone': return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500';
      case 'payment': return 'bg-gradient-to-r from-teal-50 to-teal-100 border-l-4 border-teal-500';
      default: return 'bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-gray-500';
    }
  };

  const getTypeGradient = (type) => {
    switch(type) {
      case 'message': return 'from-blue-500 to-blue-600';
      case 'proposal': return 'from-green-500 to-green-600';
      case 'update': return 'from-purple-500 to-purple-600';
      case 'milestone': return 'from-yellow-500 to-yellow-600';
      case 'payment': return 'from-teal-500 to-teal-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-10"></div>
        <div className="relative">
          
          
          <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <button onClick={onBack}
             className='flex items-center text-blue-900 hover:text-blue-700 mb-8 group ml-4 mt-4'
          >
            <ArrowRight className='w-5 h-5 rotate-180 mr-2 group-hover:-translate-x-1 transition-transform'/>
            Back to Home
          </button>
              <div className="flex items-center justify-between">
             
                <div className="flex items-center space-x-4">
            
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${getTypeGradient('message')} flex items-center justify-center shadow-lg`}>
                      <Bell className="w-8 h-8 text-white" />
                    </div>
                    {unreadCount > 0 && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg">
                        {unreadCount}
                      </div>
                    )}
                  </div>
               
                  <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      Notifications
                    </h1>
                    <p className="text-gray-600 mt-1 text-lg">Stay updated with your freelance activities</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={markAllAsRead}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Check className="w-4 h-4" />
                    <span>Mark All Read</span>
                  </button>
                  
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search notifications..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 shadow-sm transition-all duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total</p>
                <p className="text-3xl font-bold">{notifications.length}</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl">
                <Bell className="w-6 h-6" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Unread</p>
                <p className="text-3xl font-bold">{unreadCount}</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl">
                <MessageSquare className="w-6 h-6" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Messages</p>
                <p className="text-3xl font-bold">
                  {notifications.filter(n => n.type === 'message').length}
                </p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-teal-100 text-sm font-medium">Proposals</p>
                <p className="text-3xl font-bold">
                  {notifications.filter(n => n.type === 'proposal').length}
                </p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl">
                <FileText className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 mb-6 overflow-hidden">
          <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-semibold text-gray-700">Filter by type:</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex flex-wrap gap-3">
              {[
                { key: 'all', label: 'All', count: notifications.length, icon: Bell },
                { key: 'message', label: 'Messages', count: notifications.filter(n => n.type === 'message').length, icon: MessageSquare },
                { key: 'proposal', label: 'Proposals', count: notifications.filter(n => n.type === 'proposal').length, icon: FileText },
                { key: 'update', label: 'Updates', count: notifications.filter(n => n.type === 'update').length, icon: Bell },
                { key: 'milestone', label: 'Milestones', count: notifications.filter(n => n.type === 'milestone').length, icon: Award },
                { key: 'payment', label: 'Payments', count: notifications.filter(n => n.type === 'payment').length, icon: IndianRupee }
              ].map(({ key, label, count, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center space-x-2 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
                    filter === key
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    filter === key ? 'bg-white/20' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-16 text-center">
              <div className="mx-auto w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-6">
                <Bell className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No notifications found</h3>
              <p className="text-gray-600 text-lg">You don't have any notifications matching your current filters.</p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`bg-white rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
                  !notification.read ? 'ring-2 ring-blue-200 border-blue-300' : 'border-gray-200'
                } ${getTypeColor(notification.type)}`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-5 flex-1">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm">
                          {getIcon(notification.type)}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className={`text-xl font-bold ${
                            !notification.read ? 'text-gray-900' : 'text-gray-700'
                          }`}>
                            {notification.title}
                          </h3>
                          {!notification.read && (
                            <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></span>
                          )}
                        </div>
                        <p className="text-gray-700 mb-3 text-lg leading-relaxed">{notification.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span className="font-medium">{notification.client}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{notification.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 ml-6">
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className={`p-3 rounded-xl transition-all duration-200 ${
                          notification.read
                            ? 'text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200'
                            : 'text-blue-600 hover:text-blue-800 bg-blue-100 hover:bg-blue-200'
                        }`}
                        title="Mark as read"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-3 rounded-xl text-gray-400 hover:text-red-600 bg-gray-100 hover:bg-red-100 transition-colors duration-200"
                        title="Delete notification"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;