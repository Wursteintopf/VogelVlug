import styled from '@emotion/styled'
import React from 'react'
import { Headline } from '../../00_Atoms/Typography/Headline'
import ProjectCard from '../../01_Molecules/ProjectCard/ProjectCard'
import sahakom from '../../../../assets/sahakom.png'
import youlys from '../../../../assets/youlys.png'
import ultrafood from '../../../../assets/ultrafood.png'
import { Container } from '../../00_Atoms/Layout/Container'
import themeVariables from '../../../../styles/themeVariables'

export const ProjectContainer = styled(Container)`
  margin: 0 auto 200px auto;
`

export const ProjectContent = styled.div`
  width: 60%;
  transform: translateZ(40px);
  padding: 0 60px;

  ${themeVariables.breakTablet} {
    width: 100%;
    margin-bottom: 20px;
  }

  ${themeVariables.breakMobile} {
    padding: 0 40px;
  }
`

export const ProjectHeader = styled.h3`
  font-size: 1.8rem;

  ${themeVariables.breakTablet} {
    font-size: 1.5rem;
  }
`

export const ProjectDescription = styled.span`
`

export const ProjectTags = styled.div`
  display: flex;
  margin-top: 40px;

  ${themeVariables.breakTablet} {
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

  ${themeVariables.breakMobile} {
    margin-top: 10px;
  }
`

export const ProjectImageWrapper = styled.div`
  width: 40%;
  transform: translateZ(40px);

  ${themeVariables.breakTablet} {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  ${themeVariables.breakMobile} {
    padding-bottom: 20px;
  }
`

export const ProjectImage = styled.img<{ x: number, rotate: string }>`
  transform: translateZ(40px);
  max-width: 100%;
  position: relative;
  right: ${props => props.x}%;

  ${themeVariables.breakTablet} {
    right: 15%;
    transform: translateZ(40px) ${props => props.rotate} scale(0.8);
  }

  ${themeVariables.breakMobile} {
    max-width: 70%;
  }
`

const Projects: React.FC = () => {
  return (
    <ProjectContainer maxWidth={1000}>
      <Headline>Beispielprojekte</Headline>

      <ProjectCard color='#010348' href='https://youlys.de'>
        <ProjectImageWrapper>
          <ProjectImage src={youlys} width={280} x={7} rotate='rotate3d(0, 1, -0.5, -15deg)' />
        </ProjectImageWrapper>
        <ProjectContent>
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
        </ProjectContent>
      </ProjectCard>

      <ProjectCard color='#447604' href='https://sahakom.org'>
        <ProjectImageWrapper>
          <ProjectImage src={sahakom} width={450} x={10} rotate='rotate3d(0, 1, -1, -7deg)' />
        </ProjectImageWrapper>
        <ProjectContent>
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
        </ProjectContent>
        
      </ProjectCard>

      <ProjectCard color='#454545' href='https://www.instagram.com/p/Bm3hJWAFEw6/'>
        <ProjectImageWrapper>
          <ProjectImage src={ultrafood} width={200} x={0} rotate='rotate3d(0, 0.5, -1, -17deg)' />
        </ProjectImageWrapper>
        <ProjectContent>
          <ProjectHeader>Instagram Kampagne UltraFood</ProjectHeader>
          <ProjectDescription>
            Entwicklung und Gestaltung eines neuen Corporare Design und einer Brand Identity, sowie
            Relaunch der Webseite des Sahakom e.V.
          </ProjectDescription>
          <ProjectTags>
            <ProjectTag>Imagevideo</ProjectTag>
            <ProjectTag>Social Media</ProjectTag>
          </ProjectTags>
        </ProjectContent>
      </ProjectCard>
    </ProjectContainer>
  )
}

export default Projects
