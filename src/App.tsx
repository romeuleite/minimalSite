import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Intro from './components/Intro'
import Portifolio from './components/Portifolio'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <body>
      <div className='container'>
        <Intro />
        <Portifolio />
      </div>

      <Footer />
    </body>

  )
}

export default App
