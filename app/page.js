"use client"
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import React from "react"
// import heroPortrait from './assets/hero-portrait.png'
// Fixed image paths
import heroPortrait from "./assets/hero-portrait.png"
import aboutPortrait from './assets/about-portrait.png'
import scraperIcon from './assets/scraper-icon.png'
import adblockerIcon from './assets/adblocker-icon.png'
import loutosIcon from './assets/loutos-icon.png'
import finlywealthIcon from './assets/finlywealth-icon.png'
import dastyarIcon from './assets/dastyar-icon.png'
import testimonialProfile from './assets/testimonial-profile.png'
import Image from 'next/image'

function App() {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0)

  const skills = [
    'PHP', 'Laravel', 'MySQL', 'Vue.js', 'PostgreSQL', 
    'HTML / CSS', 'Javascript', 'Tailwind CSS', 'Elastic Search', 
    'Git', 'Livewire', 'Symfony', 'Redis', 'Chrome Extensions', 'Linux'
  ]

  const experiences = [
    {
      icon: finlywealthIcon,
      title: 'Full Stack Developer - FinlyWealth',
      type: '(Full Time)',
      period: '2024 - Now',
      description: [
        'Chrome extension development focused on user-friendly features.',
        'Developed front-end and back-end for finance and purchasing projects.',
        'Improved workflows for better efficiency and data security.',
        'Analyzed performance and resolved issues for system.'
      ]
    },
    {
      icon: dastyarIcon,
      title: 'Full Stack Developer - Dastyar',
      type: '(Full-Time)',
      period: '2023 - 2024',
      description: [
        'Extension development for different browsers with 200,000 users as the most downloaded extension in the Iranian market',
        'Designing and developing server-side programs to communicate with extensions',
        'Scaling the project to support the presence of millions of users',
        'Troubleshooting application and code issues'
      ]
    }
  ]

  const projects = [
    {
      icon: scraperIcon,
      title: 'Scraper 1',
      description: 'An innovative solution for data collection and web scraping, tailored for startups and data analysis projects.'
    },
    {
      icon: adblockerIcon,
      title: 'Persian Ad Block',
      description: 'A browser add-on designed to eliminate annoying ads on Persian websites.'
    },
    {
      icon: loutosIcon,
      title: 'Loutos',
      description: 'A versatile application for Windows, Linux, and Mac, enabling users to manage calendars, notes, and tasks.'
    }
  ]

  const testimonials = [
    {
      name: 'Armin Golpoor',
      rating: 5,
      text: 'Reza is a responsible person and his world is big. We have been working together for several years, apart from the subject of programming in business, he also has an active mind and likes to be an influential person for the people around him. The paths you choose are right and your destination is so good that you do not even think about it.',
      image: testimonialProfile
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              RezaGHZ<span className="text-yellow-500">.</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-yellow-600 font-medium">About Me</a>
              <a href="#projects" className="text-gray-700 hover:text-yellow-600 font-medium">Project</a>
              <a href="#portfolio" className="text-gray-700 hover:text-yellow-600 font-medium">Portfolio</a>
              <a href="#blog" className="text-gray-700 hover:text-yellow-600 font-medium">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-yellow-600 font-medium">Contact</a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">🇮🇷</span>
              <span className="text-sm font-medium">Persian</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image 
                src={heroPortrait}
                alt="Reza Ghasemzadeh" 
                width={300}
                height={300}
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <p className="text-yellow-600 text-lg font-medium mb-2">Hi There, I'm</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Reza<br />
                  Ghasemzadeh
                </h1>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {[Twitter, Instagram, Linkedin, Github, Youtube, Mail].map((Icon, index) => (
                  <div key={index} className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer">
                    <Icon className="w-5 h-5 text-gray-900" />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="border-2 border-yellow-300 rounded-2xl p-6 bg-white/50">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">53</div>
                  <div className="text-gray-700 font-medium">Completed projects</div>
                </div>
                <div className="border-2 border-yellow-300 rounded-2xl p-6 bg-white/50">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">6</div>
                  <div className="text-gray-700 font-medium">Positive review's</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                I love being a developer !
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Hello, I am Reza; The 26 -year-old is a backend developer. I started programming in 2010 and continued to specialize in 2015. These days, along with programming, I study about startups and businesses, and besides all this, I play the dulcimer and watch my favorite series. am working
              </p>
            </div>
            <div className="flex justify-center">
              <Image 
                src={aboutPortrait}
                alt="Reza pointing" 
                width={300}
                height={300}
                className="w-full max-w-md rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Skills</h3>
              <p className="text-gray-600 mb-8">
                Here you can see my skills, one of the fascinations of the computer world is the momentary changes of technologies, but I try to update my knowledge every day and experience new technologies.
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge key={index} className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-4 py-2 text-sm font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Language skill</h3>
              <p className="text-gray-600 mb-8">
                One of my hobbies is studying and learning languages. I try to be able to learn and use my favorite languages.
              </p>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">Persian</span>
                    <span className="text-yellow-600 font-bold">99%</span>
                  </div>
                  <Progress value={99} className="h-3" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">English</span>
                    <span className="text-yellow-600 font-bold">70%</span>
                  </div>
                  <Progress value={70} className="h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">My Experiences</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              One of the most beautiful parts of every person's life, the part of their work life, I am very happy to have spent this part of my life with the people I loved and it has made my interest in my work more and more.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-yellow-300 transition-colors">
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <Image src={exp.icon} alt={exp.title} width={300} height={300} className="w-16 h-16 rounded-full mr-4" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-yellow-400 text-gray-900">{exp.period}</Badge>
                    </div>
                    <CardTitle className="text-lg">{exp.title} <span className="text-yellow-600">{exp.type}</span></CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-600 text-sm">- {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What have I created?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Creating is always attractive and I tried to never deprive myself of this pleasure, here you can see the projects published by me.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-yellow-300 transition-all hover:shadow-lg">
                <CardHeader className="text-center">
                  <Image src={project.icon} alt={project.title} width={300} height={300} className="w-20 h-20 mx-auto mb-4 rounded-full" />
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6">
                    {project.description}
                  </CardDescription>
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">I Love What I Do</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Projects where you can get the most experience of working life, I like my projects very much, because I spent many days developing and designing it and I am happy to implement all of them.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({length: 12}).map((_, index) => (
              <Card key={index} className="aspect-square border-4 border-yellow-300 hover:border-yellow-500 transition-colors cursor-pointer">
                <CardContent className="p-4 h-full flex flex-col justify-between">
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-gray-900 font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-1 mt-2">
                    {['Laravel', 'Vue', 'MySQL', 'PHP'].slice(0, 4).map((tech, idx) => (
                      <div key={idx} className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs">{tech[0]}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What People Say About Me?</h2>
            <p className="text-gray-600 text-lg">
              Here you can know my colleague's comments about me, thank you for all the love. 😍
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-yellow-300 bg-white/80">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <Image 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-gray-600 text-lg mb-4 italic">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      {Array.from({length: testimonials[currentTestimonial].rating}).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-2 font-medium">{testimonials[currentTestimonial].rating}</span>
                    </div>
                    <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevTestimonial}
                className="rounded-full border-yellow-300 hover:bg-yellow-100"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-yellow-400' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextTestimonial}
                className="rounded-full border-yellow-300 hover:bg-yellow-100"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-400">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            I Am Available For Remote Jobs !
          </h2>
          <Button className="bg-white text-gray-900 hover:bg-gray-100 font-medium px-8 py-3 text-lg">
            Hire Me Now
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 text-lg">
              Here you can let me know if you have any criticism, suggestion or problem,<br />
              I'm waiting to hear your voice or see your message.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Whats up?</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name (required)</label>
                  <Input placeholder="Full name" className="border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email (required)</label>
                  <Input type="email" placeholder="Email address" className="border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject (required)</label>
                  <Input placeholder="Subject" className="border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Comment (required)</label>
                  <Textarea placeholder="Type comment" rows={4} className="border-gray-300" />
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="robot" className="rounded" />
                  <label htmlFor="robot" className="text-sm text-gray-700">I'm not a robot</label>
                </div>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3">
                  Contact Me
                </Button>
              </form>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What is your plan ?</h3>
              <h4 className="text-xl font-semibold text-gray-900 mb-8">Call me</h4>
              <p className="text-gray-600 mb-8">
                You can get my contact information here and if you like, you can see the urls of my pages on social networks from the top of the page and find me there.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-gray-900 font-medium">Iran , Mazandaran , Amol</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-gray-900 font-medium">rezaghasemzadeh1@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-gray-900 font-medium">09391216509</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-6 mb-8">
            {[Twitter, Github, Instagram, Linkedin, Youtube, Mail].map((Icon, index) => (
              <div key={index} className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors cursor-pointer">
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>
          <div className="text-center text-gray-400">
            <p>Made with ❤️ and lots of 🫶 from 2015 - 2025 ©</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

