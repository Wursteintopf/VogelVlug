import styled from '@emotion/styled'
import React from 'react'
import wave from '../../../../assets/wave2.svg'
import themeVariables from '../../../../styles/themeVariables'
import { Headline } from '../../00_Atoms/Headline/Headline'
import arrow from '../../../../assets/arrow.svg'

export const FooterSection = styled.section`
  position: relative;
  background-color: ${themeVariables.baseBlue};
  width: 100vw;
  margin: 0 auto;
  padding: 60px 0 20px 0;
  color: ${themeVariables.white};
`

export const FooterWave = styled.img`
  position: absolute;
  top: -340px;
  left: -10px;
  z-index: -10;
`

export const FooterHeadline = styled.h2`
  text-align: center;
  font-size: 2.5rem;

`

export const CTAContent = styled.div`
  width: 1200px;
  margin: 0 auto 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CTATagline = styled.div`
  font-weight: 300;
  font-size: 1.3rem;
  margin-bottom: 40px;
`

export const CTAButton = styled.button`
  background-color: ${themeVariables.white};
  color: ${themeVariables.baseBlue};
  border: none;
  padding: 15px 60px 15px 30px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 40px;
  position: relative;

  &::after {
    content: '';
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: center;
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 17px;
    right: 15px;
    animation-name: movingLeftRight;
    animation-duration: 4000ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;

    @keyframes movingLeftRight {
      30% { right: 15px }
      50% { right: 30px }
      70% { right: 15px }
    }
  }
`

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <FooterWave src={wave} />
      <CTAContent>
        <FooterHeadline>Lust mit mir zu arbeiten?</FooterHeadline>
        <CTATagline>
          Fordert mich heraus! Ich will mit euch gemeinsam das richtig coole Zeug machen!
        </CTATagline>
        <CTAButton>Let's talk</CTAButton>
      </CTAContent>
    </FooterSection>
  )
}

export default Footer
