import styled from "@emotion/styled"
import themeVariables from "../../../styles/themeVariables"
import { Container } from "../../00_Atoms/Layout/Container"

export const FooterSection = styled.section`
  position: relative;
  background-color: ${themeVariables.baseBlue};
  width: 100vw;
  margin: 0 auto;
  padding: 60px 0 20px 0;
  color: ${themeVariables.white};
`

export const FooterWave = styled.div`
  position: absolute;
  bottom: 100%;
  left: -10px;
  z-index: -10;
  width: 105vw;
  height: 18vw;

  span {
    overflow: visible;
  }
`

export const FooterHeadline = styled.h2`
  text-align: center;
  font-size: 2.5rem;

  ${themeVariables.breakMobile} {
    font-size: 2rem;
  }
`

export const CTAContent = styled(Container)`
  padding: 0 20px 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
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
    background-image: url('/arrow.svg');
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

export const FooterMenu = styled(Container)`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;

  ${themeVariables.breakXL} {
    padding: 60px;
    flex-direction: column;
  }
`

export const FooterLeft = styled.div`

`

export const FooterLogoArea = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 40px;

  img {
    width: 64px !important;
    height: 64px !important;
    margin-right: 20px;
  }
`

export const FooterContactArea = styled.div`
  
`

export const FooterContact = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  svg {
    margin-right: 10px;
  }
`

export const FooterRight = styled.div`
  display: flex;

  ${themeVariables.breakXL} {
    margin-top: 60px;
  }

  ${themeVariables.breakTablet} {
    flex-wrap: wrap;
  }
`

export const FooterLinkArea = styled.div`
  margin-left: 60px;

  &:first-of-type {
    margin-left: 0;
  }

  ${themeVariables.breakTablet} {
    width: 50%;
    margin-left: 0;
    margin-bottom: 60px;
  }

  ${themeVariables.breakMobile} {
    width: 100%;
  }

  a {
    display: block;
    color: ${themeVariables.white};
    margin-bottom: 10px;
  }
`

export const FooterLinkHeader = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 20px;
`

export const FooterCopyright = styled(Container)`
  padding-bottom: 60px;
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.9rem;

  ${themeVariables.breakXL} {
    padding-left: 60px;
  }
`