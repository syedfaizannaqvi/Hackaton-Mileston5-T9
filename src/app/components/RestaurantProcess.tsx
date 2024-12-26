import React from 'react'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'
import Button from './ui/Button'

const RestaurantProcess = () => {
  return (
    <div className="relative w-full md:w-[100vw] md:-ml-[10vw]">
      <section className="relative w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/bottomBG.png" 
            alt="Process background" 
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-3xl ml-0 md:ml-auto flex flex-col text-center md:text-right">
            {/* Header */}
            <h3 className="text-[#FF9F0D] font-great-vibes text-xl sm:text-2xl mb-2 sm:mb-3">
              Restaurant Active Process
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              <span className="text-[#FF9F0D]">We</span> Document Every Food
              <br className="hidden sm:block" />
              Bean Process untile it is saved
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto md:ml-auto md:mr-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
              pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 sm:gap-6 justify-center md:justify-end">
              <Button 
                variant="outline"
                size="lg"
                className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                Read More
              </Button>
              <button className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FF9F0D] text-white hover:bg-[#FF9F0D]/90 transition-colors">
                <FaPlay className="ml-1 text-sm sm:text-base" />
              </button>
              <span className="text-white text-sm sm:text-base whitespace-nowrap">
                Play Video
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RestaurantProcess 