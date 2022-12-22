import React from 'react';
import "./App.css";
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Nav from './components/navigation/Nav'

const App = () => {
   return (
      <>
         {/* <Header /> */}

         <main className='main'>
            <Home />
            <Nav />
            <About />
            <Skills />
            <Experience />
            <Portfolio />
            <Contact />
         </main>

         <Footer />
         {/* <ScrollUp /> */}
      </>
   )
}

export default App