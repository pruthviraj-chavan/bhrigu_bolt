import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Cpu, BarChart3, Users, Award, TrendingUp, Play, Sparkles, Brain, Layers, Database, Cloud, Star, Building, Factory, FlaskConical, Pill, Utensils, Microscope, Bot, Code, Cog } from 'lucide-react';
import { motion } from 'framer-motion';

export const Homepage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeIndustry, setActiveIndustry] = useState('pharmaceuticals');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const industries = {
    pharmaceuticals: {
      title: 'Pharmaceuticals',
      description: 'From R&D to manufacturing, ensure digital compliance at every step.',
      features: ['GMP Validation', 'Batch Record Automation', 'Audit-Ready Logs'],
      icon: Pill,
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    biotech: {
      title: 'Biotechnology',
      description: 'Advanced bioprocessing with intelligent monitoring and control systems.',
      features: ['Bioreactor Control', 'Cell Culture Monitoring', 'Process Analytics'],
      icon: Microscope,
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    food: {
      title: 'Food & Beverage',
      description: 'HACCP compliant solutions for food safety and quality assurance.',
      features: ['Recipe Management', 'Allergen Control', 'Traceability Systems'],
      icon: Utensils,
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    medical: {
      title: 'Medical Devices',
      description: 'ISO 13485 compliant manufacturing for medical device production.',
      features: ['Device History Records', 'Design Controls', 'Risk Management'],
      icon: FlaskConical,
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1B9AAA]/10 to-[#06D6A0]/10">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Orb */}
          <div 
            className="absolute w-96 h-96 md:w-[600px] md:h-[600px] rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out"
            style={{
              background: 'radial-gradient(circle, #1B9AAA 0%, #06D6A0 50%, #40E0D0 100%)',
              left: `${mousePosition.x * 0.02}px`,
              top: `${mousePosition.y * 0.02}px`,
              transform: 'translate(-50%, -50%)'
            }}
          />
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(27, 154, 170, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(27, 154, 170, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite'
            }} />
          </div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#1B9AAA] rounded-full"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200), 
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <motion.div 
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <motion.div 
                  className="inline-flex items-center px-4 py-2 bg-[#1B9AAA]/20 border border-[#1B9AAA]/30 rounded-full text-[#1B9AAA] text-sm font-medium mb-6 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Unlock the power of AI & Manufacturing
                </motion.div>
                
                {/* Main Heading */}
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="bg-gradient-to-r from-[#1B9AAA] via-[#06D6A0] to-[#40E0D0] bg-clip-text text-transparent">
                    Intelligent
                  </span>
                  <br />
                  <span className="text-gray-900">Manufacturing</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#06D6A0] to-[#40E0D0] bg-clip-text text-transparent">
                    Revolution
                  </span>
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p 
                  className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
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
                    className="group bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#1B9AAA]/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center relative overflow-hidden"
                  >
                    <span className="relative z-10">Book a Demo</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#06D6A0] to-[#40E0D0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                  
                  <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-[#1B9AAA] hover:bg-[#1B9AAA]/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                    <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Content - Interactive Element */}
              <motion.div 
                className="relative mt-8 lg:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  {/* Main Card */}
                  <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-6 lg:p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-500 text-sm">BhriguOne Platform</span>
                    </div>
                    
                    {/* Chat Interface */}
                    <div className="space-y-4">
                      <div className="bg-[#1B9AAA]/20 border border-[#1B9AAA]/30 rounded-2xl p-4">
                        <p className="text-[#1B9AAA] text-sm mb-2">AI Assistant</p>
                        <p className="text-gray-800">How may I help optimize your manufacturing process today?</p>
                      </div>
                      
                      <div className="bg-gray-100 rounded-2xl p-4 ml-8">
                        <p className="text-gray-700">Analyze production efficiency for Batch #2024-001</p>
                      </div>
                      
                      <div className="bg-[#06D6A0]/20 border border-[#06D6A0]/30 rounded-2xl p-4">
                        <p className="text-[#06D6A0] text-sm mb-2">Analysis Complete</p>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-800">Efficiency Score</span>
                            <span className="text-[#06D6A0] font-semibold">94.7%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-800">Quality Index</span>
                            <span className="text-[#1B9AAA] font-semibold">98.2%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div 
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-[#06D6A0] to-[#40E0D0] rounded-2xl p-4 shadow-xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Brain className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] rounded-2xl p-4 shadow-xl"
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
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#1B9AAA] rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 mb-8">Trusted by industry leaders worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 items-center opacity-60">
              {['Pfizer', 'Johnson & Johnson', 'Novartis', 'Roche', 'Merck', 'AbbVie'].map((company, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg lg:text-2xl font-bold text-gray-500">{company}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve - Interactive Tabs */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] bg-clip-text text-transparent">
                Tailored for Every Industry
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Specialized solutions designed for the unique challenges of regulated manufacturing
            </p>
          </motion.div>
          
          <div className="max-w-7xl mx-auto">
            {/* Industry Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 lg:mb-12">
              {Object.entries(industries).map(([key, industry]) => (
                <button
                  key={key}
                  onClick={() => setActiveIndustry(key)}
                  className={`flex items-center space-x-2 px-4 lg:px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeIndustry === key
                      ? 'bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <industry.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{industry.title}</span>
                </button>
              ))}
            </div>

            {/* Industry Content */}
            <motion.div 
              key={activeIndustry}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                  {industries[activeIndustry as keyof typeof industries].title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {industries[activeIndustry as keyof typeof industries].description}
                </p>
                <div className="space-y-3">
                  {industries[activeIndustry as keyof typeof industries].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#06D6A0]" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#1B9AAA]/25 transition-all duration-200 flex items-center">
                  Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={industries[activeIndustry as keyof typeof industries].image}
                    alt={industries[activeIndustry as keyof typeof industries].title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-[#1B9AAA]/5 to-[#06D6A0]/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] bg-clip-text text-transparent">
                Cutting-Edge Technologies Powering Next-Gen Manufacturing
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Built on modern, scalable technologies for the future of regulated manufacturing
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { name: 'React.js', icon: '⚛️', color: 'from-blue-500 to-blue-600' },
              { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-600' },
              { name: 'Python', icon: '🐍', color: 'from-yellow-500 to-yellow-600' },
              { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-orange-600' },
              { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-cyan-500' },
              { name: 'Kubernetes', icon: '⚙️', color: 'from-purple-500 to-purple-600' },
              { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-600' },
              { name: 'AI/ML', icon: '🤖', color: 'from-pink-500 to-pink-600' }
            ].map((tech, index) => (
              <motion.div 
                key={index} 
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:border-[#1B9AAA]/30">
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Driven Ecosystem Section */}
      <section className="py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] bg-clip-text text-transparent">
                AI-Driven Manufacturing Ecosystem
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Our AI-Powered Ecosystem connects Compliance, Quality, and Manufacturing in one intelligent flow
            </p>
          </motion.div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Central AI Hub */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-32 h-32 bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] rounded-full flex items-center justify-center shadow-2xl">
                <Bot className="w-16 h-16 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] rounded-full animate-ping opacity-20"></div>
            </motion.div>

            {/* Orbiting Modules */}
            <div className="relative w-full h-96">
              {[
                { icon: Shield, label: 'Quality Control', angle: 0, color: 'from-[#06D6A0] to-[#40E0D0]' },
                { icon: FileText, label: 'SOPs', angle: 60, color: 'from-[#40E0D0] to-[#1B9AAA]' },
                { icon: BarChart3, label: 'Analytics', angle: 120, color: 'from-[#1B9AAA] to-[#06D6A0]' },
                { icon: Cog, label: 'Automation', angle: 180, color: 'from-[#06D6A0] to-[#40E0D0]' },
                { icon: Database, label: 'Data Hub', angle: 240, color: 'from-[#40E0D0] to-[#1B9AAA]' },
                { icon: Code, label: 'Integration', angle: 300, color: 'from-[#1B9AAA] to-[#06D6A0]' }
              ].map((module, index) => {
                const radius = 140;
                const x = Math.cos((module.angle * Math.PI) / 180) * radius;
                const y = Math.sin((module.angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ 
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` 
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className={`w-20 h-20 bg-gradient-to-r ${module.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <module.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-sm font-medium text-gray-700">{module.label}</span>
                    </div>
                    
                    {/* Connecting Lines */}
                    <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" width="200" height="200">
                      <line 
                        x1="100" 
                        y1="100" 
                        x2={100 - x} 
                        y2={100 - y} 
                        stroke="#1B9AAA" 
                        strokeWidth="2" 
                        opacity="0.3"
                        strokeDasharray="5,5"
                      />
                    </svg>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Robotics Animation Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-[#1B9AAA]/10 to-[#06D6A0]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] bg-clip-text text-transparent">
                  Robotic Process Automation
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Intelligent robots working alongside humans to optimize manufacturing processes, ensure quality, and maintain compliance.
              </p>
              <div className="space-y-4">
                {[
                  'Automated quality inspections',
                  'Predictive maintenance scheduling',
                  'Real-time process optimization',
                  'Compliance monitoring and reporting'
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#06D6A0]" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-2xl">
                <div className="text-center">
                  <motion.div
                    className="text-8xl mb-4"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🤖
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Smart Manufacturing Robot</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Efficiency</span>
                      <span className="text-[#06D6A0] font-semibold">98.5%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Uptime</span>
                      <span className="text-[#1B9AAA] font-semibold">99.9%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Quality Score</span>
                      <span className="text-[#40E0D0] font-semibold">99.7%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programming & Code Animation Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] bg-clip-text text-transparent">
                Code-Driven Intelligence
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Advanced algorithms and machine learning models powering intelligent manufacturing decisions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div 
              className="bg-gray-900 rounded-3xl p-6 lg:p-8 shadow-2xl overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-gray-400 text-sm">AI_Manufacturing_Engine.py</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <motion.div 
                  className="text-blue-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-purple-400">def</span> optimize_production():
                </motion.div>
                <motion.div 
                  className="text-green-400 ml-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  # AI-powered optimization
                </motion.div>
                <motion.div 
                  className="text-yellow-400 ml-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  efficiency = predict_efficiency()
                </motion.div>
                <motion.div 
                  className="text-cyan-400 ml-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  quality = analyze_quality()
                </motion.div>
                <motion.div 
                  className="text-pink-400 ml-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                >
                  <span className="text-purple-400">return</span> optimize(efficiency, quality)
                </motion.div>
              </div>
              <motion.div 
                className="mt-4 text-green-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                ✓ Production optimized: 94.7% efficiency achieved
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900">
                Intelligent Code Architecture
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our platform leverages cutting-edge programming paradigms to deliver real-time insights and automated decision-making.
              </p>
              <div className="space-y-4">
                {[
                  'Machine Learning Algorithms',
                  'Real-time Data Processing',
                  'Predictive Analytics Engine',
                  'Automated Compliance Checks'
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Code className="w-5 h-5 text-[#1B9AAA]" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Platform Overview */}
      <section className="py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] bg-clip-text text-transparent">
                BhriguOne Platform
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              An omni-connected software platform that transforms regulated manufacturing through intelligent automation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'AI-Powered Intelligence',
                description: 'Machine learning algorithms that predict, optimize, and prevent issues before they occur',
                icon: Brain,
                color: 'from-[#1B9AAA] to-[#06D6A0]',
                features: ['Predictive Analytics', 'Quality Forecasting', 'Anomaly Detection']
              },
              {
                title: 'Compliance Automation',
                description: 'Built-in GxP compliance with automated documentation and audit trail management',
                icon: Shield,
                color: 'from-[#06D6A0] to-[#40E0D0]',
                features: ['FDA Compliance', 'Audit Trails', 'Electronic Signatures']
              },
              {
                title: 'Real-time Integration',
                description: 'Seamless connectivity with existing systems and real-time data synchronization',
                icon: Layers,
                color: 'from-[#40E0D0] to-[#1B9AAA]',
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
                <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 h-full hover:shadow-xl hover:border-[#1B9AAA]/30 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#1B9AAA] rounded-full"></div>
                        <span className="text-gray-500 text-sm">{feature}</span>
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
      <section className="py-12 lg:py-20 bg-gradient-to-br from-[#1B9AAA]/10 to-[#06D6A0]/10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
                <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 hover:shadow-xl hover:border-[#1B9AAA]/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-lg lg:text-xl font-semibold mb-1 text-gray-900">{stat.label}</div>
                  <div className="text-gray-500 text-sm">{stat.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process We Follow */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] bg-clip-text text-transparent">
                Seamless Implementation Process We Follow
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Our proven methodology ensures successful deployment and adoption of intelligent manufacturing solutions
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { step: '01', title: 'Discovery & Analysis', description: 'We analyze your current processes and identify optimization opportunities', active: true },
                { step: '02', title: 'Digital Architecture', description: 'Design compliance-ready digital infrastructure tailored to your needs' },
                { step: '03', title: 'Platform Engineering', description: 'Build and configure BhriguOne modules for your specific requirements' },
                { step: '04', title: 'Validation & Testing', description: 'Comprehensive testing and GxP validation for regulatory compliance' },
                { step: '05', title: 'Deployment & Training', description: 'Seamless go-live with comprehensive user training and support' },
                { step: '06', title: 'Continuous Optimization', description: 'Ongoing monitoring, optimization, and feature enhancements' }
              ].map((process, index) => (
                <motion.div 
                  key={index} 
                  className="group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`rounded-3xl p-6 lg:p-8 h-full transition-all duration-300 ${
                    process.active 
                      ? 'bg-gradient-to-br from-[#1B9AAA] to-[#06D6A0] text-white shadow-xl' 
                      : 'bg-white border border-gray-200 hover:shadow-xl hover:border-[#1B9AAA]/30'
                  }`}>
                    <div className={`text-2xl font-bold mb-4 ${
                      process.active ? 'text-white' : 'text-[#1B9AAA]'
                    }`}>
                      {process.step}
                    </div>
                    <h3 className={`text-xl font-semibold mb-3 ${
                      process.active ? 'text-white' : 'text-gray-900'
                    }`}>
                      {process.title}
                    </h3>
                    <p className={`leading-relaxed ${
                      process.active ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {process.description}
                    </p>
                    <div className="mt-4">
                      <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${
                        process.active ? 'text-white' : 'text-[#1B9AAA]'
                      }`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Slider */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              See how industry leaders have transformed their operations with BhriguOne
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                company: 'Global Pharma Corp',
                industry: 'Pharmaceuticals',
                image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=400',
                results: ['75% reduction in audit prep time', '50% lower compliance costs', '99.9% system uptime'],
                icon: '🏭'
              },
              {
                company: 'MedDevice Solutions',
                industry: 'Medical Devices',
                image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400',
                results: ['40% faster product launches', '60% reduction in documentation errors', '100% audit success rate'],
                icon: '🏥'
              },
              {
                company: 'BioTech Innovations',
                industry: 'Biotechnology',
                image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
                results: ['30% increase in yield', '85% reduction in batch failures', '50% faster time to market'],
                icon: '🧬'
              }
            ].map((study, index) => (
              <motion.div 
                key={index} 
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:border-[#1B9AAA]/30 transition-all duration-300">
                  <div className="relative h-48">
                    <img 
                      src={study.image}
                      alt={study.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-3xl">{study.icon}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{study.company}</h3>
                      <span className="text-sm text-[#1B9AAA] bg-[#1B9AAA]/10 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-[#06D6A0]" />
                          <span className="text-gray-600 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-4 text-[#1B9AAA] hover:text-[#06D6A0] font-medium flex items-center group-hover:translate-x-1 transition-transform">
                      Read Full Case Study <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-[#1B9AAA]/10 to-[#06D6A0]/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B9AAA]/5 to-[#06D6A0]/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] bg-clip-text text-transparent">Manufacturing</span>?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Join industry leaders who are revolutionizing their operations with intelligent manufacturing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#1B9AAA]/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center relative overflow-hidden"
              >
                <span className="relative z-10">Schedule Consultation</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#06D6A0] to-[#40E0D0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                to="/solutions"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-[#1B9AAA] hover:bg-[#1B9AAA]/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
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