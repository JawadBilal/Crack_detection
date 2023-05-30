import './App.css';
import Navbar from "./Components/Navbar.js"
import Footer from "./Components/Footer.js"

import Home from "./Pages/Home"
import Service from "./Pages/Service"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

import {BrowserRouter as Router, Route , Routes} from "react-router-dom"
import Cracking from './Pages/Cracking';

function App() {
  return (
    <div className="App">
        

        
        <Router>
          <div className='content-container'>
          <Navbar/>
            <Routes>
              <Route exact path="/"  element={<Home />} />
              <Route exact path="/service"  element={<Service/>} />
              <Route exact path="/about"  element={<About/>} />
              <Route exact path="/cracking" element={<Cracking />}/>
              <Route exact path="/contact" element={<Contact />}/>

            </Routes>
          </div> 
      
            
           <div>
           <Footer />
           </div>
            
        </Router>
    </div>
  );
}

export default App;
