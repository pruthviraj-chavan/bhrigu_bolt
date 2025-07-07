import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: '',
    consultationType: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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
                Let's Shape the Future Together
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to digitize your operations? Our experts are here to help you transform your regulated manufacturing processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#1B9AAA] focus:border-transparent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#1B9AAA] focus:border-transparent transition-all duration-200"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#1B9AAA] focus:border-transparent transition-all duration-200"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry *
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#1B9AAA] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Industry</option>
                      <option value="pharmaceuticals">Pharmaceuticals</option>
                      <option value="medical-devices">Medical Devices</option>
                      <option value="food-beverage">Food & Beverage</option>
                      <option value="biotech">Biotech</option>
                      <option value="nutraceuticals">Nutraceuticals</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Consultation Type
                  </label>
                  <select
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#1B9AAA] focus:border-transparent transition-all duration-200"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="demo">Product Demo</option>
                    <option value="compliance">Compliance Consultation</option>
                    <option value="implementation">Implementation Planning</option>
                    <option value="partnership">Partnership Discussion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#1B9AAA] focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your manufacturing challenges and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#1B9AAA]/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our team of experts is ready to help you transform your regulated manufacturing operations.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@bhrigu.tech</p>
                    <p className="text-gray-600">support@bhrigu.tech</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#06D6A0] to-[#40E0D0] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 123-4568 (Support)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#40E0D0] to-[#1B9AAA] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">123 Innovation Drive</p>
                    <p className="text-gray-600">San Francisco, CA 94105</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1B9AAA] to-[#40E0D0] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p className="text-gray-600">24/7 Support Available</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Response Guarantee</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#06D6A0]" />
                    <span className="text-gray-600">Response within 1 hour during business hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#06D6A0]" />
                    <span className="text-gray-600">24/7 support for critical issues</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#06D6A0]" />
                    <span className="text-gray-600">Dedicated account manager for enterprise clients</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Consultations */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] bg-clip-text text-transparent">
                Industry-Specific Consultations
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Our experts specialize in the unique challenges of each regulated industry.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                industry: 'Pharmaceuticals',
                expert: 'Dr. Sarah Chen, PharmD',
                specialty: 'FDA Compliance & cGMP',
                icon: '💊',
                color: 'from-[#1B9AAA] to-[#06D6A0]'
              },
              {
                industry: 'Medical Devices',
                expert: 'Michael Rodriguez, P.E.',
                specialty: 'ISO 13485 & FDA 510(k)',
                icon: '🏥',
                color: 'from-[#06D6A0] to-[#40E0D0]'
              },
              {
                industry: 'Food & Beverage',
                expert: 'Dr. Lisa Park, PhD',
                specialty: 'HACCP & Food Safety',
                icon: '🍎',
                color: 'from-[#40E0D0] to-[#1B9AAA]'
              },
              {
                industry: 'Biotech',
                expert: 'Dr. James Wilson, PhD',
                specialty: 'GMP & Biosafety',
                icon: '🧬',
                color: 'from-[#1B9AAA] to-[#40E0D0]'
              },
              {
                industry: 'Nutraceuticals',
                expert: 'Dr. Amanda Foster, PharmD',
                specialty: 'Dietary Supplement cGMP',
                icon: '💊',
                color: 'from-[#06D6A0] to-[#1B9AAA]'
              },
              {
                industry: 'Technology',
                expert: 'David Kumar, CTO',
                specialty: 'AI & IoT Integration',
                icon: '💻',
                color: 'from-[#40E0D0] to-[#06D6A0]'
              }
            ].map((consultation, index) => (
              <motion.div 
                key={index} 
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 h-full hover:shadow-xl hover:border-[#1B9AAA]/30 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${consultation.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-xl">{consultation.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{consultation.industry}</h3>
                  <p className="text-gray-600 mb-2">{consultation.expert}</p>
                  <p className="text-sm text-gray-500 mb-4">{consultation.specialty}</p>
                  <button className="w-full bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] text-white px-4 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-[#1B9AAA]/25 transition-all duration-200 flex items-center justify-center">
                    Book Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-[#1B9AAA]/10 to-[#06D6A0]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">Request a Personalized Demo</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    See BhriguOne in action with a customized demonstration tailored to your industry and use cases.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#1B9AAA]" />
                      <span className="text-gray-600">Industry-specific scenarios</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#1B9AAA]" />
                      <span className="text-gray-600">Live Q&A with experts</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#1B9AAA]" />
                      <span className="text-gray-600">Custom ROI analysis</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#1B9AAA]/20 to-[#06D6A0]/20 rounded-3xl p-6 mb-6">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">30-Minute Demo</h3>
                    <p className="text-gray-600">Free consultation included</p>
                  </div>
                  <button className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#1B9AAA]/25 transition-all duration-300 transform hover:scale-105">
                    Schedule Demo Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Inquiries */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#06D6A0] to-[#40E0D0] bg-clip-text text-transparent">
                Partnership Opportunities
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Interested in becoming a technology partner, reseller, or strategic alliance? Let's explore opportunities together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: 'Technology Integration',
                  description: 'Integrate your solutions with BhriguOne platform',
                  icon: '🔧'
                },
                {
                  title: 'Reseller Program',
                  description: 'Join our global network of certified partners',
                  icon: '🤝'
                },
                {
                  title: 'Strategic Alliance',
                  description: 'Collaborate on industry-specific solutions',
                  icon: '🌟'
                }
              ].map((partnership, index) => (
                <motion.div 
                  key={index} 
                  className="group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 h-full hover:shadow-xl hover:border-[#1B9AAA]/30 transition-all duration-300">
                    <div className="text-4xl mb-4">{partnership.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{partnership.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{partnership.description}</p>
                    <button className="text-[#1B9AAA] hover:text-[#06D6A0] font-medium flex items-center justify-center">
                      Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};