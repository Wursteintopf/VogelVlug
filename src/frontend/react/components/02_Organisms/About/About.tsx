import styled from '@emotion/styled'
import React from 'react'
import themeVariables from '../../../../styles/themeVariables'
import { Container } from '../../00_Atoms/Layout/Container'
import { Headline } from '../../00_Atoms/Typography/Headline'

export const AboutContainer = styled(Container)`
  padding-bottom: 200px;
  display: flex;
  align-items: center;
  color: ${themeVariables.grey8};
  
  ${themeVariables.breakDesktop} {
    flex-direction: column;
    text-align: center;
  }
`

export const AboutH2 = styled.h2`
  width: 40%;
  font-size: 2.5rem;

  ${themeVariables.breakDesktop} {
    width: 45%;

    &:after {
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      background-color: ${themeVariables.darkOrange};
      margin: 15px auto;
    }
  }

  ${themeVariables.breakTablet} {
    width: 60%;
  }

  ${themeVariables.breakMobile} {
    width: 70%;
    font-size: 2rem;
  }
`

export const AboutP = styled.p`
  width: 60%;
  font-size: 1.3rem;
  font-weight: 300;

  ${themeVariables.breakTablet} {
    width: 80%;
  }
`

const About: React.FC = () => {
  return (
    <section>
      <AboutContainer maxWidth={1000}>
        <AboutH2>
          Hui, du machst ja ne ganze Menge!
        </AboutH2>
        <AboutP>
          Ja, 40 Stunden die Woche das Gleiche zu machen, würde mir schnell langweilig werden. Zum Glück hab ich da als Informatiker die Möglichkeit
          mich in vielen Bereichen kreativ auszuleben.
        </AboutP>
      </AboutContainer>
    </section>
  )
}

export default About
