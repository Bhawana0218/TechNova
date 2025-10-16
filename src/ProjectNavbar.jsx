import { Heart, MessageCircle, Search, User,  LayoutDashboard, FileText, Users, Menu, X, } from 'lucide-react';
import React, { useState }  from 'react';
import TechNova from './assets/Pages/TechNova.png';
import Client from './ClientDashboard/Client.jsx';
import HomePage from './HomePage.jsx';
import Dashboard from './Freelancer/Dashboard.jsx';
import MarketPlace from './ProjectDetailsPage/MarketPlace.jsx';
import Message from './Components/Message.jsx';
import Profile from './Freelancer/Profile.jsx';
import Settings from './Components/Settings.jsx';
import ClientProfile from './ClientDashboard/ClientProfile.jsx';
import NotificationPage from './Components/NotificationPage.jsx';
const ProjectNavbar = ( ) =>{
    const [searchQuery, setSearchQuery] = useState('');
    const [activePage, setActivePage] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
}
    return (
        <div className='min-h-screen bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-200' >
           <header className='bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-40 '>
            <div className='max-w-7xl mx-auto px-4 sm:px-4 lg:px-4'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex items-center'>
                        <div className='flex shrink-0'>
                            <img src={TechNova} alt=""  className=' h-20 w-22 py-1 -ml-6 rounded-2xl '/>
                            <h1 className='ml-2 mt-5 text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-700 to-purple-600 bg-clip-text text-transparent'>TechNova</h1>
                        </div>
                    </div>

                    {/*  Hamburger Button (visible on small screens) */}
            <div className='md:hidden'>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className='p-2 rounded-md text-gray-700 hover:text-blue-700 focus:outline-none'
              >
                {menuOpen ? <X className='w-8 h-8 transition-transform duration-300' /> : <Menu className='w-8 h-8 transition-transform duration-300' />}
              </button>
            </div>

            {/* Navbar */}
             <div
              className={`${
                menuOpen ? 'block' : 'hidden'
              } md:flex md:flex-1 md:items-center md:justify-between md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent border-t md:border-none shadow-md md:shadow-none p-4 md:p-0 z-50 transition-all duration-300`}
            >
                    <div className='hidden md:block flex-1 max-w-lg mx-8'>
                        <div className='relative'>
                            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5'/>
                            <input type="text" placeholder='Search projects, skills...' value={ searchQuery } onChange={ (e) =>setSearchQuery(e.target.value)} className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90'/>
                        </div>
                    </div>

                    <div className='flex items-center space-x-4'>
                      {/* Dashboard */}
                    <div className="relative inline-block group">
                     <button className={`p-2 ${activePage === "fdashboard" || activePage === "cdashboard" ? "text-blue-800" : "text-gray-400"} hover:text-blue-600`}>
                      <LayoutDashboard className="w-7 h-7"/>
                       </button>

                    <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-52 bg-white border border-gray-200 rounded-lg shadow-lg 
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <button onClick={() =>{ setActivePage("fdashboard"),scrollToTop()}} className={`w-full text-left px-4 py-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-t-lg`}>
                     Freelancer Dashboard </button>
      
                    <button onClick={() => {setActivePage("cdashboard"),scrollToTop()}} className={`w-full text-left px-4 py-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-b-lg`}>
                    Client Dashboard  </button>
                        
                   </div>
                </div>
                 {/* Projects */}
                <button onClick={()=> {setActivePage("projectList"),scrollToTop()}} className={`p-2 ${activePage === "projectList" ? "text-blue-900" : "text-gray-400"} hover:text-blue-600 relative`}>
                 <FileText className='w-7 h-7'/></button>
  
                 <button onClick={() => {setActivePage("messages"),scrollToTop()}} className={`p-2 relative ${activePage === "messages" ? "text-blue-900" : "text-gray-400"} hover:text-blue-600`}>
                 <MessageCircle className='w-6 h-6'/>
                 <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg'>3</span>
                </button>
                 <button onClick={() => {setActivePage("notifications"),scrollToTop()}}
                 className={`p-2 relative ${activePage === "notifications" ? "text-blue-900" : "text-gray-400"} hover:text-blue-900`}> 
                <Heart  className='w-7 h-7'  stroke={activePage === "notifications" ? "red" : "currentColor"}  fill={activePage === "notifications" ? "red" : "none"}/>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg">2</span>
                 </button>
                 {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg">2</span> */}
                 <div className="relative inline-block group">
                    <button className={`p-2 ${activePage === "Fprofile" || activePage === "Cprofile" ? "text-blue-900" : "text-gray-400"} hover:text-blue-600`}>
                        <Users className="w-7 h-7" /> </button>
                        <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-52 bg-white border border-gray-200 rounded-lg shadow-lg 
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <button onClick={() => {setActivePage("Fprofile"),scrollToTop()}}  className={`w-full text-left px-4 py-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-t-lg`}>
                         Freelancer Profile </button>
                    <button onClick={() => {setActivePage("Cprofile"),scrollToTop()}}  className={`w-full text-left px-4 py-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-t-lg`}>
                         Client Profile </button>
                     </div>
                     </div>
                     <div onClick={() => {setActivePage("setting"),scrollToTop()}}  className='w-10 h-10 bg-gradient-to-r from-blue-600 to bg-purple-600 rounded-full flex items-center justify-center ' >
                         <User className={`w-8 h-8 ${activePage === "setting" ? "text-white" : "text-black"}`}/>
                    </div>
                  </div>
                  </div>
                </div>
            </div>
        </header>
        { activePage === 'home' && <HomePage/>}
        { activePage ==='projectList' && <MarketPlace onBack={() => setActivePage('home')}/>}
        {activePage === 'fdashboard' && <Dashboard onBack={() => setActivePage('home')} />}
        {activePage === 'cdashboard' && <Client onBack={() => setActivePage('home')} />}
        {activePage === 'setting' && <Settings onBack={() => setActivePage('home')} />}
        {activePage === 'Fprofile' && <Profile onBack={() => setActivePage('home')} />}
        {activePage === 'messages' && <Message onBack={() => setActivePage('home')} />}
        {activePage === 'notifications' && <NotificationPage onBack={() => setActivePage('home')} />}
        {activePage === 'Cprofile' && <ClientProfile onBack={() => setActivePage('home')} />}
    </div>

    );
}
export default ProjectNavbar;