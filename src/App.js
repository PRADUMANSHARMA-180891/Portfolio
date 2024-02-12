import './App.css';
// import CopilotPage from './component/Ai';
import About from './component/aboutPage/About';
import Contact from './component/contact/Contact';
import Header  from './component/header/Header';
import {  Routes, Route } from 'react-router-dom';
import Main from './component/mainPage/Main';
import Portfolio from './component/portfolio/Portfolio';
function App() {
  return (
    <div className='App'>
        <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
  
      {/* <CopilotPage /> */}
    </div>
  );
}

export default App;
