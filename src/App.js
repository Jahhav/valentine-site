import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/navigation-bar';
import HomePage from './components/pages/home-page';
import AboutMe from './components/pages/about-me';
import Contact from './components/pages/contact';
import Valentine from './components/pages/valentine';
import NoPage from './components/pages/no-page';
import YasPage from './components/pages/yas-page';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path='/valentine' element={<Valentine />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/no-page' element={<NoPage />} />
          <Route path='/yes-page' element={<YasPage />} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;
