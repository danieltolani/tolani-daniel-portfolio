import Layout from './components/Layout';
import Work from './components/Work';
import './sass/app.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className='main-app'>
      <Layout/>
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Work />}/>
        </Routes>
      </main>
      </div>
    </Router>
  );
}

export default App;
