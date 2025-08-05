import SocialIcons from '@/components/SocialIcons'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className='flex justify-center mb-2'>
                        <SocialIcons content="footer"/>

                    </div>
                    <div className="text-center text-gray-400">
                        <p>Made with ❤️ and lots of 🫶 from 2015 - 2025 ©</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
