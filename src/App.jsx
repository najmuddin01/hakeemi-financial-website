import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowRight, 
  BarChart3, 
  TrendingUp, 
  Calculator, 
  Target, 
  Shield, 
  Users, 
  Award,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'
import './App.css'
import logo from './assets/logo-transparent-new.png'
import founderImage from './assets/founder-image.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'founder', 'services', 'competencies', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const services = [
    {
      title: "Financial Planning, Analysis & Reporting",
      description: "We offer comprehensive financial modeling, analysis, and reporting to ensure accurate forecasting, budgeting, and decision-making. Our team delivers customized financial statements, conducts variance analysis, and provides essential insights.",
      icon: BarChart3,
      features: ["Financial Modeling", "Variance Analysis", "Custom Reports", "Strategic Insights"]
    },
    {
      title: "Costing and Pricing Templates",
      description: "We create structured valuation and pricing templates that assist businesses to compute and regulate expenses, enhance pricing tactics, and streamline decision-making.",
      icon: Calculator,
      features: ["Cost Control", "Pricing Strategy", "Profit Margins", "Financial Templates"]
    },
    {
      title: "Performance Measurement and Improvement",
      description: "We develop customized performance measurement frameworks to track key business metrics, identify areas for improvement, and enhance operational efficiency.",
      icon: TrendingUp,
      features: ["KPI Tracking", "Performance Analytics", "Operational Efficiency", "Growth Strategies"]
    },
    {
      title: "Process Optimization",
      description: "We specialize in identifying inefficiencies inside financial procedures and executing solutions to refine workflow, reduce expenditures, and expand accuracy.",
      icon: Target,
      features: ["Workflow Optimization", "Cost Reduction", "Automation", "System Enhancement"]
    }
  ]

  const competencies = [
    { name: "Budgeting & Forecasting", description: "Creating precise financial forecasts to guide strategic decisions." },
    { name: "P&L Management", description: "Ensuring profitability and financial stability." },
    { name: "Financial Analysis", description: "Evaluating past performance and forecasting future outcomes." },
    { name: "Costing & Pricing", description: "Developing tools for effective cost management and pricing." },
    { name: "Project Finance & Valuations", description: "Managing project finances and business valuations." },
    { name: "Process Optimization", description: "Enhancing efficiency through streamlined processes & automation." },
    { name: "Internal Controls", description: "Strengthening controls to mitigate risks and ensure compliance." },
    { name: "Risk Assessment", description: "Identifying and managing risks with effective mitigation." },
    { name: "Bid Support", description: "Providing financial insights for successful bids and contract negotiations." }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-green-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logo} alt="Hakeemi Logo" className="h-12 w-auto hover:scale-105 transition-transform duration-200" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'founder', 'services', 'competencies', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item 
                      ? 'text-green-600 font-semibold' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {item === 'competencies' ? 'Core Competencies' : item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-green-100">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['home', 'about', 'founder', 'services', 'competencies', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 capitalize"
                  >
                    {item === 'competencies' ? 'Core Competencies' : item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  Financial Excellence Since 2004
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-green-600">HAKEEMI</span><br />
                  Financial Consultancy & Transformation
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Empowering your financial future through innovative strategies and transformative solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => scrollToSection('services')}
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">100+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">2</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={logo} 
                  alt="Hakeemi Financial Consultancy" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-3xl opacity-20 transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-green-600">Our Company</span>
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                With over <strong>20 years</strong> empowering large enterprises across India and the Middle East, 
                Hakeemi Financial Consultancy & Transformation provides strategic financial guidance to help 
                businesses reach ambitious goals. Our experts dive deep to understand your operations, then 
                leverage analytical models, bespoke KPI dashboards, and data visualizations to deliver actionable insights.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our services encompass everything from high-level advisory to detailed budgeting, cost optimization, 
                and process enhancement. We customize financial best practices to boost profitability, streamline 
                operations, mitigate risk, and drive well-informed decision making for sustainable growth.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Armed with state-of-the-art tools, our team operates as an extension of your financial leadership 
                in plain language. We become long-term partners in prosperity through financial mastery, guiding 
                global expansions and daily decisions with equal dexterity.
              </p>

              <Button 
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us to Elevate Your Business
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm">Seasoned professionals with deep industry expertise</p>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Risk Mitigation</h3>
                <p className="text-gray-600 text-sm">Comprehensive risk assessment and management strategies</p>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Growth Focus</h3>
                <p className="text-gray-600 text-sm">Strategies designed for sustainable business growth</p>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600 text-sm">Track record of successful transformations</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Founder</span>
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Hakeem Fakhruddin</h3>
                <p className="text-lg text-green-600 font-semibold">Founder</p>
                <p className="text-gray-600">Hakeemi Financial Consultancy & Transformation</p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Hakeem Fakhruddin, the founder of Hakeemi Financial Consultancy & Transformation, is a 
                distinguished finance expert with over <strong>20 years of experience</strong> in the Middle East and India. 
                His career spans high-level management roles at multinational corporations, where he developed 
                expertise in financial planning, analysis, budgeting, costing, project finance, and strategic counselling.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Hakeem has led initiatives that have significantly boosted profitability, optimized operations, 
                and mitigated risks. His accomplishments include numerous leadership awards and the development 
                of fiscal frameworks that have driven substantial revenue growth and cost efficiencies.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Financial Planning', 'Strategic Analysis', 'Risk Management', 'Process Optimization'].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-80 h-80 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
                <img 
                  src={founderImage} 
                  alt="Hakeem Fakhruddin - Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-600 text-white p-3 rounded-full">
                  <Award className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Services</span>
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to drive your business forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-600 transition-colors">
                      <service.icon className="h-8 w-8 text-green-600 group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section id="competencies" className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core <span className="text-green-200">Competencies</span>
            </h2>
            <div className="w-24 h-1 bg-green-200 mx-auto mb-6"></div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Our expertise spans across critical financial domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencies.map((competency, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{competency.name}</CardTitle>
                  <CardDescription className="text-green-100">
                    {competency.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In <span className="text-green-600">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your financial future? Contact us today to discuss how we can help your business thrive.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">info@hakeemi.org</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+965 97610786</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Our Locations</h3>
                    <p className="text-gray-600">Middle East & India</p>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50">
                <h3 className="font-semibold text-gray-900 mb-4">Why Choose Hakeemi?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">20+ years of proven expertise</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">Customized financial solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">Long-term partnership approach</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">State-of-the-art analytical tools</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your Transformation</h3>
              <form 
                action="https://formspree.io/f/xdkogpvw" 
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_to" value="info@hakeemi.org" />
                <input type="hidden" name="_subject" value="New Contact Form Submission - Hakeemi Financial Consultancy" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + "?success=true" : ""} />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input 
                    type="text" 
                    name="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    name="message"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your financial consulting needs..."
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <img src={logo} alt="Hakeemi Logo" className="h-14 w-auto" />
              </div>
              <p className="text-gray-400">
                Empowering your financial future through innovative strategies and transformative solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <div className="space-y-2">
                {['About', 'Services', 'Core Competencies', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@hakeemi.org</p>
                <p>Phone: +965 97610786</p>
                <p>Locations: Middle East & India</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Hakeemi Financial Consultancy & Transformation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
