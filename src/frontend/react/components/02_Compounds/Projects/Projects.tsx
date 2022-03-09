import styled from '@emotion/styled'
import React from 'react'
import { Headline } from '../../00_Atoms/Typography/Headline'
import ProjectCard from '../../01_Molecules/ProjectCard/ProjectCard'
import sahakom from '../../../../assets/sahakom.svg'
import youlys from '../../../../assets/youlys.svg'
import ultrafood from '../../../../assets/ultrafood.svg'

export const ProjectContainer = styled.section`
  width: 1000px;
  margin: 0 auto 200px auto;
`

export const ProjectHeader = styled.h3`
  font-size: 1.8rem;
  transform: translateZ(40px);
  width: 45%;
`

export const ProjectDescription = styled.span<{ reversed?: boolean }>`
  transform: translateZ(40px);
  width: 45%;
  text-align: ${props => props.reversed ? 'right' : 'left'};
`

export const ProjectTags = styled.div`
  transform: translateZ(40px);
  display: flex;
  margin-top: 40px;
  width: 45%;
`

export const ProjectTag = styled.div`
  background-color: rgba(1, 1, 1, 0.2);
  width: fit-content;
  padding: 5px 10px;
  text-transform: uppercase;
  font-weight: 600;
  margin-right: 10px;
`

export const ProjectImage = styled.img<{ x: number, y: number, rotate: string }>`
  transform: translateZ(40px) ${props => props.rotate};
  position: absolute;
  top: ${props => props.y}%;
  left: ${props => props.x}%;
`

const Projects: React.FC = () => {
  return (
    <ProjectContainer>
      <Headline>Beispielprojekte</Headline>

      <ProjectCard color='#010348' href='https://youlys.de' reversed>
        <ProjectImage src={youlys} width='300' x={12} y={10} rotate='rotate3d(0, -1, 0.5, -15deg)' />
        <ProjectHeader>YouLys</ProjectHeader>
        <ProjectDescription>
          Entwicklung einer Plattform zur Analyse von Erfolgsfaktoren auf YouTube.<br />
          Bringt es wirklich etwas, ein erstauntes Gesicht auf dem Thumbnail zu machen?
        </ProjectDescription>
        <ProjectTags>
          <ProjectTag>Data Science</ProjectTag>
          <ProjectTag>React</ProjectTag>
          <ProjectTag>D3.js</ProjectTag>
        </ProjectTags>
      </ProjectCard>

      <ProjectCard color='#447604' href='https://sahakom.org'>
        <ProjectImage src={sahakom} width='500' x={45} y={22} rotate='rotate3d(0, 1, -1, -7deg)' />
        <ProjectHeader>Relaunch Sahakom e.V.</ProjectHeader>
        <ProjectDescription>
          Entwicklung und Gestaltung eines neuen Corporare Design und einer Brand Identity, sowie
          Relaunch der Webseite des Sahakom e.V.
        </ProjectDescription>
        <ProjectTags>
          <ProjectTag>Branding</ProjectTag>
          <ProjectTag>Logo</ProjectTag>
          <ProjectTag>Website</ProjectTag>
          <ProjectTag>TYPO3</ProjectTag>
        </ProjectTags>
      </ProjectCard>

      <ProjectCard color='#454545' href='https://www.instagram.com/p/Bm3hJWAFEw6/' reversed>
        <ProjectImage src={ultrafood} width='220' x={15} y={7} rotate='rotate3d(0, -0.5, 1, -25deg)' />
        <ProjectHeader>Instagramkampagne UltraFood</ProjectHeader>
        <ProjectDescription>
          Entwicklung und Gestaltung eines neuen Corporare Design und einer Brand Identity, sowie
          Relaunch der Webseite des Sahakom e.V.
        </ProjectDescription>
        <ProjectTags>
          <ProjectTag>Imagevideo</ProjectTag>
          <ProjectTag>Social Media</ProjectTag>
        </ProjectTags>
      </ProjectCard>
    </ProjectContainer>
  )
}

export default Projects
