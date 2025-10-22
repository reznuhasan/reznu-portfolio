import React from 'react'
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
                            src='/assets/about-portrait.png'
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

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroPart
