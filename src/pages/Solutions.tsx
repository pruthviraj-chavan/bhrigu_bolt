import React from 'react';
import { ArrowRight, CheckCircle, Zap, Shield, BarChart3, Cpu, Database, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

export const Solutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BhriguOne Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The comprehensive solution for regulated manufacturing, combining AI, IoT, and compliance in one powerful platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  All-in-One Manufacturing Intelligence
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                BhriguOne integrates every aspect of regulated manufacturing into a single, intelligent platform. 
                From production planning to quality control, compliance reporting to predictive maintenance.
              </p>
              <div className="space-y-4">
                {[
                  'Manufacturing Execution System (MES)',
                  'Laboratory Information Management (LIMS)',
                  'Quality Management System (QMS)',
                  'Regulatory Compliance Engine',
                  'Advanced Analytics & AI',
                  'IoT Integration Hub'
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{feature}</span>
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
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl mb-6 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Platform Demo</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  See BhriguOne in action with our interactive demonstration showcasing real manufacturing scenarios.
                </p>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200">
                  Request Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Core Platform Modules
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Integrated modules designed specifically for regulated manufacturing environments.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Manufacturing Execution',
                description: 'Real-time production control, scheduling, and monitoring with full traceability.',
                icon: Cpu,
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Quality Management',
                description: 'Comprehensive QMS with automated workflows and compliance tracking.',
                icon: Shield,
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Laboratory Management',
                description: 'Complete LIMS solution for sample tracking and analytical data management.',
                icon: Database,
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Regulatory Compliance',
                description: 'Built-in GxP compliance with automated reporting and audit trails.',
                icon: CheckCircle,
                color: 'from-orange-500 to-orange-600'
              },
              {
                title: 'Advanced Analytics',
                description: 'AI-powered insights, predictive maintenance, and performance optimization.',
                icon: BarChart3,
                color: 'from-teal-500 to-teal-600'
              },
              {
                title: 'Cloud Integration',
                description: 'Secure cloud deployment with hybrid options and scalable architecture.',
                icon: Cloud,
                color: 'from-indigo-500 to-indigo-600'
              }
            ].map((module, index) => (
              <motion.div 
                key={index} 
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{module.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{module.description}</p>
                  <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Why Choose BhriguOne?
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Experience the advantages of a purpose-built platform for regulated manufacturing.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                {
                  title: 'Reduced Implementation Time',
                  description: 'Pre-configured modules and templates accelerate deployment by 60%.',
                  metric: '60%'
                },
                {
                  title: 'Lower Total Cost of Ownership',
                  description: 'Integrated platform eliminates multiple vendor costs and complexity.',
                  metric: '40%'
                },
                {
                  title: 'Improved Compliance',
                  description: 'Built-in GxP compliance reduces audit preparation time significantly.',
                  metric: '75%'
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-4 p-6 bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-gray-600/50 transition-all duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{benefit.metric}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Ready to Transform Your Manufacturing?</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Join leading manufacturers who have already modernized their operations with BhriguOne.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200">
                  Schedule Demo
                </button>
                <button className="w-full border-2 border-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-200">
                  Download Brochure
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};