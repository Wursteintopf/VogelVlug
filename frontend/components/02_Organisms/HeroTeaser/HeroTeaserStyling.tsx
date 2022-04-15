import styled from '@emotion/styled'
import themeVariables from '../../../styles/themeVariables'
import Image from 'next/image'

export const HeroTeaserSection = styled.section`
  height: 100vh;
  min-height: 700px;
  width: 100vw;
  background-color: ${themeVariables.baseBlue};
  margin: 0;
  color: #ffffff;
  position: relative;
`

export const HeroTeaserContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  ${themeVariables.breakDesktop} {
    flex-direction: column-reverse;
    justify-content: start;
  }

  div {
    position: relative;
    margin: 100px;
    overflow: hidden;

    ${themeVariables.breakDesktop} {
      text-align: center;
      margin: 50px 100px;
    }

    ${themeVariables.breakMobile} {
      margin: 50px;
    }

    h1 {
      position: relative;
      margin: 0;    
      font-size: 4em;    
      animation-name: moveInLeft;
      animation-delay: 300ms;
      animation-duration: 1000ms;
      animation-timing-function: ease-in-out 0.2s;

      ${themeVariables.breakXL} {
        font-size: 3.5rem;
      }

      ${themeVariables.breakMobile} {
        font-size: 3rem;
      }
    }

    p {
      position: relative;
      font-weight: 300;
      letter-spacing: 0.2em;
      animation-name: moveInLeft;
      animation-delay: 500ms;
      animation-duration: 800ms;
      animation-timing-function: ease-in-out 0.2s;
    }
  }

  img {
    position: relative;
    width: 500px !important;
    height: 500px !important;
    margin-right: 100px;
    animation-name: scaleUp;
    animation-delay: 400ms;
    animation-duration: 1000ms;
    animation-timing-function: ease-in-out 0.2s;

    ${themeVariables.breakXXL} {
      width: 400px !important;
      height: 400px !important;
    }

    ${themeVariables.breakDesktop} {
      margin-top: 50px;
      margin-right: 0;
      width: 300px !important;
      height: 300px !important;
    }

    ${themeVariables.breakMobile} {
      margin-top: 50px;
      margin-right: 0;
      width: 250px !important;
      height: 250px !important;
    }
  }

  @keyframes scaleUp {
    from { transform: scale(0.7); }
    to { transform: scale(1); }
  }

  @keyframes moveInLeft {
    from { left: -100%; }
    to { left: 0; }
  }
`

export const HeroTeaserBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1920px;
  height: 1080px;
  transform: translate(-50%, -50%);

  span {
    position: relative;
    overflow: visible;
  }

  div {
    width: 1920px;
    height: 1080px;

    ${themeVariables.breakDesktop} {
      width: 1500px;
    }
  }
`

export const HeroTeaserParallaxElement = styled.div<{ x: number, y: number }>`
  position: absolute;
  left: ${props => props.x - 50}%;
  top: ${props => props.y - 50}%;
  animation-name: fadeIn;
  animation-delay: 200ms;
  animation-duration: 1000ms;
  animation-timing-function: ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`
