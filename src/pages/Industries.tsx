import React from 'react';
import { ArrowRight, Shield, Award, TrendingUp, FileText, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const Industries: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#1B9AAA]/10 to-[#06D6A0]/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B9AAA]/5 to-[#06D6A0]/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] bg-clip-text text-transparent">
                Industry Solutions
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Specialized BhriguOne configurations for highly regulated manufacturing industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Pharmaceuticals */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 hover:shadow-xl hover:border-[#1B9AAA]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">💊</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Pharmaceuticals</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive solutions for drug manufacturing with FDA, EMA, and global regulatory compliance built-in.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'API Manufacturing Control',
                  'Clinical Trial Management',
                  'Batch Record Automation',
                  'Quality Control Integration',
                  'Regulatory Reporting'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-[#1B9AAA]" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#1B9AAA]/25 transition-all duration-200 flex items-center">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </motion.div>

            {/* Medical Devices */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 hover:shadow-xl hover:border-[#1B9AAA]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#06D6A0] to-[#40E0D0] rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">🏥</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Medical Devices</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ISO 13485 compliant manufacturing solutions for medical device production and quality management.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Device History Records',
                  'Design Controls',
                  'Risk Management (ISO 14971)',
                  'Post-Market Surveillance',
                  'FDA 510(k) Support'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-[#06D6A0]" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-gradient-to-r from-[#06D6A0] to-[#40E0D0] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#06D6A0]/25 transition-all duration-200 flex items-center">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </motion.div>

            {/* Food & Beverage */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 hover:shadow-xl hover:border-[#1B9AAA]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#40E0D0] to-[#1B9AAA] rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">🍎</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Food & Beverage</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                HACCP and FDA food safety compliant solutions for food and beverage manufacturing.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Recipe Management',
                  'Allergen Control',
                  'Traceability Systems',
                  'Temperature Monitoring',
                  'Nutritional Analysis'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-[#40E0D0]" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-gradient-to-r from-[#40E0D0] to-[#1B9AAA] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#40E0D0]/25 transition-all duration-200 flex items-center">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </motion.div>

            {/* Biotech */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 hover:shadow-xl hover:border-[#1B9AAA]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1B9AAA] to-[#40E0D0] rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">🧬</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Biotech</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                GMP compliant solutions for biotechnology manufacturing with advanced process control.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Bioreactor Management',
                  'Cell Culture Monitoring',
                  'Purification Tracking',
                  'Biosafety Protocols',
                  'Scale-up Management'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-[#1B9AAA]" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-gradient-to-r from-[#1B9AAA] to-[#40E0D0] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#1B9AAA]/25 transition-all duration-200 flex items-center">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nutraceuticals Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#06D6A0] to-[#1B9AAA] rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">💊</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Nutraceuticals</h2>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                cGMP compliant solutions for dietary supplement and nutraceutical manufacturing with comprehensive quality control.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  'Ingredient Tracking',
                  'Potency Testing',
                  'Label Claims Verification',
                  'Stability Studies',
                  'Supplier Qualification',
                  'Contamination Control'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-[#06D6A0]" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-gradient-to-r from-[#06D6A0] to-[#1B9AAA] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-[#06D6A0]/25 transition-all duration-200 flex items-center">
                Explore Nutraceutical Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Benefits */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-[#1B9AAA]/10 to-[#06D6A0]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] bg-clip-text text-transparent">
                Common Benefits Across All Industries
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Regardless of your industry, BhriguOne delivers consistent value and compliance.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Compliance Assurance',
                description: 'Built-in regulatory compliance reduces audit preparation time by 75%.',
                icon: Shield
              },
              {
                title: 'Quality Excellence',
                description: 'Automated quality control processes improve consistency and reduce defects.',
                icon: Award
              },
              {
                title: 'Operational Efficiency',
                description: 'Streamlined workflows and automation increase productivity by 40%.',
                icon: Zap
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 hover:shadow-xl hover:border-[#1B9AAA]/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to <span className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] bg-clip-text text-transparent">Transform</span> Your Industry?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Discover how BhriguOne can revolutionize your manufacturing operations with industry-specific solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#1B9AAA]/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center relative overflow-hidden">
                <span className="relative z-10">Schedule Industry Consultation</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#06D6A0] to-[#40E0D0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-[#1B9AAA] hover:bg-[#1B9AAA]/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                Download Industry Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};