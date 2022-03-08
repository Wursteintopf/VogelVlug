import styled from '@emotion/styled'
import React from 'react'
import wave from '../../../../assets/wave2.svg'
import themeVariables from '../../../../styles/themeVariables'
import arrow from '../../../../assets/arrow.svg'
import logo from '../../../../assets/bird.png'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import TelegramIcon from '@mui/icons-material/Telegram'

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
  margin: 0 auto;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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

export const FooterMenu = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
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
    width: 64px;
    height: 64px;
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
`

export const FooterLinkArea = styled.div`
  margin-left: 60px;

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

export const FooterCopyright = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 60px;
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.9rem;
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
      <FooterMenu>
        <FooterLeft>
          <FooterLogoArea>
            <img src={logo} /> vogelvlug
          </FooterLogoArea>
          <FooterContactArea>
            <FooterContact><PersonIcon />Markus Vogel</FooterContact>
            <FooterContact><EmailIcon />markus@vogelvlug.de</FooterContact>
            <FooterContact><TelegramIcon />Telegram: @Markus Vogel</FooterContact>
          </FooterContactArea>
        </FooterLeft>
        <FooterRight>
          <FooterLinkArea>
            <FooterLinkHeader>Mehr von mir</FooterLinkHeader>
            <a href='https://youlys.de'>YouLys</a>
            <a href='https://shop.vogelvlug.de'>VogelVlug Shop</a>
            <a href='https://gridplanner.vogelvlug.de'>Gridplanner</a>
            <a href='https://sociallinks.vogelvlug.de'>Linktree</a>
            <a href='https://t.me/vogelvlug'>Telegram Gruppe</a>
          </FooterLinkArea>
          <FooterLinkArea>
            <FooterLinkHeader>Supporte mich</FooterLinkHeader>
            <a href='https://paypal.me/vogelvlug'>PayPal</a>
            <a href='https://patreon.com/vogelvlug'>Patreon</a>
          </FooterLinkArea>
          <FooterLinkArea>
            <FooterLinkHeader>Social Media</FooterLinkHeader>
            <a href='https://tiktok.com/@vogelvlug'>TikTok</a>
            <a href='https://youtube.com/vogelvlug'>YouTube</a>
            <a href='https://www.instagram.com/vogel_vlug/'>Instagram</a>
            <a href='https://www.xing.com/profile/Markus_Vogel138/cv'>XING</a>
            <a href='https://www.linkedin.com/in/markus-vogel-115338231/'>LinkedIn</a>
          </FooterLinkArea>
          <FooterLinkArea>
            <FooterLinkHeader>Legal Stuff</FooterLinkHeader>
            <a href='https://vogelvlug.de/impressum'>Impressum</a>
            <a href='https://vogelvlug.de/datenschutz'>Datenschutz</a>
          </FooterLinkArea>
        </FooterRight>
      </FooterMenu>
      <FooterCopyright>
        © {new Date().getFullYear()} - Markus Vogel
      </FooterCopyright>
    </FooterSection>
  )
}

export default Footer
