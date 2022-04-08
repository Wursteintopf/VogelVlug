import styled from '@emotion/styled'
import React from 'react'
import { Container } from '../../00_Atoms/Layout/Container'
import { Headline } from '../../00_Atoms/Typography/Headline'
import ReactMarkdown from 'react-markdown'

interface TextBoxProps {
  title: string,
  text: string,
}

export const TextBoxContainer = styled(Container)`
  margin-bottom: 350px;
`

const TextBox: React.FC<TextBoxProps> = (props) => {
  return (
    <TextBoxContainer maxWidth={900}>
      <Headline>{props.title}</Headline>
      <ReactMarkdown children={props.text} />
    </TextBoxContainer>
  )
}

export default TextBox
