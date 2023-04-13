import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "./componets/layout/NavBar";
import Home from './componets/pages/Home';
import NewProject from './componets/pages/NewProject';
import Company from './componets/pages/Company';
import Contact from './componets/pages/Contact';
import Footer from './componets/layout/Footer';

import Container from './componets/layout/Container';
import styles from './componets/layout/Container.module.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass={[styles.min_height, styles.start]}> 
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/company' Component={Company} />
          <Route path='/newproject' Component={NewProject} />
          <Route path='/contact' Component={Contact} />
        </Routes>
      </Container>
      <Footer />
      
    </Router>
  )
}

export default App;
