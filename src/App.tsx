import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import CardSwitcher from './components/CardSwitcher'
import {motion} from 'framer-motion'
import ArrowButtons from './components/ArrowButtons'


function App() {

  return (
    <div className='relative w-screen h-screen'>
      <CardSwitcher />
    </div>
  )
}

export default App
