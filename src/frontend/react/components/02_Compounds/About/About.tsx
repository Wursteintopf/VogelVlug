import styled from '@emotion/styled'
import React from 'react'
import themeVariables from '../../../../styles/themeVariables'

export const AboutContainer = styled.div`
  width: 1000px;
  margin: 0 auto 200px auto;
  display: flex;
  align-items: center;
  color: ${themeVariables.grey8};
`

export const AboutH2 = styled.h2`
  width: 40%;
  font-size: 2.5rem;
`

export const AboutP = styled.p`
  width: 60%;
  font-size: 1.3rem;
  font-weight: 300;
`

const About: React.FC = () => {
  return (
    <section>
      <AboutContainer>
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
