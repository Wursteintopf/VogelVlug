import styled from '@emotion/styled'
import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import themeVariables from '../../../../styles/themeVariables'

interface ProjectCardProps {
  color: string
  href: string
  reversed?: boolean
}

export const StyledProjectCard = styled.a<{ color: string, reversed?: boolean }>`
  width: 100%;
  min-height: 500px;
  background-color: ${props => props.color};
  transform-style: preserve-3d;
  position: relative;
  margin: 100px 0;
  padding: 60px;
  color: ${themeVariables.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.reversed ? 'flex-end' : 'flex-start'};
  border-radius: 10px;
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
    <StyledProjectCard ref={ref} color={props.color} href={props.href} reversed={props.reversed} target='_blank'>
      {props.children}
    </StyledProjectCard>
  )
}

export default ProjectCard
