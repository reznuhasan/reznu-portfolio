"use client"
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'

import React from "react"
// Fixed image paths
import scraperIcon from './assets/scraper-icon.png'
import adblockerIcon from './assets/adblocker-icon.png'
import loutosIcon from './assets/loutos-icon.png'

import Image from 'next/image'
import Header from './Sections/Header'
import HeroPart from './Sections/HeroPart'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Footer from './Sections/Footer'
import Testimonials from './Sections/Testimonials'
import Experiences from './Sections/Experiences'
import Contact from './Sections/Contact'
import HireMe from './Sections/HireMe'
import ProjectsSection from './Sections/Projects'

function App() {


  

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
      <Experiences/>

      {/* Projects Section */}
     <ProjectsSection/>
       
      {/* Portfolio Grid Section */}
      {/* <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
      </section> */}
      <HireMe/>

      {/* Testimonials Section */}
     <Testimonials/>

      {/* CTA Section */}
     

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default App

