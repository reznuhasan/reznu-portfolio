import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { useRouter } from 'next/navigation'

const HireMe = () => {
    const router=useRouter()
    const handleHire=()=>{
        router.push("/#contact")
    }
  return (
     <section className="py-15 px-4 sm:px-6 lg:px-8 bg-yellow-400">
        <div className="max-w-7xl flex justify-between items-center  text-center">
          <h2 className="text-xl lg:text-3xl font-bold text-gray-900 ">
            I Am Available For Remote Jobs !
          </h2>
          <Button onClick={handleHire} className="bg-black text-white hover:bg-gray-400 hover:text-gray-900 font-medium px-8  text-lg">
            Hire Me Now
          </Button>
        </div>
      </section>
  )
}

export default HireMe
