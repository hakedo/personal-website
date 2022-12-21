import React from 'react';
import "./App.css";
import Home from './components/home/Home'
import About from './components/about/About'

const App = () => {
   return (
      <>
         {/* <Header /> */}

         <main className='main'>
            <Home />
            <About />
            {/* <Skills /> */}
            {/* <Services /> */}
            {/* <Qualification /> */}
            {/* <Work /> */}
            {/* <Contact /> */}
         </main>

         {/* <Footer /> */}
         {/* <ScrollUp /> */}
      </>
   )
}

export default App