import Layout from './components/shared/Layout';
import Work from './components/pages/Work';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Play from './components/pages/Play';
import Header from './components/shared/Header';

import './sass/app.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className='main-app'>
      <Layout/>
      <Header/>
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/work" element={<Work />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/play" element={<Play />}/>
        </Routes>
      </main>
      </div>
    </Router>
  );
}

export default App;
