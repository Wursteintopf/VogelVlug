import styled from '@emotion/styled'
import React from 'react'
import { Headline } from '../../00_Atoms/Typography/Headline'
import ProjectCard from '../../01_Molecules/ProjectCard/ProjectCard'
import sahakom from '../../../public/sahakom.png'
import youlys from '../../../public/youlys.png'
import ultrafood from '../../../public/ultrafood.png'
import { Container } from '../../00_Atoms/Layout/Container'
import themeVariables from '../../../styles/themeVariables'

export const ProjectContainer = styled(Container)`
  margin: 0 auto 200px auto;
`

export const ProjectHeader = styled.h3`
  transform: translateZ(40px);
  font-size: 1.8rem;
  width: 45%;

  ${themeVariables.breakTablet} {
    font-size: 1.5rem;
    width: 100%;
  }
`

export const ProjectDescription = styled.span`
  transform: translateZ(40px);
  width: 45%;

  ${themeVariables.breakTablet} {
    width: 100%;
  }

  ${themeVariables.breakMobile} {
    padding-bottom: 300px;
  }
`

export const ProjectTags = styled.div`
  transform: translateZ(40px);
  display: flex;
  margin-top: 40px;

  ${themeVariables.breakTablet} {
    padding-bottom: 250px;
  }

  ${themeVariables.breakMobile} {
    display: none;
  }
`

export const ProjectTag = styled.div`
  background-color: rgba(1, 1, 1, 0.2);
  width: fit-content;
  padding: 5px 10px;
  text-transform: uppercase;
  font-weight: 600;
  margin-right: 10px;
`

const Projects: React.FC = () => {
  return (
    <ProjectContainer maxWidth={1000}>
      <Headline>Beispielprojekte</Headline>

      <ProjectCard id='youlys' color='#010348' href='https://youlys.de' img='/youlys.png'>
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

      <ProjectCard id='sahakom' color='#447604' href='https://sahakom.org' img='/sahakom.png'>
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

      <ProjectCard id='ultrafood' color='#454545' href='https://www.instagram.com/p/Bm3hJWAFEw6/' img='/ultrafood.png'>
        <ProjectHeader>Instagram Kampagne UltraFood</ProjectHeader>
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
