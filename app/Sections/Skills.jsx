import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import React from 'react'

const Skills = () => {
      const skills = [
    'React', 'Nextjs',"Redux","Shadcn", 'MySQL', 'Mongodb', 'PostgreSQL',
    'HTML / CSS', 'Javascript', 'Tailwind CSS', 'Bootstrap',
    'Nodejs', 'Expressjs', 'Chrome Extensions'
  ]
    return (
        <section className=" px-4 py-8 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-orange-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Skills</h3>
                        <p className="text-gray-600 mb-8">
                            Here you can see my skills, one of the fascinations of the computer world is the momentary changes of technologies, but I try to update my knowledge every day and experience new technologies.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <Badge key={index} className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-4 py-2 text-sm font-medium">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Language skill</h3>
                        <p className="text-gray-600 mb-8">
                            One of my hobbies is studying and learning languages. I try to be able to learn and use my favorite languages.
                        </p>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium text-gray-900">Bangla</span>
                                    <span className="text-yellow-600 font-bold">99%</span>
                                </div>
                                <Progress value={99} className="h-3" />
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium text-gray-900">English</span>
                                    <span className="text-yellow-600 font-bold">70%</span>
                                </div>
                                <Progress value={70} className="h-3" />
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium text-gray-900">Hindi</span>
                                    <span className="text-yellow-600 font-bold">60%</span>
                                </div>
                                <Progress value={60} className="h-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
