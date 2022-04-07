import styled from '@emotion/styled'
import React from 'react'
import themeVariables from '../../../styles/themeVariables'
import { Container } from '../../00_Atoms/Layout/Container'

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

interface AboutProps {
  header: string
  paragraph: string
}

const About: React.FC<AboutProps> = (props) => {
  return (
    <section>
      <AboutContainer maxWidth={1000}>
        <AboutH2>
          {props.header}
        </AboutH2>
        <AboutP>
          {props.paragraph}
        </AboutP>
      </AboutContainer>
    </section>
  )
}

export default About
