import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertTriangle, XCircle, Clock } from 'lucide-react';

const services = [
  { name: 'Main Website', url: 'https://example.com', status: 'up', responseTime: 145 },
  { name: 'API Server', url: 'https://api.example.com', status: 'up', responseTime: 89 },
  { name: 'CDN', url: 'https://cdn.example.com', status: 'warning', responseTime: 320 },
  { name: 'Database', url: 'db.example.com:5432', status: 'up', responseTime: 23 },
  { name: 'Email Service', url: 'mail.example.com', status: 'down', responseTime: 0 }
];

const statusConfig = {
  up: { icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-100', text: 'Operational' },
  warning: { icon: AlertTriangle, color: 'text-yellow-500', bg: 'bg-yellow-100', text: 'Degraded' },
  down: { icon: XCircle, color: 'text-red-500', bg: 'bg-red-100', text: 'Down' }
};

export default function StatusDemo() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Real-time status monitoring
          </h2>
          <p className="text-xl text-gray-300">
            See the status of all your services at a glance with our intuitive dashboard
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-600">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">System Status</h3>
            <div className="flex items-center space-x-2 text-gray-400">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Last updated: {currentTime.toLocaleTimeString()}</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {services.map((service, index) => {
              const config = statusConfig[service.status as keyof typeof statusConfig];
              const Icon = config.icon;
              
              return (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-gray-600">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${config.bg}`}>
                      <Icon className={`h-5 w-5 ${config.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{service.name}</h4>
                      <p className="text-sm text-gray-400">{service.url}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.color}`}>
                      {config.text}
                    </span>
                    {service.status !== 'down' && (
                      <p className="text-sm text-gray-400 mt-1">{service.responseTime}ms</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-green-900/30 p-4 rounded-lg text-center border border-green-800">
              <div className="text-2xl font-bold text-green-600">99.2%</div>
              <div className="text-sm text-gray-400">Uptime (30 days)</div>
            </div>
            <div className="bg-blue-900/30 p-4 rounded-lg text-center border border-blue-800">
              <div className="text-2xl font-bold text-blue-600">156ms</div>
              <div className="text-sm text-gray-400">Avg Response</div>
            </div>
            <div className="bg-purple-900/30 p-4 rounded-lg text-center border border-purple-800">
              <div className="text-2xl font-bold text-purple-600">2</div>
              <div className="text-sm text-gray-400">Incidents</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}