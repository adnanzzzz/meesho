import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/commonComponent/Header'
import Slider from './component/commonComponent/Slidersection'
import Slidersection from './component/commonComponent/Slidersection'
import SectionTwo from './component/commonComponent/SectionTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <Slidersection/>
     <SectionTwo/>
    
    </>
  )
}

export default App
