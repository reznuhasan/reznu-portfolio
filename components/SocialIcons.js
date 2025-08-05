import { iconMap, socialPart } from '@/lib/helper';
import React from 'react'

const SocialIcons = ({content=""}) => {
    return (
        <div>
            {/* Social Icons */}
            <div className="flex flex-wrap gap-3">
                {socialPart.map(({ icon, link }, index) => {
                    const IconComponent = iconMap[icon];
                    if (!IconComponent) return null;
                    return (
                        <a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={` ${content==='footer'?'bg-gray-700 w-10 h-10 hover:bg-gray-400':"bg-yellow-400 w-12 h-12 hover:bg-yellow-500"} rounded-full flex items-center justify-center  transition-colors`}
                        >
                            <IconComponent className={`w-5 h-5 ${content==='footer'?"text-gray-300":"text-gray-900"}`} />
                        </a>
                    );
                })}
            </div>
        </div>
    )
}

export default SocialIcons
