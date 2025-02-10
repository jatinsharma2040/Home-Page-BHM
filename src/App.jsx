import React from 'react'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Courses from './components/Courses'
import Podcast from './components/Podcast'
import Feedback from './components/Feedback'
import Connect from './components/Connect'
import Join from './components/Join'
import Questions from './components/Questions'
import Advisor from './components/Advisor'
import Footer from './components/Footer'
import Webniers from './components/Webniers'
import ScrollBtn from './components/ScrollBtn'

const App = () => {
  return (  
    <div className='px-2 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <Navbar/>
      <Home/>
      <Webniers/>
      <Courses/>
      <Podcast/>
      <Feedback/>
      <Connect/>
      <Join/>
      <Questions/>
      <Advisor/>
      <Footer/>
      <ScrollBtn/>


      {/* <Routes>
        <Route path='/' element={<Home/>}/>

      </Routes> */}
    </div>
  )
}

export default App