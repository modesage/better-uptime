import React from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'Forever',
    description: 'Perfect for small websites and personal projects',
    features: [
      '1 monitor',
      '5-minute checks',
      'Email alerts',
      'Basic status page',
      'Community support'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Professional',
    price: '$9',
    period: 'per month',
    description: 'Ideal for growing businesses and startups',
    features: [
      '10 monitors',
      '1-minute checks',
      'Email, SMS & Slack alerts',
      'Custom status pages',
      'Performance monitoring',
      'SSL monitoring',
      'Priority support'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$29',
    period: 'per month',
    description: 'Advanced monitoring for large organizations',
    features: [
      'Unlimited monitors',
      '30-second checks',
      'All alert channels',
      'White-label status pages',
      'Advanced analytics',
      'API access',
      '99.9% SLA',
      '24/7 phone support'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-300">
            Choose the perfect plan for your monitoring needs. No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-gray-900 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-700 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400 ml-2">{plan.period}</span>}
                </div>
                
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-300 mb-8 ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  {plan.cta}
                </button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">
            Compare all features →
          </a>
        </div>
      </div>
    </section>
  );
}