import { useState } from 'react';
import { CheckCircle, ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';

const Newsletter = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setShowThankYou(true);
      }, 1500);
    }
  };

  if (showThankYou) {
    return (
      <div className="min-h-screen  bg-gradient-to-br from-blue-200 via-white to-purple-300 flex items-center justify-center p-4 mt-10 rounded-4xl">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-gradient-to-br from-blue-200 via-white to-purple-500 rounded-3xl shadow-2xl p-12 border border-gray-100">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-8 shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 bg-clip-text text-transparent mb-6">
              Welcome to TechNova!
            </h1>
            
            <p className="text-gray-700 text-xl mb-8 leading-relaxed">
              Thank you for subscribing! You're now part of our exclusive community of tech enthusiasts. 
              Get ready for amazing content delivered right to your inbox.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                <Zap className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-blue-800 mb-2">Weekly Updates</h3>
                <p className="text-blue-600 text-sm">Fresh tech insights every week</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-purple-800 mb-2">Exclusive Content</h3>
                <p className="text-purple-600 text-sm">Premium articles & tutorials</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl border border-pink-200">
                <Rocket className="w-8 h-8 text-pink-600 mx-auto mb-4" />
                <h3 className="font-semibold text-pink-800 mb-2">Early Access</h3>
                <p className="text-pink-600 text-sm">First to see new features</p>
              </div>
            </div>
            
            <button 
              onClick={() => {
                setShowThankYou(false);
                setIsSubscribed(false);
                setEmail('');
              }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg"
            >
              Continue Exploring <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-200 via-purple-50 to-pink-200 py-8 px-4 min-h-[20%] max-w-[100%] mt-20 rounded-4xl">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        
        <h2
     className="inline-block text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 bg-clip-text text-transparent mb-6" style={{
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}>
          TechNova
        </h2>
        <p className="text-purple-900 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Stay ahead of the curve with the latest tech insights, innovations, and exclusive content delivered straight to your inbox.
        </p>
        
        {/* Newsletter Form */}
        <div className="bg-white backdrop-blur-sm rounded-3xl shadow-2xl p-10 max-w-2xl mx-auto border border-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-500/5 pointer-events-none"></div>
          <form onSubmit={handleSubscribe} className="relative z-10">
            <div className="flex flex-col sm:flex-row gap-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-grow px-7 py-5 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-lg transition-all duration-300 shadow-lg"
                required
              />
              <button
                type="submit"
                className={`px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-500 hover:shadow-2xl hover:scale-105 active:scale-95 shadow-lg ${
                  isSubscribed
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                    : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white hover:from-blue-700 hover:via-purple-700 hover:to-pink-600'
                }`}
              >
                {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </div>
          </form>
          <p className="text-purple-600 text-base mt-5 font-medium">
            Join 10,000+ subscribers • No spam, ever • Unsubscribe anytime
          </p>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse shadow-lg"></div>
            <span className="text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Trusted by Tech Leaders
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse shadow-lg"></div>
            <span className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Weekly Updates
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-pulse shadow-lg"></div>
            <span className="text-lg font-semibold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Exclusive Content
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;