import React from 'react'
import About from '../components/02_Compounds/About/About'
import Customers from '../components/02_Compounds/Customers/Customers'
import Footer from '../components/02_Compounds/Footer.tsx/Footer'
import HeroTeaser from '../components/02_Compounds/HeroTeaser/HeroTeaser'
import Projects from '../components/02_Compounds/Projects/Projects'
import WhatIDo from '../components/02_Compounds/WhatIDo/WhatIDo'

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
