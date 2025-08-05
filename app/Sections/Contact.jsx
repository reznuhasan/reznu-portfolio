import ContactForm from '@/components/ContactForm'
import React from 'react'
import {

  Mail,
  Phone,
  MapPin,

} from 'lucide-react'
const Contact = () => {
  return (
<section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 text-lg">
              Here you can let me know if you have any criticism, suggestion or problem,<br />
              I'm waiting to hear your voice or see your message.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Whats up?</h3>
              <ContactForm/>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What is your plan ?</h3>
              <h4 className="text-xl font-semibold text-gray-900 mb-8">Call me</h4>
              <p className="text-gray-600 mb-8">
                You can get my contact information here and if you like, you can see the urls of my pages on social networks from the top of the page and find me there.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-gray-900 font-medium">Uttara,Dhaka,Bangladesh</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-gray-900 font-medium">reznuhasan31@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-gray-900 font-medium">01648382407</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact
