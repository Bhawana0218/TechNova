import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, MessageCircle, User, Calendar, MapPin, Phone, Video, MoreVertical, 
  FileText, Paperclip, Camera, Mic, Smile, Send, X, 
} from 'lucide-react';

const MessagesPage = ({ onBack }) => {
  const [activeChat, setActiveChat] = useState({
    id: 1,
    name: 'Saurabh Jen',
    avatar: 'https://placehold.co/40x40/3b82f6/ffffff?text=S',
    lastSeen: 'Online now',
    message: 'Looking forward to working together!'
  });

  const [chats] = useState([
    {
      id: 1,
      name: 'Saurabh Jen',
      avatar: 'https://placehold.co/40x40/3b82f6/ffffff?text=S',
      message: 'Looking forward to working together!',
      time: '2m ago',
      unread: 2
    },
    {
      id: 2,
      name: 'Sarah Khan',
      avatar: 'https://placehold.co/40x40/10b981/ffffff?text=S',
      message: 'Your proposal looks great!',
      time: '1h ago',
      unread: 0
    },
    {
      id: 3,
      name: 'Mike Wilson',
      avatar: 'https://placehold.co/40x40/f59e0b/ffffff?text=M',
      message: 'Can we discuss the timeline?',
      time: '3h ago',
      unread: 1
    },
    {
      id: 4,
      name: 'Tech Solutions Inc',
      avatar: 'https://placehold.co/40x40/8b5cf6/ffffff?text=T',
      message: 'Project update available',
      time: '1d ago',
      unread: 0
    }
  ]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi there! I saw your proposal and I\'m very interested.',
      sender: 'them',
      time: '10:30 AM',
      avatar: 'https://placehold.co/40x40/3b82f6/ffffff?text=S',
      reactions: ['👍']
    },
    {
      id: 2,
      text: 'Hello! Thanks for considering my proposal. What would you like to discuss?',
      sender: 'me',
      time: '10:32 AM',
      avatar: 'https://placehold.co/40x40/6366f1/ffffff?text=ME'
    },
    {
      id: 3,
      text: 'I\'d like to know more about your timeline and budget.',
      sender: 'them',
      time: '10:35 AM',
      avatar: 'https://placehold.co/40x40/3b82f6/ffffff?text=S',
      reactions: []
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const emojis = ['😀', '😂', '😍', '👍', '👎', '❤️', '🔥', '🎉'];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: 'https://placehold.co/40x40/6366f1/ffffff?text=ME',
        reactions: []
      };
      setMessages([...messages, message]);
      setNewMessage('');
      
      // Simulate reply
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          const responses = [
          "That sounds great!",
          "I'll get back to you with more details soon.",
          "Perfect! Let's move forward.",
          "Thanks for the update.",
          "Looking forward to working together."
        ];
          const reply = {
            id: messages.length + 2,
          sender: 'them',
          text: responses[Math.floor(Math.random() * responses.length)],
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          avatar: activeChat.avatar,
          reactions: []
          };
          setMessages(prev => [...prev, reply]);
        }, 2000);
      }, 1000);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const message = {
        id: messages.length + 1,
        text: file.name,
        sender: 'me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: 'https://placehold.co/40x40/6366f1/ffffff?text=ME',
        type: 'file',
        reactions: []
      };
      setMessages([...messages, message]);
      setShowAttachmentMenu(false);
    }
  };

  const simulateCall = () => {
    alert('Call initiated!');
  };

  const simulateSchedule = () => {
    setShowScheduleModal(true);
  };

  const simulateShareLocation = () => {
    setShowLocationModal(true);
  };

  const simulateViewProfile = () => {
    setShowProfileModal(true);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <button onClick={onBack} className='flex items-center text-blue-900 hover:text-blue-700 mb-6 group'>
          <ArrowRight className='w-5 h-5 rotate-180 mr-2 group-hover:-translate-x-1 transition-transform'/>Back to Home
        </button>
        <div className="mb-6 flex flex-col sm:flex-col sm:items-start sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-purple-500 to-pink-500 p-4 rounded-full shadow-lg transform transition-transform hover:scale-110">
              <MessageCircle className="text-white w-8 h-8" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-br from-blue-800 to-pink-800 bg-clip-text text-transparent">
              Messages
            </h1>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Stay connected with clients and freelancers, manage all your conversations in one place.
          </p>
        </div>
        <hr className="border-gray-400 mb-10" />
      </div>
      {showMoreOptions && (
            <div className="absolute right-4 top-58 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-10">
              <button 
                className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100 rounded-md"
                onClick={() => { setShowMoreOptions(false); setShowProfileModal(true); }}
              >
                <User className="w-4 h-4" />
                <span>View Profile</span>
              </button>
              <button 
                className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100 rounded-md"
                onClick={() => { setShowMoreOptions(false); setShowScheduleModal(true); }}
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Call</span>
              </button>
              <button 
                className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100 rounded-md"
                onClick={() => { setShowMoreOptions(false); setShowLocationModal(true); }}
              >
                <MapPin className="w-4 h-4" />
                <span>Share Location</span>
              </button>
            </div>
          )}
        {/* </div> */}
      {/* </div> */}

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-6 h-[600px]">
          {/* Sidebar - Fixed width */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-4 border border-purple-100 h-full">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Chats</h2>
              <div className="space-y-3 overflow-y-auto h-[calc(100%-4rem)]">
                {chats.map((chat) => (
                  <div 
                    key={chat.id}
                    className={`flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all ${
                      activeChat.id === chat.id 
                        ? 'bg-gradient-to-r from-purple-100 to-indigo-100 border-l-4 border-purple-500' 
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveChat({...chat, id: chat.id})}
                  >
                    <div className="relative">
                      <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full" />
                      <div className={`absolute bottom-0 right-0 w-2 h-2 rounded-full border border-white ${
                        activeChat.id === chat.id ? 'bg-green-500' : 'bg-gray-400'
                      }`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-800 truncate">{chat.name}</p>
                        {chat.unread > 0 && (
                          <span className="bg-purple-500 text-white text-xs rounded-full px-2 py-1">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 truncate">{chat.message}</p>
                    </div>
                    <div className="text-xs text-gray-500">{chat.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Area - Takes remaining space */}
          <div className="flex-1 flex flex-col">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-100 flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <h3 className="font-semibold">{activeChat.name}</h3>
                      <p className="text-sm text-purple-200">{activeChat.lastSeen}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      className="p-2 rounded-full hover:bg-purple-500 transition-colors"
                      onClick={simulateCall}
                    >
                      <Phone className="w-5 h-5" />
                    </button>
                    <button 
                      className="p-2 rounded-full hover:bg-purple-500 transition-colors"
                      onClick={simulateCall}
                    >
                      <Video className="w-5 h-5" />
                    </button>
                    <button 
                      className="p-2 rounded-full hover:bg-purple-500 transition-colors"
                      onClick={() => setShowMoreOptions(!showMoreOptions)}
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white to-purple-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${
                      message.sender === 'me' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <img
                        src={message.avatar}
                        alt="Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <div
                        className={`px-4 py-2 rounded-2xl relative ${
                          message.sender === 'me'
                            ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-br-md'
                            : 'bg-gray-100 text-gray-800 rounded-bl-md'
                        }`}
                      >
                        {message.type === 'file' ? (
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4" />
                            <span>{message.text}</span>
                          </div>
                        ) : (
                          <p className="text-sm">{message.text}</p>
                        )}
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === 'me' ? 'text-purple-200' : 'text-gray-500'
                          }`}
                        >
                          {message.time}
                        </p>
                        
                        {/* Reactions - Fixed condition */}
                        {message.reactions && message.reactions.length > 0 && (
                          <div className="flex space-x-1 mt-1">
                            {message.reactions.map((reaction, idx) => (
                              <span key={idx} className="text-xs">{reaction}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-end space-x-2 max-w-xs lg:max-w-md">
                      <img
                        src={activeChat.avatar}
                        alt={activeChat.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-md px-4 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="border-t border-gray-200 p-4 bg-white">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                  <div className="relative">
                    <button
                      type="button"
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600"
                      onClick={() => setShowAttachmentMenu(!showAttachmentMenu)}
                    >
                      <Paperclip className="w-5 h-5" />
                    </button>
                    
                    {showAttachmentMenu && (
                      <div className="absolute bottom-12 left-0 bg-white rounded-lg shadow-lg border border-gray-200 p-2 w-48 z-10">
                        <button
                          type="button"
                          className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100 rounded-md"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <FileText className="w-4 h-4" />
                          <span>Document</span>
                        </button>
                        <button
                          type="button"
                          className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100 rounded-md"
                          onClick={() => {
                            setShowAttachmentMenu(false);
                            setNewMessage(prev => prev + '📷');
                          }}
                        >
                          <Camera className="w-4 h-4" />
                          <span>Photo</span>
                        </button>
                        <button
                          type="button"
                          className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100 rounded-md"
                          onClick={() => {
                            setShowAttachmentMenu(false);
                            setNewMessage(prev => prev + '🎤');
                          }}
                        >
                          <Mic className="w-4 h-4" />
                          <span>Voice</span>
                        </button>
                      </div>
                    )}
                    
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      onChange={handleFileUpload}
                      accept=".pdf,.doc,.docx,.txt,.jpg,.png"
                    />
                  </div>
                  
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="w-full px-4 py-3 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    
                    <button
                      type="button"
                      className="absolute right-12 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-600"
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    >
                      <Smile className="w-5 h-5" />
                    </button>
                    
                    {showEmojiPicker && (
                      <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-10">
                        <div className="grid grid-cols-4 gap-1">
                          {emojis.map((emoji, idx) => (
                            <button
                              key={idx}
                              type="button"
                              className="p-2 hover:bg-gray-100 rounded text-lg"
                              onClick={() => {
                                setNewMessage(prev => prev + emoji);
                                setShowEmojiPicker(false);
                              }}
                            >
                              {emoji}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full hover:from-purple-600 hover:to-indigo-600 transition-all transform hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div 
                className="bg-white rounded-2xl p-4 shadow-lg border border-purple-300 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={simulateSchedule}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Schedule Call</h4>
                    <p className="text-sm text-gray-600">Plan a meeting</p>
                  </div>
                </div>
              </div>
              
              <div 
                className="bg-white rounded-2xl p-4 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={simulateShareLocation}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Share Location</h4>
                    <p className="text-sm text-gray-600">Send your location</p>
                  </div>
                </div>
              </div>
              
              <div 
                className="bg-white rounded-2xl p-4 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={simulateViewProfile}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">View Profile</h4>
                    <p className="text-sm text-gray-600">See details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <div className="flex justify-between bg-gradient-to-t from-purple-400 to-blue-50 rounded-2xl pl-2 items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Client Profile</h3>
              <button 
                onClick={() => setShowProfileModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center">
              <img 
                src={activeChat.avatar} 
                alt={activeChat.name} 
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold">{activeChat.name}</h4>
              <p className="text-gray-600 mb-2">{activeChat.lastSeen}</p>
              <div className="flex justify-center space-x-4 mt-4">
                <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors">
                  Message
                </button>
                <button className="border border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-50 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <div className="flex justify-between bg-gradient-to-t from-purple-400 to-blue-50 rounded-2xl pl-2 items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Schedule Call</h3>
              <button 
                onClick={() => setShowScheduleModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input 
                  type="date" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input 
                  type="time" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>1.5 hours</option>
                </select>
              </div>
              <button 
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all"
                onClick={() => {
                  alert('Call scheduled successfully!');
                  setShowScheduleModal(false);
                }}
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Location Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <div className="flex justify-between bg-gradient-to-t from-purple-400 to-blue-50 rounded-2xl pl-2 items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Share Location</h3>
              <button 
                onClick={() => setShowLocationModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-purple-500 mx-auto mb-2" />
                  <p className="text-gray-600">Share current location.</p>
                </div>
              </div>
              <button 
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all"
                onClick={() => {
                  alert('Location shared successfully!');
                  setShowLocationModal(false);
                }}
              >
                Share Location
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesPage;