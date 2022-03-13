import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Global } from '@emotion/react'
import Startseite from './react/screens/Start'
import { globalStyles } from './styles/globalStyling'
import Loader from './react/components/02_Organisms/Loader/Loader'

const App: React.FC = () => {
  return (
    <Router>
      <Global styles={globalStyles} />
      <Loader />

      <Routes>
        <Route path='/' element={<Startseite />} />
      </Routes>
    </Router>
  )
}

ReactDOM.render(<App />, window.document.getElementById('root'))
