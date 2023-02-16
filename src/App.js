import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage/AboutPage';
import HomePage from './components/HomePage/HomePage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Movies from './components/MoviesPage/Movies';
import DescriptionPage from './components/DescriptionPage/DescriptionPage';
import Contact from './components/ContactPage/ContactPage';
import Sessions from './components/Sessions/Sessions';
import Navbar from './components/Navbar/Navbar';
import Toolbar from './components/Toolbar/Toolbar';
import Drawer from './components/Drawer/Drawer';
import { useState } from 'react';

function App() {

  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer () {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <div className="App">
      <Toolbar toggleDrawer={toggleDrawer}/>
      <Drawer open = {drawerOpen} toggle={toggleDrawer}/>
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        <Route path='/sessions' element={<Sessions />} />
        <Route path='/cinema' element={<AboutPage />} />
        <Route path='/sessions' element={<Sessions />} />
        <Route path='/films' element={<Movies />} />
        <Route path='/films/:descriptionId' element={<DescriptionPage />} />
        <Route path='/contacts' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
