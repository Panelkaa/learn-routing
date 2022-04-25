import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import About from './information/About';
import Examples from './information/Examples';
import Contact from './information/Contact';

function App() {
  return (
    <BrowserRouter>
    <section>
      <span>Learn-Routing!</span>
    </section>
    <header>
    <Link className="navbar-brand" to="">
      <h1>Site Name</h1>
     </Link>
      
      <nav>
      <Link to="/About">About</Link>
      <Link to="/Examples">Examples</Link>
      <Link to="/Contact">Contact</Link>

      </nav>
      
    </header>
    <article>
      <h1>Headline</h1>
      <Routes>
          {/* <Route path="/" element={<App />}/> */}
          <Route path="/About" element={<About />}/>
          <Route path="/Examples" element={<Examples />}/>
          <Route path="/Contact" element={<Contact />}/>
          
      </Routes>
    </article>
    
    </BrowserRouter> 
    
  );
}

export default App;
