import React, { useEffect, useRef, useState } from 'react'
import { HeroTeaserBackground, HeroTeaserContent, HeroTeaserParallaxElement, HeroTeaserSection } from './HeroTeaserStyling'
import Parallax from 'parallax-js/dist/parallax.min'
import me from '../../../../assets/me.png'
import nebula1 from '../../../../assets/galaxy/nebula_1.svg'
import nebula2 from '../../../../assets/galaxy/nebula_2.svg'
import planetBlue from '../../../../assets/galaxy/planet_blue.svg'
import planetGreen from '../../../../assets/galaxy/planet_green.svg'
import planetRed from '../../../../assets/galaxy/planet_red.svg'
import planetSmall from '../../../../assets/galaxy/planet_small.svg'
import rocket from '../../../../assets/galaxy/rocket.svg'
import star from '../../../../assets/galaxy/star.svg'
import wave from '../../../../assets/wave1.svg'

const HeroTeaser: React.FC = () => {
  const [rocketPosition, setRocketPosition] = useState({ x: 88, y: 70 })

  const parallaxContainer = useRef(null)

  const layerSpeedOne = 0.1
  const layerSpeedTwo = 0.15
  const layerSpeedThree = 0.2

  useEffect(() => {
    const parallaxInstance = new Parallax(parallaxContainer.current, {
      hoverOnly: false,
    })

    parallaxInstance.enable()

    return () => parallaxInstance.disable()
  }, [])

  return (
    <>
      <HeroTeaserSection>
        <HeroTeaserBackground ref={parallaxContainer}>
          <div data-depth={layerSpeedOne}><HeroTeaserParallaxElement src={nebula1} width='900' height='900' x={50} y={-50} /></div>
          <div data-depth={layerSpeedOne}><HeroTeaserParallaxElement src={nebula2} width='900' height='900' x={-10} y={30} /></div>
          <div data-depth={layerSpeedThree}><HeroTeaserParallaxElement src={planetBlue} width='250' height='250' x={33} y={66} /></div>
          <div data-depth={layerSpeedThree}><HeroTeaserParallaxElement src={planetGreen} width='120' height='120' x={20} y={3} /></div>
          <div data-depth={layerSpeedThree}><HeroTeaserParallaxElement src={planetRed} width='120' height='120' x={-2} y={60} /></div>
          <div data-depth={layerSpeedThree}><HeroTeaserParallaxElement onClick={() => setRocketPosition({ x: 50, y: 50 })} src={rocket} width='170' height='170' x={rocketPosition.x} y={rocketPosition.y} /></div>
          <div data-depth={layerSpeedTwo}><HeroTeaserParallaxElement src={star} width='20' height='20' x={10} y={15} /></div>
          <div data-depth={layerSpeedTwo}><HeroTeaserParallaxElement src={star} width='10' height='10' x={11.5} y={13} /></div>
          <div data-depth={layerSpeedTwo}><HeroTeaserParallaxElement src={star} width='10' height='10' x={55} y={70} /></div>
          <div data-depth={layerSpeedTwo}><HeroTeaserParallaxElement src={star} width='12' height='12' x={20} y={73} /></div>
          <div data-depth={layerSpeedTwo}><HeroTeaserParallaxElement src={star} width='18' height='18' x={80} y={10} /></div>
          <div data-depth={layerSpeedTwo}><HeroTeaserParallaxElement src={star} width='13' height='13' x={50} y={22} /></div>
          <div data-depth={layerSpeedTwo}><HeroTeaserParallaxElement src={star} width='9' height='9' x={5} y={90} /></div>
        </HeroTeaserBackground>
        <HeroTeaserContent>
          <div>
            <h1>Hi, ich bin Markus</h1>
            <p>fullstack, datavis, design, content creator, fotografie und mehr</p>
          </div>
          <img src={me} />
        </HeroTeaserContent>
      </HeroTeaserSection>

      <img src={wave} />
    </>
    
  )
}

export default HeroTeaser
