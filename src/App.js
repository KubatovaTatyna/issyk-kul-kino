import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage/AboutPage';
import HomePage from './components/HomePage/HomePage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Movies from './components/MoviesPage/Movies';
import DescriptionPage from './components/DescriptionPage/DescriptionPage';
import Contact from './components/ContactPage/ContactPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        <Route path='/cinema' element={<AboutPage />} />
        <Route path='/films' element={<Movies />} />
        <Route path='/films/:descriptionId' element={<DescriptionPage />} />
        <Route path='/contacts' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
