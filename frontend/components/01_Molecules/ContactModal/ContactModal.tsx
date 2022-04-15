import React, { Dispatch, SetStateAction, useState } from 'react'
import { ThemeProvider, Button, Dialog, DialogActions, DialogTitle, IconButton, TextField, DialogContent, withStyles, createTheme } from '@mui/material'
import styled from '@emotion/styled'
import themeVariables from '../../../styles/themeVariables'
import { getAPI, postAPI } from '../../../lib/api'

interface ContactModalProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    border-top: 3px solid ${themeVariables.darkOrange};
    padding: 30px;
  }
`

const SendButton = styled(Button)`
  padding: 10px 0;
`

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins'
  },
  palette: {
    primary: {
      main: themeVariables.baseBlue,
    }
  },
})

export const ContactHeader = styled.h3`
  text-align: center;
  font-size: 2rem;
  margin: 0 0 20px 0;
`

export const InputContainer = styled.div`
  margin: 10px 0;
`

const ContactModal: React.FC<ContactModalProps> = ({ open, setOpen }) => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledDialog 
        open={open}
        onClose={handleClose}
      >
        <ContactHeader>Kontakt</ContactHeader>

        <InputContainer>
          <TextField 
            fullWidth
            value={name}
            label={'Name'}
            onChange={event => setName(event.target.value)}
          />
        </InputContainer>
        
        <InputContainer>
          <TextField 
            fullWidth
            value={email}
            label={'Email'}
            onChange={event => setEmail(event.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <TextField 
            fullWidth
            value={message}
            multiline
            rows={4}
            label={'Nachricht'}
            onChange={event => setMessage(event.target.value)}
          />  
        </InputContainer>
        
        <InputContainer>
          <SendButton
            fullWidth
            variant='contained'
            onClick={() => {
              postAPI('/messages', { name: name, email: email, message: message }, {}, 'external')

              setName('')
              setEmail('')
              setMessage('')
              setOpen(false)
            }}
          >
            Absenden
          </SendButton>
        </InputContainer>
      </StyledDialog>
    </ThemeProvider>
  )
}

export default ContactModal