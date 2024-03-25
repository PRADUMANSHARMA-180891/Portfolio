import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import HireModel from '../pages/HireModel';

const  Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  let [isOpen, setIsOpen] = useState(true)
  return (
    <div className="flex items-center justify-evenly py-5 mx-auto bg-slate-800">
   
    <nav>
      <section className="MOBILE-MENU flex lg:hidden">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
        >
          <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
  <li className="border-b border-gray-400 my-8 uppercase">
    <Link to="/">Home</Link>
  </li>
  <li className="border-b border-gray-400 my-8 uppercase">
    <Link to="/about">About</Link>
  </li>
  <li className="border-b border-gray-400 my-8 uppercase">
    <Link to="/portfolio">Portfolio</Link>
  </li>
  <li className="border-b border-gray-900 my-8 uppercase">
    <Link to="/contact">Contact</Link>
  </li>
  <div className='ml-6'>
    <button className='text-white bg-purple-600 font-medium rounded-lg'>HIRE ME</button>
  </div>
</ul>
        </div>
      </section>
      <ul className="DESKTOP-MENU hidden space-x-12 py-4 lg:flex text-xl font-medium text-yellow-50">
      <li >
          <a><Link to='/'>Home</Link></a>
        </li>
        <li >
          <a><Link to='/about'>About</Link></a>
        </li>
        <li>
        <a><Link to='/portfolio'>Projects</Link></a>
        </li>
        <li>
        <a><Link to='/contact'>Contact</Link></a>
        </li>
        <div className='ml-8 text-base font-xl text-white border-2 border-blue-500 bg-blue-500 focus:ring-blue-800 active:ring-4 focus:outline-none hover:bg-blue-600 px-3 py-1.5 rounded-md font-serif'>
        <button onClick={() => setIsOpen(true)}>HIRE ME</button>
      </div>
      </ul>
      <HireModel isopen={isOpen} setIsOpen={setIsOpen}/>
    </nav>
   
    <style>{`
    .hideMenuNav {
      display: none;
    }
    .showMenuNav {
      display: block;
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: white;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  `}</style>
  </div>
    
  

  )
}


export default  Header