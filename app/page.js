"use client"
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
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
import scraperIcon from './assets/scraper-icon.png'
import adblockerIcon from './assets/adblocker-icon.png'
import loutosIcon from './assets/loutos-icon.png'
import finlywealthIcon from './assets/finlywealth-icon.png'
import dastyarIcon from './assets/dastyar-icon.png'
import Image from 'next/image'
import Header from './Sections/Header'
import HeroPart from './Sections/HeroPart'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Footer from './Sections/Footer'
import Testimonials from './Sections/Testimonials'

function App() {


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

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Navigation */}
      <Header/>

      {/* Hero Section */}
      <HeroPart/>

      {/* About Section */}
     
      <About/>
      {/* Skills Section */}
      <Skills/>

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
            {Array.from({ length: 12 }).map((_, index) => (
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
     <Testimonials/>

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
      <Footer/>
    </div>
  )
}

export default App

