import React, { useEffect, useRef } from 'react'
import { HeroTeaserBackground, HeroTeaserContent, HeroTeaserParallaxElement, HeroTeaserSection } from './HeroTeaserStyling'
import Parallax from 'parallax-js/dist/parallax.min'
import me from '../../../public/me.png'
import nebula1 from '../../../public/galaxy/nebula_1.svg'
import nebula2 from '../../../public/galaxy/nebula_2.svg'
import planetBlue from '../../../public/galaxy/planet_blue.svg'
import planetGreen from '../../../public/galaxy/planet_green.svg'
import planetRed from '../../../public/galaxy/planet_red.svg'
import rocket from '../../../public/galaxy/rocket.svg'
import star from '../../../public/galaxy/star.svg'
import wave from '../../../public/wave1.svg'
import styled from '@emotion/styled'
import Image from 'next/image'

export const Wave = styled(Image)`
  min-width: 100vw !important;
  min-height: 10vw !important;
  z-index: -10;
`

export const WaveContainer = styled.div`
  span {
    overflow: visible !important;
  }
`

interface HeroTeaserProps {
  header: string
  tagline: string
}

const HeroTeaser: React.FC<HeroTeaserProps> = (props) => {
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
          <div data-depth={layerSpeedOne}><HeroTeaserParallaxElement   x={50} y={-30}> <Image width={950} height={950} src={nebula1} alt='' /></HeroTeaserParallaxElement></div>
          <div data-depth={layerSpeedOne}><HeroTeaserParallaxElement   x={-10} y={15}> <Image width={950} height={950} src={nebula2} alt='' /></HeroTeaserParallaxElement></div>
          <div data-depth={layerSpeedThree}><HeroTeaserParallaxElement x={33} y={66}>  <Image width={250} height={250} src={planetBlue} alt='' /></HeroTeaserParallaxElement></div>
          <div data-depth={layerSpeedThree}><HeroTeaserParallaxElement x={20} y={9}>   <Image width={120} height={120} src={planetGreen} alt='' /></HeroTeaserParallaxElement></div>
          <div data-depth={layerSpeedThree}><HeroTeaserParallaxElement x={-2} y={60}>  <Image width={120} height={120} src={planetRed} alt='' /></HeroTeaserParallaxElement></div>
          <div data-depth={layerSpeedThree}><HeroTeaserParallaxElement x={88} y={70}>  <Image width={170} height={170} src={rocket} alt='' /></HeroTeaserParallaxElement></div>
          <div data-depth={layerSpeedTwo}><HeroTeaserParallaxElement   x={10} y={15}>  <Image width={20}  height={20}  src={star} alt='' /></HeroTeaserParallaxElement></div>
          <div data-depth={layerSpeedTwo}><HeroTeaserParallaxElement   x={11.5} y={13}><Image width={10}  height={10}  src={star} alt='' /></HeroTeaserParallaxElement></div>
          <div data-depth={layerSpeedTwo}><HeroTeaserParallaxElement   x={55} y={70}>  <Image width={10}  height={10}  src={star} alt='' /></HeroTeaserParallaxElement></div>
          <div data-depth={layerSpeedTwo}><HeroTeaserParallaxElement   x={20} y={73}>  <Image width={12}  height={12}  src={star} alt='' /></HeroTeaserParallaxElement></div>
          <div data-depth={layerSpeedTwo}><HeroTeaserParallaxElement   x={80} y={10}>  <Image width={18}  height={18}  src={star} alt='' /></HeroTeaserParallaxElement></div>
          <div data-depth={layerSpeedTwo}><HeroTeaserParallaxElement   x={50} y={22}>  <Image width={13}  height={13}  src={star} alt='' /></HeroTeaserParallaxElement></div>
          <div data-depth={layerSpeedTwo}><HeroTeaserParallaxElement   x={5} y={90}>   <Image width={9}   height={9}   src={star} alt='' /></HeroTeaserParallaxElement></div>
        </HeroTeaserBackground>
        <HeroTeaserContent>
          <div>
            <h1>{props.header}</h1>
            <p>{props.tagline}</p>
          </div>
          <Image src={me} alt='' width={500} height={500} />
        </HeroTeaserContent>
      </HeroTeaserSection>

      <WaveContainer>
        <Wave src={wave} />
      </WaveContainer>
    </>
    
  )
}

export default HeroTeaser
