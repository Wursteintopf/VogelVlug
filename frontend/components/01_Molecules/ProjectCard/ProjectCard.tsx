import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'
import VanillaTilt from 'vanilla-tilt'
import themeVariables from '../../../styles/themeVariables'

interface ProjectCardProps {
  id: string
  color: string
  href: string
  img: string
}

export 

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const ref = useRef(null)

  const StyledProjectCard = styled.a<{ color: string, image: string }>`
    width: 100%;
    min-height: 500px;
    background-color: ${props => props.color};
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: 100% 100%;
    transform-style: preserve-3d;
    position: relative;
    margin: 100px auto;
    color: ${themeVariables.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    padding: 30px 60px;

    ${themeVariables.breakDesktop} {
      width: 90%;
    }

    ${themeVariables.breakTablet} {
      justify-content: start;
      background-size: 350px;
    }
  `

  useEffect(() => {
    if (ref.current) {
      VanillaTilt.init(ref.current, {
        max: 5,
      })

      // @ts-ignore
      ref.current.addEventListener('tiltChange', (event) => {
        const resizeFactor = window.innerWidth > 800 ? 500 : 350
        const el = document.getElementById(props.id)
        if (el) {
          el.style.backgroundPositionX = (el.offsetWidth - resizeFactor + (2.5 * parseFloat(event.detail.tiltX))) + 'px'
          el.style.backgroundPositionY = (el.offsetHeight - resizeFactor - (1.5 * parseFloat(event.detail.tiltY))) + 'px'
        }
      })
    }
    
    window.addEventListener('resize', () => {
      const resizeFactor = window.innerWidth > 800 ? 500 : 350
      const el = document.getElementById(props.id)
      if (el) {
        el.style.backgroundPositionX = el.offsetWidth - resizeFactor + 'px'
        el.style.backgroundPositionY = el.offsetHeight - resizeFactor + 'px'
      }
    })

    // @ts-ignore
    return () => {if (ref.vanillaTilt) ref.vanillaTilt.destroy()}
  }, [])

  return (
    <StyledProjectCard id={props.id} ref={ref} color={props.color} href={props.href} target='_blank' image={props.img}>
      {props.children}
    </StyledProjectCard>
  )
}

export default ProjectCard
