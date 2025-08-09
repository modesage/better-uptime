import React from 'react';
import { 
  Globe, 
  Zap, 
  Bell, 
  BarChart3, 
  Shield, 
  Clock,
  Smartphone,
  Users,
  AlertTriangle
} from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Global Monitoring',
    description: 'Monitor from 15+ locations worldwide to ensure your site is accessible everywhere.',
    color: 'blue'
  },
  {
    icon: Zap,
    title: 'Lightning Fast Checks',
    description: 'Get notified in under 30 seconds when your website goes down.',
    color: 'yellow'
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Receive notifications via email, SMS, Slack, Discord, and 40+ integrations.',
    color: 'green'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Track response times, uptime statistics, and performance trends over time.',
    color: 'purple'
  },
  {
    icon: Shield,
    title: 'SSL Monitoring',
    description: 'Monitor SSL certificates and get alerts before they expire.',
    color: 'red'
  },
  {
    icon: Clock,
    title: 'Status Pages',
    description: 'Create beautiful public status pages to keep your users informed.',
    color: 'indigo'
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Monitor your websites on the go with our native mobile applications.',
    color: 'pink'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together with your team and manage incidents collaboratively.',
    color: 'cyan'
  }
];

const colorClasses = {
  blue: 'bg-blue-100 text-blue-600',
  yellow: 'bg-yellow-100 text-yellow-600',
  green: 'bg-green-100 text-green-600',
  purple: 'bg-purple-100 text-purple-600',
  red: 'bg-red-100 text-red-600',
  indigo: 'bg-indigo-100 text-indigo-600',
  pink: 'bg-pink-100 text-pink-600',
  cyan: 'bg-cyan-100 text-cyan-600'
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything you need to monitor your website
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From basic uptime monitoring to advanced performance analytics, 
            we've got all the tools you need to keep your website running smoothly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-700">
                <div className={`w-12 h-12 rounded-lg ${colorClasses[feature.color as keyof typeof colorClasses]} flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}