import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Cpu, BarChart3, Users, Award, TrendingUp, Play, Sparkles, Brain, Layers, Database, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

export const Homepage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Innovative Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Orb */}
          <div 
            className="absolute w-96 h-96 md:w-[600px] md:h-[600px] rounded-full opacity-30 blur-3xl transition-all duration-1000 ease-out"
            style={{
              background: 'radial-gradient(circle, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
              left: `${mousePosition.x * 0.02}px`,
              top: `${mousePosition.y * 0.02}px`,
              transform: 'translate(-50%, -50%)'
            }}
          />
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite'
            }} />
          </div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: 0 
              }}
              animate={{ 
                y: [null, -100, -200],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div 
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <motion.div 
                  className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Unlock the power of AI & Manufacturing
                </motion.div>
                
                {/* Main Heading */}
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Intelligent
                  </span>
                  <br />
                  <span className="text-white">Manufacturing</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Revolution
                  </span>
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p 
                  className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Experience the pinnacle of efficiency in regulated manufacturing with AI. 
                  Our ground-breaking platform opens unlimited potential across industries.
                </motion.p>
                
                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    to="/contact"
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center relative overflow-hidden"
                  >
                    <span className="relative z-10">Book a Demo</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                  
                  <button className="group border-2 border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                    <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Content - Interactive Element */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  {/* Main Card */}
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-400 text-sm">BhriguOne Platform</span>
                    </div>
                    
                    {/* Chat Interface */}
                    <div className="space-y-4">
                      <div className="bg-blue-600/20 border border-blue-500/30 rounded-2xl p-4">
                        <p className="text-blue-300 text-sm mb-2">AI Assistant</p>
                        <p className="text-white">How may I help optimize your manufacturing process today?</p>
                      </div>
                      
                      <div className="bg-gray-800/50 rounded-2xl p-4 ml-8">
                        <p className="text-gray-300">Analyze production efficiency for Batch #2024-001</p>
                      </div>
                      
                      <div className="bg-green-600/20 border border-green-500/30 rounded-2xl p-4">
                        <p className="text-green-300 text-sm mb-2">Analysis Complete</p>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-white">Efficiency Score</span>
                            <span className="text-green-400 font-semibold">94.7%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white">Quality Index</span>
                            <span className="text-blue-400 font-semibold">98.2%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div 
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-4 shadow-xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Brain className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-4 shadow-xl"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                    <Database className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-500 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-8">Trusted by industry leaders worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {['Pfizer', 'Johnson & Johnson', 'Novartis', 'Roche', 'Merck', 'AbbVie'].map((company, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-500">{company}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Platform Overview */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BhriguOne Platform
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              An omni-connected software platform that transforms regulated manufacturing through intelligent automation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Powered Intelligence',
                description: 'Machine learning algorithms that predict, optimize, and prevent issues before they occur',
                icon: Brain,
                color: 'from-purple-500 to-pink-500',
                features: ['Predictive Analytics', 'Quality Forecasting', 'Anomaly Detection']
              },
              {
                title: 'Compliance Automation',
                description: 'Built-in GxP compliance with automated documentation and audit trail management',
                icon: Shield,
                color: 'from-blue-500 to-cyan-500',
                features: ['FDA Compliance', 'Audit Trails', 'Electronic Signatures']
              },
              {
                title: 'Real-time Integration',
                description: 'Seamless connectivity with existing systems and real-time data synchronization',
                icon: Layers,
                color: 'from-green-500 to-teal-500',
                features: ['API Integration', 'IoT Connectivity', 'Cloud Sync']
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Manufacturing Sites', sublabel: 'Across 5 countries', icon: Globe },
              { number: '99.9%', label: 'System Uptime', sublabel: 'Guaranteed reliability', icon: Shield },
              { number: '75%', label: 'Cost Reduction', sublabel: 'Average savings', icon: TrendingUp },
              { number: '24/7', label: 'Expert Support', sublabel: 'Global coverage', icon: Users }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold mb-1 text-white">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Timeline */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Innovation Pipeline
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Continuously advancing the future of regulated manufacturing
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  title: 'Advanced AI Analytics',
                  description: 'Next-generation machine learning models for predictive manufacturing',
                  status: 'In Development',
                  color: 'from-blue-500 to-cyan-500',
                  side: 'left'
                },
                {
                  title: 'Quantum Computing Integration',
                  description: 'Quantum-powered optimization for complex manufacturing processes',
                  status: 'Research Phase',
                  color: 'from-purple-500 to-pink-500',
                  side: 'right'
                },
                {
                  title: 'Augmented Reality QC',
                  description: 'AR-powered quality control and training systems',
                  status: 'Beta Testing',
                  color: 'from-green-500 to-teal-500',
                  side: 'left'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${item.side === 'right' ? 'lg:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex-1 lg:w-1/2">
                    <div className={`bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 ${item.side === 'right' ? 'lg:ml-8' : 'lg:mr-8'}`}>
                      <div className={`inline-flex px-4 py-2 rounded-full text-sm font-medium mb-4 bg-gradient-to-r ${item.color} text-white`}>
                        {item.status}
                      </div>
                      <h3 className="text-2xl font-semibold mb-3 text-white">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="hidden lg:block w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black relative z-10"></div>
                  
                  <div className="flex-1 lg:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/30 to-purple-900/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Transform</span> Your Manufacturing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join industry leaders who are revolutionizing their operations with intelligent manufacturing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center relative overflow-hidden"
              >
                <span className="relative z-10">Schedule Consultation</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                to="/solutions"
                className="border-2 border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                Explore Platform
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
};