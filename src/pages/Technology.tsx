import React from 'react';
import { ArrowRight, Cpu, Cloud, Shield, Database, BarChart3, Zap, Globe, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export const Technology: React.FC = () => {
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
                Advanced Platform Architecture
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Built on cutting-edge technology stack designed for the future of regulated manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Architecture */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Core Architecture
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Microservices-based architecture with cloud-native design for scalability and reliability.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Microservices Architecture',
                description: 'Modular, scalable services that can be deployed independently.',
                icon: Cpu,
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Cloud-Native Design',
                description: 'Built for cloud deployment with containerization and orchestration.',
                icon: Cloud,
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Security First',
                description: 'Enterprise-grade security with encryption and compliance controls.',
                icon: Shield,
                color: 'from-red-500 to-red-600'
              }
            ].map((item, index) => (
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
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Machine Learning */}
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
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI & Machine Learning
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Advanced AI capabilities that transform manufacturing data into actionable insights and predictive intelligence.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Predictive Maintenance',
                    description: 'AI algorithms predict equipment failures before they occur, reducing downtime by 60%.'
                  },
                  {
                    title: 'Quality Prediction',
                    description: 'Machine learning models predict product quality based on process parameters.'
                  },
                  {
                    title: 'Anomaly Detection',
                    description: 'Real-time detection of process deviations and quality issues.'
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
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
                <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl mb-6 flex items-center justify-center">
                  <Cpu className="w-16 h-16 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">AI-Powered Analytics</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Advanced machine learning models trained on manufacturing data to provide intelligent insights.
                </p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IoT Ecosystem */}
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
                IoT Ecosystem
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive IoT integration for real-time monitoring and control of manufacturing processes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Sensor Integration',
                description: 'Connect thousands of sensors for real-time monitoring.',
                icon: Database,
                metric: '10,000+'
              },
              {
                title: 'Edge Computing',
                description: 'Process data at the edge for faster response times.',
                icon: Zap,
                metric: '<10ms'
              },
              {
                title: 'Data Streaming',
                description: 'Real-time data streaming and processing capabilities.',
                icon: BarChart3,
                metric: '1M+/sec'
              },
              {
                title: 'Device Management',
                description: 'Centralized management of all connected devices.',
                icon: Globe,
                metric: '24/7'
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">{item.metric}</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Analytics */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-white">Real-Time Analytics Dashboard</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Production Efficiency', value: '94%', color: 'bg-green-400' },
                    { label: 'Quality Score', value: '98.7%', color: 'bg-blue-400' },
                    { label: 'Compliance Status', value: '100%', color: 'bg-purple-400' }
                  ].map((metric, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">{metric.label}</span>
                        <span className="text-white font-semibold">{metric.value}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className={`${metric.color} h-2 rounded-full`} style={{ width: metric.value }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
                  Advanced Data Analytics
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Transform manufacturing data into actionable insights with our advanced analytics platform.
              </p>
              <div className="space-y-4">
                {[
                  'Real-time performance monitoring',
                  'Predictive quality analytics',
                  'Trend analysis and forecasting',
                  'Custom KPI dashboards',
                  'Automated reporting and alerts'
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <BarChart3 className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cloud Infrastructure */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Cloud Infrastructure
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Scalable, secure, and compliant cloud infrastructure designed for regulated industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Multi-Cloud Support',
                description: 'Deploy on AWS, Azure, or Google Cloud with consistent performance.',
                icon: Cloud,
                features: ['AWS', 'Azure', 'Google Cloud', 'Hybrid Options']
              },
              {
                title: 'Security & Compliance',
                description: 'Enterprise-grade security with SOC 2, ISO 27001, and GxP compliance.',
                icon: Lock,
                features: ['SOC 2 Type II', 'ISO 27001', 'GxP Validated', 'GDPR Compliant']
              },
              {
                title: 'Scalability',
                description: 'Auto-scaling infrastructure that grows with your business needs.',
                icon: TrendingUp,
                features: ['Auto-scaling', 'Load Balancing', 'Global CDN', '99.9% Uptime']
              }
            ].map((item, index) => (
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
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Integration Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Seamlessly connect with existing systems and third-party applications through our robust API platform.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">API Management</h3>
              <div className="space-y-4">
                {[
                  'RESTful API architecture',
                  'GraphQL support',
                  'Webhook integrations',
                  'Real-time data sync',
                  'API versioning and documentation'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">System Integrations</h3>
              <div className="space-y-4">
                {[
                  'ERP systems (SAP, Oracle)',
                  'Laboratory instruments',
                  'Manufacturing equipment',
                  'Quality management systems',
                  'Regulatory databases'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Database className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Experience Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technology</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how our advanced platform architecture can transform your manufacturing operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center relative overflow-hidden">
                <span className="relative z-10">Schedule Technical Demo</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button className="border-2 border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                Download Architecture Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const TrendingUp = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);