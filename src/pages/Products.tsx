import React from 'react';
import { ArrowRight, CheckCircle, Cpu, Database, Shield, BarChart3, Cloud, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const Products: React.FC = () => {
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
                BhriguOne Platform Modules
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive modules designed to work seamlessly together for complete manufacturing intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manufacturing Execution System */}
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
                  Manufacturing Execution System (MES)
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Real-time production control and monitoring with complete batch genealogy and traceability for regulated manufacturing.
              </p>
              <div className="space-y-4">
                {[
                  'Real-time production scheduling and dispatching',
                  'Batch record automation and electronic signatures',
                  'Material tracking and genealogy',
                  'Equipment integration and control',
                  'Quality checkpoint integration',
                  'Regulatory compliance reporting'
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
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl mb-6 flex items-center justify-center">
                <Cpu className="w-16 h-16 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Smart Manufacturing Control</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Automate production workflows while maintaining complete compliance with regulatory requirements.
              </p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200">
                Explore MES Module
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LIMS */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl mb-6 flex items-center justify-center">
                <Database className="w-16 h-16 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Intelligent Lab Management</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Streamline laboratory operations with automated sample tracking, instrument integration, and results management.
              </p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
                Explore LIMS Module
              </button>
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Laboratory Information Management System (LIMS)
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Complete laboratory data management with instrument integration, automated workflows, and comprehensive reporting.
              </p>
              <div className="space-y-4">
                {[
                  'Sample registration and tracking',
                  'Instrument data integration',
                  'Automated testing workflows',
                  'Out-of-specification (OOS) management',
                  'Certificate of analysis generation',
                  'Stability study management'
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
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
          </div>
        </div>
      </section>

      {/* QMS */}
      <section className="py-20 bg-gradient-to-br from-green-900/20 to-teal-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Quality Management System (QMS)
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Comprehensive quality management with document control, change management, and CAPA workflows.
              </p>
              <div className="space-y-4">
                {[
                  'Document control and versioning',
                  'Change control workflows',
                  'CAPA (Corrective and Preventive Actions)',
                  'Deviation management',
                  'Supplier quality management',
                  'Audit and inspection readiness'
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
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-video bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-2xl mb-6 flex items-center justify-center">
                <Shield className="w-16 h-16 text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Quality Excellence</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Maintain the highest quality standards with automated workflows and comprehensive tracking.
              </p>
              <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-200">
                Explore QMS Module
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-video bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl mb-6 flex items-center justify-center">
                <Shield className="w-16 h-16 text-orange-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Compliance Assurance</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Built-in regulatory compliance with automated reporting and audit trail management.
              </p>
              <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200">
                Explore Compliance Module
              </button>
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Regulatory Compliance Engine
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Automated compliance management with built-in regulatory frameworks and audit trail capabilities.
              </p>
              <div className="space-y-4">
                {[
                  'GxP compliance framework',
                  'Electronic signature management',
                  'Audit trail and data integrity',
                  'Regulatory submission support',
                  'Validation documentation',
                  'Risk assessment integration'
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
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
          </div>
        </div>
      </section>

      {/* Analytics & Reporting */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Analytics & Reporting
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Advanced analytics and reporting with real-time dashboards and predictive insights.
              </p>
              <div className="space-y-4">
                {[
                  'Real-time KPI dashboards',
                  'Predictive analytics and forecasting',
                  'Trend analysis and pattern recognition',
                  'Custom report builder',
                  'Automated alert systems',
                  'Executive summary reporting'
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
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-video bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl mb-6 flex items-center justify-center">
                <BarChart3 className="w-16 h-16 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Data-Driven Insights</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transform manufacturing data into actionable insights with advanced analytics and AI.
              </p>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-200">
                Explore Analytics Module
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Hub */}
      <section className="py-20 bg-gradient-to-br from-teal-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Integration Hub
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Seamlessly connect all your systems and data sources through our comprehensive integration platform.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'API Management',
                description: 'RESTful APIs and GraphQL for seamless system integration',
                icon: Cloud,
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Data Synchronization',
                description: 'Real-time data sync across all connected systems',
                icon: Zap,
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Legacy System Support',
                description: 'Connect with existing ERP, MES, and laboratory systems',
                icon: Database,
                color: 'from-purple-500 to-purple-600'
              }
            ].map((integration, index) => (
              <motion.div 
                key={index} 
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${integration.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <integration.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{integration.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{integration.description}</p>
                  <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Module Comparison */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Choose Your Configuration
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Select individual modules or deploy the complete BhriguOne platform.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Essential',
                  price: 'Custom Pricing',
                  description: 'Core modules for small to medium operations',
                  modules: ['MES', 'QMS', 'Basic Analytics'],
                  features: ['Up to 5 users', 'Basic reporting', 'Email support']
                },
                {
                  name: 'Professional',
                  price: 'Custom Pricing',
                  description: 'Complete solution for regulated manufacturing',
                  modules: ['MES', 'LIMS', 'QMS', 'Compliance', 'Analytics'],
                  features: ['Up to 50 users', 'Advanced analytics', 'Priority support'],
                  popular: true
                },
                {
                  name: 'Enterprise',
                  price: 'Custom Pricing',
                  description: 'Full platform with custom integrations',
                  modules: ['All Modules', 'Custom Development', 'Integration Hub'],
                  features: ['Unlimited users', 'Custom features', 'Dedicated support']
                }
              ].map((plan, index) => (
                <motion.div 
                  key={index} 
                  className={`rounded-3xl p-8 relative ${plan.popular ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500/30' : 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold mb-2 text-white">{plan.name}</h3>
                  <p className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{plan.price}</p>
                  <p className="mb-6 text-gray-300 leading-relaxed">{plan.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {plan.modules.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{module}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-gray-400">
                        • {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25' 
                      : 'bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-blue-600 hover:to-purple-600'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/30 to-blue-900/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Manufacturing</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how BhriguOne modules can revolutionize your operations with a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center relative overflow-hidden">
                <span className="relative z-10">Schedule Product Demo</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button className="border-2 border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                Download Product Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};