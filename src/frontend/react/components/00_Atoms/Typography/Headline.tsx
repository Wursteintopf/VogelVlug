import styled from '@emotion/styled'
import React from 'react'
import themeVariables from '../../../../styles/themeVariables'

export const StyledHeadline = styled.h2`
  text-align: center;
  font-size: 2.5rem;

  span:first-of-type {
    font-weight: 300;
    color: ${themeVariables.lightBlue};
  }

  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: ${themeVariables.darkOrange};
    margin: 15px auto;
  }

  ${themeVariables.breakMobile} {
    font-size: 2rem;
  }
`

export const Headline: React.FC = (props) => {
  return (
    <StyledHeadline>{props.children}</StyledHeadline>
  )
}

const StyledSubHeadline = styled.h3`
  text-align: center;
`

export const SubHeadline: React.FC = (props) => {
  return (
    <StyledSubHeadline>{props.children}</StyledSubHeadline>
  )
}
