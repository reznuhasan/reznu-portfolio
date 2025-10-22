import React from 'react'
import Faceseek from '../assets/faceseek.png'
import kodezenIcon from '../assets/kodezen.png'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import Image from 'next/image'

const Experiences = () => {
    const experiences = [
         {
            icon: kodezenIcon,
            title: 'React Developer - Kodezen',
            type: '(Full-Time)',
            period: 'February 2024-March 2025',
            description: [
                'Developed and optimized high-performance React applications for large-scale user bases',
                'Built and maintained cross-browser extensions, achieving 200,000+ active users',
                'Integrated secure server-side APIs to ensure seamless extension communication',
                'Enhanced scalability and reliability to support millions of potential users',
                'Identified and resolved complex bugs to improve user experience and system stability'
            ]
        },
        {
            icon: Faceseek,
            title: 'Full Stack Developer - Faceseek',
            type: '(Freelancer)',
            period: 'April 2025 - September 2025',
            description: [
                'Developing AI-driven features such as image-to-image, image-to-anime, and image-to-video generation.',
                'Building advanced FaceSearch and ImageSearch tools to help users find images by face, name, or visual similarity.',
                'Implementing real-time portrait enhancement and AI-powered transformations for high-quality outputs.',
                'Optimizing system performance to handle large-scale image processing with speed and accuracy.'
            ]
        }
       
    ]
    return (
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
                                <Image src={exp.icon} alt={exp.title} width={200} height={200} className="w-10 h-10 rounded-full mr-4" />
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
    )
}

export default Experiences
