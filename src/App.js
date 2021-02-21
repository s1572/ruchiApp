
import './App.css';
import Footer from './components/Footer';

import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Home from './pages/Home';
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom'









function App() {
  return (
    <>
  
     <Header />
     <body className="ttt">
       <Router>
         <nav className="navv a">

           <Link to="">Home </Link>|
           
           <Link to="/about"> About </Link>|
           
           <Link to="/contact"> Contact </Link>|
           
           <Link to="/features"> Features </Link>
           </nav>

           <Route exact path="/" component={Home} />
           <Route exact path="/about" component={About} />
           <Route exact path="/contact" component={Contact} />
           <Route exact path="/features" component={Features} />
           </Router>


     </body>
     {/* <Home />
     <About />
     <Contact />
     <Features/> */}
     <Footer />
    
    </>
  );
}

export default App;
