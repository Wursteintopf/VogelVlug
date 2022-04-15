import styled from '@emotion/styled'
import React, { useState } from 'react'
import wave from '../../../public/wave2.svg'
import themeVariables from '../../../styles/themeVariables'
import logo from '../../../public/bird.png'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import TelegramIcon from '@mui/icons-material/Telegram'
import { Container } from '../../00_Atoms/Layout/Container'
import Link from 'next/link'
import Image from 'next/image'
import { CTAButton, CTAContent, CTATagline, FooterContact, FooterContactArea, FooterCopyright, FooterHeadline, FooterLeft, FooterLinkArea, FooterLinkHeader, FooterLogoArea, FooterMenu, FooterRight, FooterSection, FooterWave } from './FooterStyling'
import ContactModal from '../../01_Molecules/ContactModal/ContactModal'

const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <FooterSection>
        <FooterWave><Image src={wave} alt='' layout='responsive' /></FooterWave>
        <CTAContent maxWidth={1200}>
          <FooterHeadline>Lust mit mir zu arbeiten?</FooterHeadline>
          <CTATagline>
            Fordert mich heraus! Ich will mit euch gemeinsam das richtig coole Zeug machen!
          </CTATagline>
          <CTAButton onClick={() => { setModalOpen(true) }}>Let&#39;s talk</CTAButton>
        </CTAContent>
        <FooterMenu maxWidth={1200}>
          <FooterLeft>
            <FooterLogoArea>
              <Image src={logo} alt='' /> vogelvlug
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
              <a href='https://fotografievogel.de'>Fotografie Vogel</a>
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
              <a href='https://github.com/Wursteintopf/'>GitHub</a>
              <a href='https://www.xing.com/profile/Markus_Vogel138/cv'>XING</a>
              <a href='https://www.linkedin.com/in/markus-vogel-115338231/'>LinkedIn</a>
            </FooterLinkArea>
            <FooterLinkArea>
              <FooterLinkHeader>Legal Stuff</FooterLinkHeader>
              <Link href='/impressum'>Impressum</Link>
              <Link href='/datenschutz'>Datenschutz</Link>
            </FooterLinkArea>
          </FooterRight>
        </FooterMenu>
        <FooterCopyright maxWidth={1200}>
          © {new Date().getFullYear()} - Markus Vogel
        </FooterCopyright>
      </FooterSection>

      <ContactModal open={modalOpen} setOpen={setModalOpen} />
    </>
    
  )
}

export default Footer
