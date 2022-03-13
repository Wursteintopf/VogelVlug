import styled from '@emotion/styled'
import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import themeVariables from '../../../../styles/themeVariables'

interface ProjectCardProps {
  color: string
  href: string
}

export const StyledProjectCard = styled.a<{ color: string }>`
  width: 100%;
  height: 500px;
  background-color: ${props => props.color};
  transform-style: preserve-3d;
  position: relative;
  margin: 100px auto;
  color: ${themeVariables.white};
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

  ${themeVariables.breakDesktop} {
    width: 90%;
  }

  ${themeVariables.breakTablet} {
    flex-direction: column-reverse;
    height: 100%;
    padding: 40px 0;
  }

  ${themeVariables.breakMobile} {
    padding: 20px 0;
  }
`

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const ref = useRef(null)

  useEffect(() => {
    // @ts-ignore
    VanillaTilt.init(ref.current, {
      max: 5,
    })

    // @ts-ignore
    return () => ref.vanillaTilt.destroy()
  }, [])

  return (
    <StyledProjectCard ref={ref} color={props.color} href={props.href} target='_blank'>
      {props.children}
    </StyledProjectCard>
  )
}

export default ProjectCard
