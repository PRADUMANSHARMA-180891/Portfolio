import React from 'react'
import Portfolio from '../portfolio/Portfolio'

const Main = () => {
  return (
  <section className='bg-grey-100 w-screen h-screen bg-slate-800'>
    <div className='flex flex-col sm:flex-row  justify-center items-center mx-auto '>
      <div className='md:mr-64 text-white md:text-center text-center'>
        <h1 className='my-4 font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase'> HI, IAM PRADUMAN</h1>
        <p className='font-serif text-2xl '>A Full-Stack Developer Engineer</p>
        <button type="button" className="text-gray-900 bg-yellow-500 borderborder-gray-300 
        focus:outline-nonehover:bg-yellow-600 focus:ring-4 focus:ring-gray-200 
        font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-16"
        >Download CV
        </button>
      </div>
      <div className='md:w-1/3 md:h-1/3 mx-10 my-10 w-full h-1/2'>
        <img src='https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg' alt='prdy'/>
      </div>
    </div>
    <div className='sm:my-24'>
      <Portfolio/>
    </div>
  </section>
  )
}

export default Main