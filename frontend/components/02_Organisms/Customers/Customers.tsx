import styled from '@emotion/styled'
import React from 'react'
import themeVariables from '../../../styles/themeVariables'
import { Headline } from '../../00_Atoms/Typography/Headline'
import quotationMarksSemitransparent from '../../../public/quotation-mark-semitransparent.svg'
import quotationMarks from '../../../public/quotation-mark.svg'
import { Container } from '../../00_Atoms/Layout/Container'

const CustomerContainer = styled(Container)`
  margin: 0 auto 200px auto;
  padding: 0 50px;

  ${themeVariables.breakMobile} {
    padding: 0 20px;
  }
`

export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.3rem;
`

export const Quote = styled.span`
  width: 100%;
  margin: 30px 0;
  padding: 30px 60px;
  font-weight: 300;
  position: relative;
  background-image: url('/quotation-mark-semitransparent.svg');
  background-repeat: no-repeat;
  background-position: center;

  ${themeVariables.breakMobile} {
    padding: 40px 20px;
  }

  &::before {
    content: '';
    background-image: url('quotation-mark-semitransparent.svg');
    background-repeat: no-repeat;
    background-position: center;
    display: block;
    height: 32px;
    width: 32px;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(180deg);
  }

  &::after {
    content: '';
    background-image: url('quotation-mark-semitransparent.svg');
    background-repeat: no-repeat;
    background-position: center;
    display: block;
    height: 32px;
    width: 32px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`

export const QuoteAuthor = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
`

export const QuoteAuthorPosition = styled.span`
  font-weight: 300;
  color: ${themeVariables.lightBlue};
`

const Customers: React.FC = () => {
  return (
    <CustomerContainer maxWidth={1000}>
      <Headline>
        <span>Vertraut nicht mir...</span><br />
        <span>...vertraut lieber meinen Kund*innen</span>
      </Headline>

      <QuoteContainer>
        <Quote>
          Markus hat uns im kompletten Rebranding Prozess begleitet und uns geholfen, eine komplett neue Corporate Identity zu entwickeln.<br />
          Von Logo Design bis zum Relaunch der Webseite stand er uns mit Kreativität und technischem Wissen zur Seite.
        </Quote>
        <QuoteAuthor>Aimee</QuoteAuthor>
        <QuoteAuthorPosition>Vorsitzende des Sahakom e.V.</QuoteAuthorPosition>
      </QuoteContainer>
    </CustomerContainer>
  )
}

export default Customers
