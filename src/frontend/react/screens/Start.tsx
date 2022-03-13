import React from 'react'
import About from '../components/02_Organisms/About/About'
import Customers from '../components/02_Organisms/Customers/Customers'
import Footer from '../components/02_Organisms/Footer.tsx/Footer'
import HeroTeaser from '../components/02_Organisms/HeroTeaser/HeroTeaser'
import Projects from '../components/02_Organisms/Projects/Projects'
import WhatIDo from '../components/02_Organisms/WhatIDo/WhatIDo'

const Startseite: React.FC = () => {
  return (
    <>
      <HeroTeaser />

      <About />

      <WhatIDo />

      <Customers />

      <Projects />

      <Footer />
    </>
  )
}

export default Startseite
