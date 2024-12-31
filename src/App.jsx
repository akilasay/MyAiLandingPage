import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'


export default function App() {
  return (
    <>
   <Navbar/>

   <div className="px-6 pt-20 mx-auto max-w-7xl">
   <HeroSection />
   <FeatureSection />
   <Workflow />
   <Pricing />
   <Testimonial />
   <Footer />
   </div>
   
   </>

  )
}