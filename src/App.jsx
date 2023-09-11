import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import SearchDiv from './Components/SearchDiv/SearchDiv'
import Jobs from './Components/JobDiv/Jobs'
import Value from './Components/ValueDiv/value'
import Footer from './Components/FooterDiv/Footer'

function App() {
  return (
    <div className='w-[85%] mx-auto'>
        <Navbar/>
        <SearchDiv/>
        <Jobs/>
        <Value/>
        <Footer/>
    </div>
  )
}

export default App
