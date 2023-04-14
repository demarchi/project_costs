import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NewProject from './componets/pages/NewProject';
import NavBar from "./componets/layout/NavBar";
import Home from './componets/pages/Home';
import Company from './componets/pages/Company';
import Contact from './componets/pages/Contact';
import Footer from './componets/layout/Footer';

import Container from './componets/layout/Container';
import Projects from './componets/pages/Projects';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass='min_height' customClass2='column'> 
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/company' Component={Company} />
          <Route path='/projects' Component={Projects} />
          <Route path='/newproject' Component={NewProject} />
          <Route path='/contact' Component={Contact} />
        </Routes>
      </Container>
      <Footer />
      
    </Router>
  )
}

export default App;
