import { ArrowRight, User, Shield, Bell, CreditCard, Globe, Mail, Lock, Camera, Upload, X, Check, Eye, EyeOff,  Star, TrendingUp, Award, Settings2 } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const Settings = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('general');
  const [formData, setFormData] = useState({
    displayName: 'Jane Doe',
    email: 'jane.doe@example.com',
    bio: 'Highly motivated and detail-oriented Senior Web Developer with expertise in React, Tailwind CSS, and modern web technologies.',
    tags: 'React, Tailwind CSS, Node.js, UI/UX',
    newPassword: '',
    currentPassword: '',
    profileImage: null
  });
  const [toggles, setToggles] = useState({
    twoFactor: true,
    notifyProposal: true,
    notifyRating: false,
    darkMode: false,
    emailUpdates: true,
    pushNotifications: true,
    smsAlerts: false
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');
  const [showPassword, setShowPassword] = useState({ current: false, new: false });
  const [hoveredItem, setHoveredItem] = useState(null);
  const [completionProgress, setCompletionProgress] = useState(75);
  const [activeTab, setActiveTab] = useState('general');

  useEffect(() => {
    // Apply theme classes to body
    if (toggles.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [toggles.darkMode]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleToggle = (key) => {
    setToggles(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = async (section) => {
    setIsSaving(true);
    setSaveStatus('');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSaving(false);
    setSaveStatus('Settings saved successfully!');
    
    // Clear success message after 3 seconds
    setTimeout(() => setSaveStatus(''), 3000);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          profileImage: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const navItems = [
    { id: 'general', label: 'General', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'profile', label: 'Profile Details', icon: User, color: 'from-purple-500 to-pink-500' },
    { id: 'security', label: 'Security', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'notifications', label: 'Notifications', icon: Bell, color: 'from-yellow-500 to-green-500' },
    { id: 'billing', label: 'Billing', icon: CreditCard, color: 'from-green-500 to-teal-500' }
  ];

  const getSectionTitle = (section) => {
    const titles = {
      general: 'General Settings',
      profile: 'Profile Details',
      security: 'Security Settings',
      notifications: 'Notification Preferences',
      billing: 'Billing & Payments'
    };
    return titles[section] || 'Settings';
  };

  const getSectionIcon = (section) => {
    const icons = {
      general: Globe,
      profile: User,
      security: Shield,
      notifications: Bell,
      billing: CreditCard
    };
    return icons[section] || Settings2;
  };

  return (
    <div className="min-h-screen  transition-all duration-500 relative overflow-hidden">
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div> */}

      <div className="p-4 sm:p-8 max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-4 transition-all duration-500">
          <button onClick={onBack} className='flex items-center text-blue-900 hover:text-blue-700 mb-6 group'>
                    <ArrowRight className='w-5 h-5 rotate-180 mr-2 group-hover:-translate-x-1 transition-transform'/>Back to Home
                              </button>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white shadow-2xl">
                  <User className="w-8 h-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold bg-black bg-clip-text text-transparent ">
                  Account Settings
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">
                  Manage your profile information, security, and preferences.
                </p>
                
                {/* Profile Completion */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Profile Completion</span>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{completionProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${completionProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* SAVE STATUS */}
        {saveStatus && (
          <div className="mb-6 p-4 bg-green-400 dark:bg-green-700 border border-green-200 dark:border-green-800 rounded-2xl text-green-700 dark:text-green-400 flex items-center justify-between animate-pulse">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5" />
              <span>{saveStatus}</span>
            </div>
            <button onClick={() => setSaveStatus('')} className="text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* SIDEBAR */}
          <aside className="lg:col-span-1 space-y-4 h-fit sticky top-4">
            <nav className="bg-white dark:bg-gray-100 p-6 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-300 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-800 mb-4 flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-blue-500" />
                Settings Menu
              </h3>
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveSection(item.id)}
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105' 
                            : 'hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-700 dark:text-gray-800 hover:scale-102'
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${
                          isActive 
                            ? 'bg-white/20' 
                            : 'bg-gray-200 dark:bg-gray-300'
                        }`}>
                          <IconComponent className={`w-5 h-5 ${
                            isActive ? 'text-white' : 'text-gray-600 dark:text-gray-700'
                          }`} />
                        </div>
                        <span className="font-medium">{item.label}</span>
                        {isActive && (
                          <div className="ml-auto">
                          </div>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* MAIN CONTENT */}
          <main className="lg:col-span-3 space-y-8">
            {/* SECTION HEADER */}
            <div className="flex items-center gap-3 mb-6">
              {React.createElement(getSectionIcon(activeSection), {
                className: "w-8 h-8 text-blue-500 dark:text-blue-400"
              })}
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-800">
                {getSectionTitle(activeSection)}
              </h2>
            </div>

            {/* GENERAL SETTINGS */}
            {activeSection === 'general' && (
              <section className="bg-white dark:bg-gray-100 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-300">
                <form onSubmit={(e) => { e.preventDefault(); handleSave('general'); }} className="space-y-8">
                  {/* Profile Image Upload */}
                  <div className="text-center">
                    <div className="relative inline-block group">
                      <img
                        src={formData.profileImage || 'https://placehold.co/150x150/e2e8f0/64748b?text=JD'}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 dark:border-gray-400 mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      />
                      <label className="absolute bottom-2 right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-110 group-hover:scale-110">
                        <Camera className="w-5 h-5" />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                    <p className="text-gray-600 dark:text-gray-600 mt-4">Click camera to upload new photo</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 dark:text-gray-700 mb-2">
                        Display Name
                      </label>
                      <input
                        type="text"
                        id="displayName"
                        value={formData.displayName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-200 border border-gray-300 dark:border-gray-400 text-gray-900 dark:text-gray-800 transition-all duration-200 hover:border-blue-400 focus:scale-102"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        disabled
                        className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-200 border border-gray-300 dark:border-gray-400 text-gray-500 dark:text-gray-600 cursor-not-allowed"
                      />
                      <p className="mt-1 text-xs text-blue-500 dark:text-blue-600">Contact support to change your email.</p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-200 dark:border-gray-300">
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-2xl hover:shadow-3xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto hover:scale-105"
                    >
                      {isSaving ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Saving Changes...
                        </>
                      ) : (
                        <>
                          <Upload className="w-5 h-5" />
                          Save General Settings
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </section>
            )}

            {/* PROFILE DETAILS */}
            {activeSection === 'profile' && (
              <section className="bg-white dark:bg-gray-100 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-300">
                <form onSubmit={(e) => { e.preventDefault(); handleSave('profile'); }} className="space-y-8">
                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-700 mb-2">
                      Bio/Professional Summary
                    </label>
                    <textarea
                      id="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows="6"
                      className="w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-200 border border-gray-300 dark:border-gray-400 text-gray-900 dark:text-gray-800 transition-all duration-200 hover:border-blue-400 focus:scale-102 resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-700 mb-2">
                      Skills/Tags (Comma Separated)
                    </label>
                    <input
                      type="text"
                      id="tags"
                      value={formData.tags}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-200 border border-gray-300 dark:border-gray-400 text-gray-900 dark:text-gray-800 transition-all duration-200 hover:border-blue-400 focus:scale-102"
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-600 mt-1">Separate tags with commas (e.g., React, JavaScript, CSS)</p>
                  </div>

                  <div className="pt-8 border-t border-gray-200 dark:border-gray-300">
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 transition-all duration-200 shadow-2xl hover:shadow-3xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto hover:scale-105"
                    >
                      {isSaving ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Updating Profile...
                        </>
                      ) : (
                        <>
                          <User className="w-5 h-5" />
                          Update Profile
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </section>
            )}

            {/* SECURITY SECTION */}
            {activeSection === 'security' && (
              <section className="bg-white dark:bg-gray-100 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-300">
                <form onSubmit={(e) => { e.preventDefault(); handleSave('security'); }} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-700 mb-2">
                        Current Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword.current ? "text" : "password"}
                          id="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleInputChange}
                          placeholder="Enter current password"
                          className="w-full px-4 py-3 pr-12 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-200 border border-gray-300 dark:border-gray-400 text-gray-900 dark:text-gray-800 transition-all duration-200 hover:border-blue-400"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(prev => ({ ...prev, current: !prev.current }))}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-700"
                        >
                          {showPassword.current ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-700 mb-2">
                        New Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword.new ? "text" : "password"}
                          id="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          placeholder="Enter new password"
                          className="w-full px-4 py-3 pr-12 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-200 border border-gray-300 dark:border-gray-400 text-gray-900 dark:text-gray-800 transition-all duration-200 hover:border-blue-400"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(prev => ({ ...prev, new: !prev.new }))}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-700"
                        >
                          {showPassword.new ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-100 dark:to-orange-100 rounded-2xl border border-red-200 dark:border-red-300">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-red-500 text-white rounded-xl">
                          <Lock className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-gray-800">Two-Factor Authentication (2FA)</p>
                          <p className="text-sm text-gray-600 dark:text-gray-600">
                            Add an extra layer of security to your account.
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleToggle('twoFactor')}
                        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${
                          toggles.twoFactor ? 'bg-red-500' : 'bg-gray-300 dark:bg-gray-400'
                        }`}
                      >
                        <span
                          className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
                            toggles.twoFactor ? 'translate-x-7' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-100 dark:to-cyan-100 rounded-2xl border border-blue-200 dark:border-blue-300">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-500 text-white rounded-xl">
                          <Shield className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-gray-800">Security Alerts</p>
                          <p className="text-sm text-gray-600 dark:text-gray-600">
                            Get notified of suspicious activity.
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleToggle('emailUpdates')}
                        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${
                          toggles.emailUpdates ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-400'
                        }`}
                      >
                        <span
                          className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
                            toggles.emailUpdates ? 'translate-x-7' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-200 dark:border-gray-300">
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 transition-all duration-200 shadow-2xl hover:shadow-3xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto hover:scale-105"
                    >
                      {isSaving ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Updating Security...
                        </>
                      ) : (
                        <>
                          <Shield className="w-5 h-5" />
                          Update Security Settings
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </section>
            )}

            {/* NOTIFICATION PREFERENCES */}
            {activeSection === 'notifications' && (
              <section className="bg-white dark:bg-gray-100 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-yellow-50 to-green-50 dark:from-yellow-100 dark:to-green-100 rounded-2xl border border-yellow-200 dark:border-yellow-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-yellow-500 text-white rounded-xl">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-800">Email when proposal is viewed</p>
                        <p className="text-sm text-gray-600 dark:text-gray-600">
                          Get an alert when a client reviews your application.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleToggle('notifyProposal')}
                      className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${
                        toggles.notifyProposal ? 'bg-yellow-500' : 'bg-gray-300 dark:bg-gray-400'
                      }`}
                    >
                      <span
                        className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
                          toggles.notifyProposal ? 'translate-x-7' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-100 dark:to-teal-100 rounded-2xl border border-green-200 dark:border-green-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-500 text-white rounded-xl">
                        <Bell className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-800">Platform message on new rating</p>
                        <p className="text-sm text-gray-600 dark:text-gray-600">
                          Receive a notification when a client leaves a review.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleToggle('notifyRating')}
                      className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${
                        toggles.notifyRating ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-400'
                      }`}
                    >
                      <span
                        className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
                          toggles.notifyRating ? 'translate-x-7' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-100 dark:to-pink-100 rounded-2xl border border-purple-200 dark:border-purple-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-500 text-white rounded-xl">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-800">Weekly activity summary</p>
                        <p className="text-sm text-gray-600 dark:text-gray-600">
                          Get a weekly overview of your account activity.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleToggle('pushNotifications')}
                      className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${
                        toggles.pushNotifications ? 'bg-purple-500' : 'bg-gray-300 dark:bg-gray-400'
                      }`}
                    >
                      <span
                        className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
                          toggles.pushNotifications ? 'translate-x-7' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </section>
            )}

            {/* BILLING SECTION */}
            {activeSection === 'billing' && (
              <section className="bg-white dark:bg-gray-100 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-300">
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-100 dark:to-teal-100 rounded-2xl border border-green-200 dark:border-green-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-500 text-white rounded-xl">
                        <CreditCard className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-800">Current Payment Method</p>
                        <p className="text-gray-600 dark:text-gray-600">
                          You currently use <strong className="text-gray-800 dark:text-gray-800">Bank Transfer</strong> as your primary payment method.
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-600 mt-1">
                          Last updated: March 15, 2024
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="px-6 py-4 rounded-xl font-bold border border-blue-500 text-blue-500 hover:bg-blue-500/10 transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Manage Payment Methods
                    </button>
                    <button className="px-6 py-4 rounded-xl font-bold border border-gray-500 text-gray-500 hover:bg-gray-500/10 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                      View Billing History
                    </button>
                    <button className="px-6 py-4 rounded-xl font-bold border border-purple-500 text-purple-500 hover:bg-purple-500/10 transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                      <Award className="w-5 h-5" />
                      Upgrade Plan
                    </button>
                    <button className="px-6 py-4 rounded-xl font-bold border border-green-500 text-green-500 hover:bg-green-500/10 transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                      <Star className="w-5 h-5" />
                      Subscription Details
                    </button>
                  </div>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Settings;