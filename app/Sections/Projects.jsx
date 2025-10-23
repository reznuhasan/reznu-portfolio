"use client";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Vheer Projects Cloning",
            description: `Cloned and enhanced the Vheer project showcase platform using Next.js and Tailwind CSS. Focused on pixel-perfect UI replication, responsive layouts, and component-based structure to improve performance, scalability, and developer experience.`,
            icon: "/assets/vheer.png",
            link: "https://vheer-frontend-nextjs.vercel.app/"

        },
        {
            title: "ABlocks Plugin Development (WordPress)",
            description: `Built and optimized key interactive widgets for the ABlocks WordPress plugin, enhancing user engagement and simplifying content customization without coding.`,
            icon: "/assets/ablocks.png",
            link: "https://wordpress.org/plugins/ablocks/",
        },
        {
            title: "Store Engine Plugin Development (WooCommerce Integration)",
            description: `Developed and optimized the Store Engine plugin with seamless WooCommerce integration, creating a fast, intuitive dashboard for efficient store management.`,
            icon: "/assets/storeengine.jpg",
            link: "https://wordpress.org/plugins/storeengine/",
        },
        {
            title: "Faceseek Website (AI-based Image/Video Generator)",
            description: `Led front-end development for AI-powered features like image and video generation, creating a responsive, high-performing UI with React and Tailwind CSS.`,
            icon: "/assets/faceseek.png",
            link: "https://www.faceseek.online/",
        },
        {
            title: "Hospital Management System",
            description: `Built a full-stack hospital management system with React and Node.js, featuring patient management, scheduling, and staff coordination for efficient operations.`,
            icon: "/assets/hospital.png",
            link: "https://github.com/reznuhasan/hostpital_management",
        },
    ];

    return (
        <section
            id="projects"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-orange-50"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        What have I created?
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Creating is always attractive, and I’ve tried never to deprive myself of this pleasure.
                        Here you can see some of my featured projects.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="border-2 border-gray-200 hover:border-yellow-300 transition-all hover:shadow-lg flex flex-col justify-between"
                        >
                            <div>
                                <CardHeader className="text-center">
                                    <Image
                                        src={project.icon}
                                        alt={project.title}
                                        width={120}
                                        height={120}
                                        className="w-20 h-20 mx-auto mb-2 rounded-full object-cover"
                                    />
                                    <CardTitle className="text-xl mb-3 font-semibold text-gray-900">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardDescription className="text-gray-600 whitespace-pre-line">
                                        {project.description}
                                    </CardDescription>
                                </CardContent>
                            </div>
                            <div className="text-center pb-6">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium">
                                        Live Link
                                    </Button>
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
