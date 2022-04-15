import styled from '@emotion/styled'

export const Container = styled.div<{ maxWidth: number }>`
  max-width: ${props => props.maxWidth}px;
  margin: 0 auto;
`
