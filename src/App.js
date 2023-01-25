import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage/AboutPage';
import HomePage from './components/HomePage/HomePage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} exact/>
        <Route path='/cinema' element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
