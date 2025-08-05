"use client"
import React from 'react'
import testimonialProfile from '../assets/testimonial-profile.png'
import testimonialProfile1 from '../assets/client2.png'
import testimonialProfile2 from '../assets/client3.png'
import { Card, CardContent } from '@/components/ui/card.jsx'
import {
  ChevronLeft,
  ChevronRight,
  Star,
} from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button.jsx'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0)

  const testimonials = [
    {
      name: 'Armin Golpoor',
      rating: 5,
      text: 'Working with Riznu was an absolute pleasure! He quickly understood my project requirements and delivered a clean, responsive React interface ahead of schedule. Communication was smooth throughout, and he even suggested improvements that made the final product better than I had imagined. Highly recommend him if you’re looking for a reliable and skilled frontend developer!',
      image: testimonialProfile
    },
    {
      name: 'Justin',
      rating: 5,
      text: 'Riznu exceeded my expectations! I needed a custom WordPress plugin with React-based widgets, and he built exactly what I envisioned. His attention to detail, coding standards, and willingness to make revisions were outstanding. I’ll definitely hire him again for future projects!',
      image: testimonialProfile2
    },
    {
      name: 'Yelena Yuzubhy',
      rating: 5,
      text: 'I’m impressed with Riznu’s professionalism and talent. He converted a complex Material UI layout into a Next.js + Tailwind solution flawlessly. The design looks modern and loads fast on all devices. He also provided clear documentation so I can manage updates myself. 10/10 experience!',
      image: testimonialProfile1
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What People Say About Me?</h2>
          <p className="text-gray-600 text-lg">
            Here you can know my colleague's comments about me, thank you for all the love. 😍
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-yellow-300 bg-white/80">
            <CardContent className="p-8 relative overflow-hidden h-[260px] sm:h-[220px]">
              <div className="relative w-full h-full">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out
                      ${index === currentTestimonial
                        ? "opacity-100 translate-x-0 z-10"
                        : index < currentTestimonial
                          ? "opacity-0 -translate-x-full z-0"
                          : "opacity-0 translate-x-full z-0"
                      }`}
                  >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <div className="flex-1 text-center md:text-left">
                        <p className="text-gray-600 text-lg mb-4 italic">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="ml-2 font-medium">{testimonial.rating}</span>
                        </div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-yellow-300 hover:bg-yellow-100"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-yellow-400' : 'bg-gray-300'
                    }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-yellow-300 hover:bg-yellow-100"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
