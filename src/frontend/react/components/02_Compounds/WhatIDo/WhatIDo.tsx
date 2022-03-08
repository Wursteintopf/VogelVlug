import React from 'react'
import backend from '../../../../assets/whatido/backend.svg'
import frontend from '../../../../assets/whatido/frontend.svg'
import datavis from '../../../../assets/whatido/datavis.svg'
import content from '../../../../assets/whatido/content.svg'
import design from '../../../../assets/whatido/design.svg'
import fotografie from '../../../../assets/whatido/photography.svg'
import styled from '@emotion/styled'
import themeVariables from '../../../../styles/themeVariables'
import { Headline } from '../../00_Atoms/Headline/Headline'

export const WhatIDoContainer = styled.section`
  width: 1000px;
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

  div {
    height: 120px;
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
  return (
    <WhatIDoContainer>
      <Headline>Was ich mache</Headline>
      <WhatIDoGrid>
        <WhatIDoItem>
          <div><img src={frontend} /></div>
          <h3>FrontEnd</h3>
          <p>
            React, Redux, Redux Saga, HTML5, CSS3, SASS, LESS, JavaScript, TypeScript
          </p>
        </WhatIDoItem>
        <WhatIDoItem>
          <div><img src={backend} /></div>
          <h3>BackEnd</h3>
          <p>
            TYPO3, PHP, Node.js, JavaScript, TypeScript, Express, MySQL, MariaDB, Docker, Git
          </p>
        </WhatIDoItem>
        <WhatIDoItem>
          <div><img src={design} /></div>
          <h3>Design/UI/UX</h3>
          <p>
            Corporate Design, Logo Design, Wireframing, Prototyping, Motion Design, Motion Graphics
          </p>
        </WhatIDoItem>
        <WhatIDoItem>
          <div><img src={datavis} /></div>
          <h3>Data Science</h3>
          <p>
            Data Visualization, Interactive Information Visualization, D3.js
          </p>
        </WhatIDoItem>
        <WhatIDoItem>
          <div><img src={content} /></div>
          <h3>Content Creation</h3>
          <p>
            TikTok, YouTube, Instagram, Twitter
          </p>
        </WhatIDoItem>
        <WhatIDoItem>
          <div><img src={fotografie} /></div>
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
