import { iconMap, socialPart } from '@/lib/helper';
import React from 'react'

const SocialIcons = () => {
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
                            className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                        >
                            <IconComponent className="w-5 h-5 text-gray-900" />
                        </a>
                    );
                })}
            </div>
        </div>
    )
}

export default SocialIcons
