import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, BarChart2, ChevronDown, GraduationCap, BookOpen, FileText, Users, Building2, Headphones, Menu, X } from 'lucide-react';

function App() {
  const [currentWord, setCurrentWord] = useState(0);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const words = ['honest', 'trusted', 'powerful', 'reliable'];
  const [isMobileView, setIsMobileView] = useState(false);

  const productsTimeoutRef = useRef<number | null>(null);
  const resourcesTimeoutRef = useRef<number | null>(null);

  // Function to handle Products dropdown mouse events
  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) {
      window.clearTimeout(productsTimeoutRef.current);
      productsTimeoutRef.current = null;
    }
    setShowProductsDropdown(true);
  };

  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = window.setTimeout(() => {
      setShowProductsDropdown(false);
    }, 1000); // 1000ms = 1 second delay
  };

  // Function to handle Resources dropdown mouse events
  const handleResourcesMouseEnter = () => {
    if (resourcesTimeoutRef.current) {
      window.clearTimeout(resourcesTimeoutRef.current);
      resourcesTimeoutRef.current = null;
    }
    setShowResourcesDropdown(true);
  };

  const handleResourcesMouseLeave = () => {
    resourcesTimeoutRef.current = window.setTimeout(() => {
      setShowResourcesDropdown(false);
    }, 1000); // 1000ms = 1 second delay
  };

  //
  
  const handleAlreadyEnteredProductsMouseEnter = () => {
    if (productsTimeoutRef.current) {
      window.clearTimeout(productsTimeoutRef.current);
      productsTimeoutRef.current = null;
    }
    setShowProductsDropdown(true);
  };

  const handleAlreadyEnteredProductsMouseLeave = () => {
    productsTimeoutRef.current = window.setTimeout(() => {
      setShowProductsDropdown(false);
    }, 100); // 1000ms = 1 second delay
  };

  // Function to handle Resources dropdown mouse events
  const handleAlreadyEnteredResourcesMouseEnter = () => {
    if (resourcesTimeoutRef.current) {
      window.clearTimeout(resourcesTimeoutRef.current);
      resourcesTimeoutRef.current = null;
    }
    setShowResourcesDropdown(true);
  };

  const handleAlreadyEnteredResourcesMouseLeave = () => {
    resourcesTimeoutRef.current = window.setTimeout(() => {
      setShowResourcesDropdown(false);
    }, 100); // 1000ms = 1 second delay
  };

  useEffect(() => {
    setIsMobileView(window.innerWidth < 768);
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1700);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: GraduationCap,
      title: 'Expert Training',
      description: 'Get comprehensive training from industry experts to master trading strategies and market analysis.'
    },
    {
      icon: BookOpen,
      title: 'Market Research',
      description: 'Access in-depth market research and analysis to make informed trading decisions.'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Detailed documentation and guides to help you understand every aspect of trading.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you with any questions or concerns.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#001200] text-white">
      {/* Navigation */}
      <nav className="px-6 py-4 flex items-center justify-between relative">
        <div className="flex items-center space-x-2">
          <BarChart2 className="w-8 h-8" />
          <span className="text-xl font-bold">NexVest</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
          
          {/* Products Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center space-x-1 hover:text-yellow-400 transition-colors"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <span>Products</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {showProductsDropdown && (
              <div 
                className="absolute top-full left-0 mt-2 w-48 bg-[#002200] rounded-lg shadow-lg py-2"
                onMouseEnter={handleAlreadyEnteredProductsMouseEnter}
                onMouseLeave={handleAlreadyEnteredProductsMouseLeave}
              >
                <a href="#" className="block px-4 py-2 hover:bg-[#003300] hover:text-yellow-400">Trading Platform</a>
                <a href="#" className="block px-4 py-2 hover:bg-[#003300] hover:text-yellow-400">Market Analysis</a>
                <a href="#" className="block px-4 py-2 hover:bg-[#003300] hover:text-yellow-400">Portfolio Management</a>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center space-x-1 hover:text-yellow-400 transition-colors"
              onMouseEnter={handleResourcesMouseEnter}
              onMouseLeave={handleResourcesMouseLeave}
            >
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {showResourcesDropdown && (
              <div 
                className="absolute top-full left-0 mt-2 w-48 bg-[#002200] rounded-lg shadow-lg py-2"
                onMouseEnter={handleAlreadyEnteredResourcesMouseEnter}
                onMouseLeave={handleAlreadyEnteredResourcesMouseLeave}
              >
                <a href="#" className="block px-4 py-2 hover:bg-[#003300] hover:text-yellow-400">Documentation</a>
                <a href="#" className="block px-4 py-2 hover:bg-[#003300] hover:text-yellow-400">API Reference</a>
                <a href="#" className="block px-4 py-2 hover:bg-[#003300] hover:text-yellow-400">Tutorials</a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-yellow-400 transition-colors">Pricing</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-white hover:text-yellow-400 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {!isMobileView && (
          <button className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="hidden md:inline">My Account</span>
        </button>
        )}
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-[#001200] z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="px-6 py-4 flex justify-between items-center border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <BarChart2 className="w-8 h-8" />
                  <span className="text-xl font-bold">NexVest</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col h-full">
                <div className="px-6 py-8 flex flex-col space-y-6 flex-grow">
                  <a href="#" className="text-lg hover:text-yellow-400 transition-colors">Home</a>
                  <div className="space-y-4">
                    <p className="text-lg font-semibold">Products</p>
                    <div className="pl-4 flex flex-col space-y-3">
                      <a href="#" className="hover:text-yellow-400 transition-colors">Trading Platform</a>
                      <a href="#" className="hover:text-yellow-400 transition-colors">Market Analysis</a>
                      <a href="#" className="hover:text-yellow-400 transition-colors">Portfolio Management</a>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg font-semibold">Resources</p>
                    <div className="pl-4 flex flex-col space-y-3">
                      <a href="#" className="hover:text-yellow-400 transition-colors">Documentation</a>
                      <a href="#" className="hover:text-yellow-400 transition-colors">API Reference</a>
                      <a href="#" className="hover:text-yellow-400 transition-colors">Tutorials</a>
                    </div>
                  </div>
                  <a href="#" className="text-lg hover:text-yellow-400 transition-colors">Pricing</a>
                </div>
                {/* Account Section */}
                <div className="mt-auto border-t border-white/10 px-6 py-4">
                  <button className="w-full flex items-center space-x-3 hover:text-yellow-400 transition-colors">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
                      alt="Profile"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-lg">My Account</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            The world's most{' '}
            <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={words[currentWord]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="text-yellow-400 inline-block text-7xl"
              >
                {words[currentWord]}
              </motion.span>
            </AnimatePresence>
            {' '}<br />trade app.
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Get the latest updates regarding market trends, comprehensive analysis tools, and real-time trading insights.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-yellow-300 transition-colors"
          >
            <span>Get Started</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] rounded-tl-[8rem]">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80"
              alt="Trading Graph"
              className="w-full shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001200]/50 to-transparent"></div>
          </div>
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#001800] py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-16 text-center"
          >
            WHY CHOOSE US
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#002200] p-6 rounded-lg border border-[#004400] hover:border-yellow-400 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                <motion.a
                  href="#"
                  className="inline-flex items-center space-x-2 text-yellow-400 mt-4 hover:text-yellow-300"
                  whileHover={{ x: 5 }}
                >
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Build Something Great Section */}
      <div className="bg-black py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gray-400">Launch faster</span>
            <h2 className="text-5xl font-bold mt-4 mb-6">Build something great</h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              We've done all the heavy lifting so you don't have to — get all the
              data you need to launch and grow your business faster.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;