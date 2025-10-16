import React, { useState } from 'react';
import { Building, MessageSquareIcon, Shield, StarIcon, X } from "lucide-react";
import MessageClient from './MessageClient';
const ViewClient = ({client, onClose, clientName}) =>{
    const [showMessageModal, setShowMessageModal] = useState(false);
    const handleCloseMessageModal = () => {
        setShowMessageModal(false);
    };
     const handleSendMessage = () => {
        setShowMessageModal(true);
    };
    const handleSendMessageSubmit = (message) => {
        alert(`Your message has been sent to ${clientName}!`);
    };
    return (
   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200  p-6 rounded-t-2xl flex justify-between items-center opacity-70 bg-gradient-to-b from-blue-300 to-purple-300 ">
          <h2 className="text-2xl font-bold text-gray-900 ">Client Profile</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-6">
              <Building className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{client.name}</h3>
              <div className="flex items-center mb-2">
                <StarIcon className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-2" />
                <span className="text-lg font-medium text-gray-900">{client.rating}</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-gray-600">{client.totalProjects} projects</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Shield className="w-4 h-4 text-green-500 mr-2" />
                <span>{client.verification}</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">About</h4>
            <p className="text-gray-700 leading-relaxed">{client.description}</p>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-medium text-gray-900 mb-2">Location</h5>
              <p className="text-gray-700">{client.location}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-medium text-gray-900 mb-2">Member Since</h5>
              <p className="text-gray-700">{client.joined}</p>
            </div>
          </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">{client.totalProjects}</div>
              <div className="text-sm text-gray-600">Total Projects</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">{client.rating}</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600">95%</div>
              <div className="text-sm text-gray-600">Hire Rate</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-600">4.8</div>
              <div className="text-sm text-gray-600">Avg. Rating</div>
            </div>
          </div>
           <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={handleSendMessage} className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl">
              <MessageSquareIcon className="w-5 h-5 mr-2" /> Message Client
            </button>
          </div>
        </div>
      </div>
      {showMessageModal && (
                <MessageClient 
                    clientName={clientName}
                    onClose={handleCloseMessageModal}
                    onSendMessage={handleSendMessageSubmit}
                />
            )}
    </div>
    );
}
export default ViewClient;

