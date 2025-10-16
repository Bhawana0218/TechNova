import { X } from 'lucide-react';
import React , { useState } from 'react';
const MessageClient = ({ clientName, onClose, onSendMessage }) => {
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      onClose();
    }};
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center opacity-70 bg-gradient-to-b from-blue-400 to-purple-100">
          <h2 className="text-xl font-bold text-gray-900">Message Client</h2>
          <button onClick={onClose}  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          > <X className="w-6 h-6" />  </button>
        </div>
         <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To: {clientName}
            </label>
          </div>
          <div className="mb-6">
            <textarea value={message}   onChange={(e) => setMessage(e.target.value)} placeholder="Type your message here..."  required
              className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"  />
          </div> 
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            > Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default MessageClient;