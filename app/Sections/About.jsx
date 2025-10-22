import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className='flex flex-col gap-10'>
                        <div className="space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                                I love being a developer !
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">

                                I'm a 26-year-old Full Stack Developer passionate about building modern, scalable web applications. I started my programming journey in 2020 and have continued to grow and specialize through 2025.

                                Alongside coding, I’m deeply interested in startups, business development, and machine learning — exploring how technology can drive innovation.

                                When I’m not coding, you’ll probably find me playing the dulcimer or watching my favorite series to unwind and recharge.                          
                                  </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="border-2 border-yellow-300 border-dotted rounded-2xl p-6 bg-white/50">
                                <div className="text-4xl font-bold text-yellow-600 mb-2">20</div>
                                <div className="text-gray-700 font-medium">Completed projects</div>
                            </div>
                            <div className="border-2 border-yellow-300 rounded-2xl border-dotted p-6 bg-white/50">
                                <div className="text-4xl font-bold text-yellow-600 mb-2">3</div>
                                <div className="text-gray-700 font-medium">Positive review's</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src='/assets/about-portrait1.png'
                            alt="Reza pointing"
                            width={300}
                            height={300}
                            className="w-full max-w-md rounded-3xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
