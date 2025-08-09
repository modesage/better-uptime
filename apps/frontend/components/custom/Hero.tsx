import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900/50 text-blue-300 mb-8">
            <span className="animate-pulse w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            99.99% uptime guaranteed
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Monitor your website's
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> uptime</span>
            <br />
            like never before
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get instant alerts when your website goes down. Monitor performance, track uptime, 
            and keep your users happy with our comprehensive monitoring solution.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <span>Start monitoring for free</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
                <Play className="h-5 w-5 text-blue-600 ml-1" />
              </div>
              <span className="font-medium">Watch demo</span>
            </button>
          </div>
          
          <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">99.99%</div>
                <div className="text-gray-400">Average Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">30s</div>
                <div className="text-gray-400">Check Interval</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-400">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}