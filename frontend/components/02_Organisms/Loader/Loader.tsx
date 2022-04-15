import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import themeVariables from '../../../styles/themeVariables'

export const StyledLoader = styled.div<{ bottom: string }>`
  position: fixed;
  top: 0;
  bottom: ${props => props.bottom};
  left: 0;
  right: 0;
  background-color: ${themeVariables.darkBlue};
  z-index: 3;
  transition: 0.7s ease;
`

const Loader: React.FC = () => {
  const [bottom, setBottom] = useState('0')

  setTimeout(() => {
    setBottom('100%')
  }, 150)

  return (
    <StyledLoader bottom={bottom} />
  )
}

export default Loader
