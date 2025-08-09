import React from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {

    const router = useRouter();
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md border-b border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-white">UptimeGuard</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => router.push('/signin')} className="text-gray-300 hover:text-white transition-colors">Sign In</button>
            <button onClick={() => router.push('/signup')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <div className="px-4 py-2 space-y-1">
            <a href="#features" className="block px-3 py-2 text-gray-300">Features</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-300">Pricing</a>
            <a href="#about" className="block px-3 py-2 text-gray-300">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300">Contact</a>
            <div className="border-t border-gray-700 pt-2 mt-2">
              <a href="#" className="block px-3 py-2 text-gray-300">Sign In</a>
              <a href="#" className="block px-3 py-2 text-blue-600 font-semibold">Start Free Trial</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}