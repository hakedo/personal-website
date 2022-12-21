import React from 'react';
import "./App.css";
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'

const App = () => {
   return (
      <>
         {/* <Header /> */}

         <main className='main'>
            <Home />
            <About />
            <Skills />
            <Experience />
            {/* <Work /> */}
            {/* <Contact /> */}
         </main>

         <Footer />
         {/* <ScrollUp /> */}
      </>
   )
}

export default App