import styled from '@emotion/styled'
import themeVariables from '../../../../styles/themeVariables'

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

  div {
    position: relative;
    margin: 100px;
    overflow: hidden;

    h1 {
      position: relative;
      margin: 0;    
      font-size: 4em;    
      animation-name: moveInLeft;
      animation-delay: 300ms;
      animation-duration: 1000ms;
      animation-timing-function: ease-in-out 0.2s;
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
    width: 500px;
    height: 500px;
    margin-right: 100px;
    animation-name: scaleUp;
    animation-delay: 400ms;
    animation-duration: 1000ms;
    animation-timing-function: ease-in-out 0.2s;
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
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;

  #rocket {
    transition: opacity 1s ease, left 0.5s ease-in-out 0.1s, top 0.5s ease-in-out 0.1s;
    z-index: 5;
    opacity: 0;
  }

  div {
    width: 100vw;
    height: 100vh;
  }
`

export const HeroTeaserParallaxElement = styled.img<{ x: number, y: number }>`
  position: absolute;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  animation-name: fadeIn;
  animation-delay: 200ms;
  animation-duration: 1000ms;
  animation-timing-function: ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`
