import React, {Component, Fragment} from 'react'
import './App.css';

import Accueil from './components/Accueil';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();




function App() {    

  

    return (
     <Fragment>
        <div className="App">                
          <Accueil/>          
          <Footer />       
      </div>
     </Fragment>
    )
  }


export default App;
