import React from 'react'
import heroPortrait from "../assets/hero-portrait.png"
import Typewriter from 'typewriter-effect';

import SocialIcons from '@/components/SocialIcons'
import Image from 'next/image'
const HeroPart = () => {
    return (
        <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <Image
                            src={heroPortrait}
                            alt="RiznuDev"
                            width={300}
                            height={300}
                            className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                        />
                    </div>
                    <div className="order-1 lg:order-2 space-y-8">
                        <div>
                            <p className="text-yellow-600 text-2xl font-medium mb-2">Hi There, I'm</p>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                                Rizone<br />
                                Hasan Riznu
                            </h1>
                        </div>
                        <div className="text-4xl font-semibold text-yellow-500 h-8 mb-12">
                            <Typewriter
                                options={{
                                    strings: ['Full Stack Web Developer', 'Frontend Specialist'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    deleteSpeed: 40,
                                }}
                            />
                        </div>

                        <SocialIcons />

                        {/* <div className="grid grid-cols-2 gap-6">
                            <div className="border-2 border-yellow-300 rounded-2xl p-6 bg-white/50">
                                <div className="text-4xl font-bold text-yellow-600 mb-2">53</div>
                                <div className="text-gray-700 font-medium">Completed projects</div>
                            </div>
                            <div className="border-2 border-yellow-300 rounded-2xl p-6 bg-white/50">
                                <div className="text-4xl font-bold text-yellow-600 mb-2">6</div>
                                <div className="text-gray-700 font-medium">Positive review's</div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroPart
