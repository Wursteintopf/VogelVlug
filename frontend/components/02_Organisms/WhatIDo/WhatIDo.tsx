import React, { useState } from 'react'
import backend from '../../../public/whatido/backend.svg'
import frontend from '../../../public/whatido/frontend.svg'
import datavis from '../../../public/whatido/datavis.svg'
import content from '../../../public/whatido/content.svg'
import design from '../../../public/whatido/design.svg'
import fotografie from '../../../public/whatido/photography.svg'
import styled from '@emotion/styled'
import themeVariables from '../../../styles/themeVariables'
import { Headline } from '../../00_Atoms/Typography/Headline'
import { Container } from '../../00_Atoms/Layout/Container'
import Image from 'next/image'

export const WhatIDoContainer = styled(Container)`
  margin: 0 auto 200px auto;
`

export const WhatIDoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const WhatIDoItem = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${themeVariables.breakTablet} {
    width: 47%;
  }

  ${themeVariables.breakMobile} {
    width: 100%;
  }

  div {
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 40%;
    }
  }

  h3 {
    margin: 20px 0 10px 0;
  }

  p {
    width: 70%;
    text-align: center;
    margin: 0 0 60px 0;
    color: ${themeVariables.grey7}
  }
`

const WhatIDo: React.FC = () => {
  const [imageHeight, setImageHeight] = useState(120)

  return (
    <WhatIDoContainer maxWidth={1000}>
      <Headline>Was ich mache</Headline>
      <WhatIDoGrid>
        <WhatIDoItem>
          <div><Image src={frontend} layout='fixed' height={imageHeight} alt='' /></div>
          <h3>FrontEnd</h3>
          <p>
            React, Redux, Redux Saga, HTML5, CSS3, SASS, LESS, JavaScript, TypeScript
          </p>
        </WhatIDoItem>
        <WhatIDoItem>
          <div><Image src={backend} layout='fixed' height={imageHeight} alt='' /></div>
          <h3>BackEnd</h3>
          <p>
            TYPO3, PHP, Node.js, JavaScript, TypeScript, Express, MySQL, MariaDB, Docker, Git
          </p>
        </WhatIDoItem>
        <WhatIDoItem>
          <div><Image src={design} layout='fixed' height={imageHeight} alt='' /></div>
          <h3>Design/UI/UX</h3>
          <p>
            Corporate Design, Logo Design, Wireframing, Prototyping, Motion Design, Motion Graphics
          </p>
        </WhatIDoItem>
        <WhatIDoItem>
          <div><Image src={datavis} layout='fixed' height={imageHeight} alt='' /></div>
          <h3>Data Science</h3>
          <p>
            Data Visualization, Interactive Information Visualization, D3.js
          </p>
        </WhatIDoItem>
        <WhatIDoItem>
          <div><Image src={content} layout='fixed' height={imageHeight} alt='' /></div>
          <h3>Content Creation</h3>
          <p>
            TikTok, YouTube, Instagram, Twitter
          </p>
        </WhatIDoItem>
        <WhatIDoItem>
          <div><Image src={fotografie} layout='fixed' height={imageHeight} alt='' /></div>
          <h3>Fotografie/Videografie</h3>
          <p>
            Eventfotografie, Hochzeitsfotografie, Portraitfotografie, Imagevideo
          </p>
        </WhatIDoItem>
      </WhatIDoGrid>
    </WhatIDoContainer>
  )
}

export default WhatIDo
