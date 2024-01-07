import React from 'react'

 const About = () => {
  return (
    <div className='bg-slate-800 w-screen h-screen'>
        <div className='grid md:grid-cols-2 grid-cols-1 py-12 sm:mx-4 gap-0'>
           <div className='4xl:w-screen  lg:w-1/2 lg:h-96 md:w-64 md:h-64 w-72 h-72 md:ml-24 md:mt-16 ml-5 xl:mt-18'>
              <img className='rounded-lg' src='https://react-tailwindcss-portfolio.netlify.app/static/media/profile.bbe2eb2e.jpeg' alt='img'/>
           </div>
           <div className='lg:my-2 md:my-0 sm:my-4 md:mx-10 ml-5 sm:ml-1 md:ml-10 lg:ml-0 sm:mt-5 mt-16 text-white xl:mt-24'>
             <h1 className='lg:text-xl 4xl:text-xl text-base font-serif font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel 
              illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis 
              adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas
               facilis molestias nobis ut quam natus similique inventore excepturi
                optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet,
                 consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! 
                 Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, 
             </h1>
           </div>
        </div>
    </div>
  
  )
}

export default About;