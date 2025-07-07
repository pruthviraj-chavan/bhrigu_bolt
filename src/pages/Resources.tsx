import React from 'react';
import { ArrowRight, BookOpen, FileText, Video, Calendar, Download, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const Resources: React.FC = () => {
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
                Knowledge & Innovation Hub
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Stay ahead with insights, best practices, and innovations in regulated manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Featured White Paper */}
            <motion.div 
              className="lg:col-span-2 bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 mr-3 text-[#1B9AAA]" />
                <span className="text-[#1B9AAA] font-medium">Featured White Paper</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                Digital Transformation in Regulated Industries: The Complete Guide
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Comprehensive analysis of Industry 4.0/5.0 adoption challenges and solutions for pharmaceutical, medical device, and food manufacturing sectors.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-500">42 pages</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">Published Dec 2024</span>
                </div>
                <button className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#1B9AAA]/25 transition-all duration-200 flex items-center">
                  Download Free
                  <Download className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Latest Blog Posts */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Latest Insights</h3>
              {[
                {
                  title: 'AI in Pharmaceutical Manufacturing',
                  excerpt: 'How artificial intelligence is transforming drug production and quality control.',
                  date: 'Dec 15, 2024',
                  readTime: '5 min read'
                },
                {
                  title: 'IoT Implementation in Food Safety',
                  excerpt: 'Best practices for deploying IoT sensors in food manufacturing environments.',
                  date: 'Dec 10, 2024',
                  readTime: '7 min read'
                },
                {
                  title: 'Medical Device Compliance Automation',
                  excerpt: 'Streamlining ISO 13485 compliance with automated quality systems.',
                  date: 'Dec 5, 2024',
                  readTime: '6 min read'
                }
              ].map((post, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#1B9AAA]/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h4>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.date} • {post.readTime}</span>
                    <button className="text-[#1B9AAA] hover:text-[#06D6A0] font-medium flex items-center">
                      Read More <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
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
                Resource Categories
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Explore our comprehensive library of industry-specific content and technical resources.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'White Papers',
                description: 'In-depth analysis and research on regulated manufacturing trends',
                icon: FileText,
                count: '15+',
                color: 'from-[#1B9AAA] to-[#06D6A0]'
              },
              {
                title: 'Case Studies',
                description: 'Real-world implementation success stories from industry leaders',
                icon: Award,
                count: '20+',
                color: 'from-[#06D6A0] to-[#40E0D0]'
              },
              {
                title: 'Webinars',
                description: 'Expert-led sessions on compliance, technology, and best practices',
                icon: Video,
                count: '30+',
                color: 'from-[#40E0D0] to-[#1B9AAA]'
              },
              {
                title: 'Blog Articles',
                description: 'Regular insights and updates from our industry experts',
                icon: BookOpen,
                count: '100+',
                color: 'from-[#1B9AAA] to-[#40E0D0]'
              },
              {
                title: 'Documentation',
                description: 'Technical guides, API docs, and implementation resources',
                icon: FileText,
                count: '50+',
                color: 'from-[#06D6A0] to-[#1B9AAA]'
              },
              {
                title: 'Events',
                description: 'Industry conferences, workshops, and networking opportunities',
                icon: Calendar,
                count: '25+',
                color: 'from-[#40E0D0] to-[#06D6A0]'
              }
            ].map((category, index) => (
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
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                    <span className="text-sm font-medium text-gray-500">{category.count}</span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                  <button className="text-[#1B9AAA] hover:text-[#06D6A0] font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Explore <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* White Papers Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-[#1B9AAA]/10 to-[#06D6A0]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#06D6A0] to-[#40E0D0] bg-clip-text text-transparent">
                Featured White Papers
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Deep dive into the latest trends and innovations in regulated manufacturing.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'AI in Pharmaceutical Manufacturing',
                description: 'Comprehensive guide to implementing AI and machine learning in drug production.',
                pages: 35,
                category: 'Pharmaceuticals',
                featured: true
              },
              {
                title: 'IoT Implementation in Food Safety',
                description: 'Best practices for deploying IoT sensors and systems in food manufacturing.',
                pages: 28,
                category: 'Food & Beverage'
              },
              {
                title: 'Medical Device Compliance Automation',
                description: 'Streamlining ISO 13485 compliance with automated quality management systems.',
                pages: 42,
                category: 'Medical Devices'
              }
            ].map((paper, index) => (
              <motion.div 
                key={index} 
                className={`rounded-3xl p-6 lg:p-8 ${paper.featured ? 'bg-gradient-to-br from-[#1B9AAA]/20 to-[#06D6A0]/20 border-2 border-[#1B9AAA]/30' : 'bg-white border border-gray-200'} hover:shadow-xl hover:border-[#1B9AAA]/30 transition-all duration-300`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-[#1B9AAA] bg-[#1B9AAA]/10 px-3 py-1 rounded-full">
                    {paper.category}
                  </span>
                  {paper.featured && (
                    <span className="text-xs font-medium text-[#06D6A0] bg-[#06D6A0]/10 px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{paper.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{paper.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{paper.pages} pages</span>
                  <button className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] text-white px-4 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-[#1B9AAA]/25 transition-all duration-200 flex items-center">
                    Download <Download className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#40E0D0] to-[#1B9AAA] bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              See how industry leaders have transformed their operations with BhriguOne.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                company: 'Global Pharma Corp',
                industry: 'Pharmaceuticals',
                challenge: 'Reducing compliance costs and audit preparation time',
                solution: 'BhriguOne MES and QMS implementation',
                results: ['75% reduction in audit prep time', '50% lower compliance costs', '99.9% system uptime'],
                image: '🏭'
              },
              {
                company: 'MedDevice Solutions',
                industry: 'Medical Devices',
                challenge: 'Streamlining ISO 13485 compliance processes',
                solution: 'Complete BhriguOne platform deployment',
                results: ['40% faster product launches', '60% reduction in documentation errors', '100% audit success rate'],
                image: '🏥'
              }
            ].map((study, index) => (
              <motion.div 
                key={index} 
                className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 shadow-2xl hover:shadow-xl hover:border-[#1B9AAA]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{study.image}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{study.company}</h3>
                    <span className="text-sm text-[#06D6A0] bg-[#06D6A0]/10 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-[#06D6A0] rounded-full mr-2"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button className="mt-6 text-[#1B9AAA] hover:text-[#06D6A0] font-medium flex items-center">
                  Read Full Case Study <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
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
                Upcoming Events
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Join us at industry conferences and exclusive webinars.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Industry 4.0 in Pharmaceuticals',
                type: 'Webinar',
                date: 'Jan 15, 2025',
                time: '2:00 PM EST',
                description: 'Explore the latest trends in pharmaceutical manufacturing digitization.',
                status: 'Registration Open'
              },
              {
                title: 'ISPE Annual Meeting',
                type: 'Conference',
                date: 'Mar 20-22, 2025',
                time: 'San Diego, CA',
                description: 'Visit us at booth #245 to see BhriguOne in action.',
                status: 'Coming Soon'
              },
              {
                title: 'FDA Compliance Workshop',
                type: 'Workshop',
                date: 'Feb 10, 2025',
                time: '10:00 AM EST',
                description: 'Deep dive into FDA compliance requirements and automation.',
                status: 'Limited Seats'
              }
            ].map((event, index) => (
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
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-[#1B9AAA] bg-[#1B9AAA]/10 px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                    <span className="text-xs font-medium text-[#06D6A0] bg-[#06D6A0]/10 px-2 py-1 rounded-full">
                      {event.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] text-white px-4 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-[#1B9AAA]/25 transition-all duration-200">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
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
              Stay <span className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] bg-clip-text text-transparent">Updated</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Get the latest insights, white papers, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1B9AAA] focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#1B9AAA]/25 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};