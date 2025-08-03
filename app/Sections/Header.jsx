import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-yellow-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold text-gray-900">
                        RiznuDev<span className="text-yellow-500">.</span>
                    </div>
                    <Navbar />
                    <div className="flex items-center space-x-2">
                        <img
                            src="https://flagcdn.com/w40/bd.png"
                            alt="Bangladesh flag"
                            className="w-5 h-4 object-cover rounded-sm"
                        />
                        <span className="text-sm font-medium">Bangla</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
