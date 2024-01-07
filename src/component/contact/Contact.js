import React from 'react'

const Contact = () => {
  return (
    <div className='bg-slate-800 w-full'>
        <div className='flex sm:flex-row flex-col-reverse justify-center  sm:gap-20 gap-12'>
           <form className='sm:w-2/5  shadow-2xl bg-slate-800 text-white mt-16' >
               <div className='ml-10'>
                  <h1 className='text-bold text-2xl'>Contact form</h1>
               </div>
               <div className='sm:ml-20 ml-10 mt-10'>
                  <div className='my-3'>
                     <label className='text-bold font-serif'>Full Name</label>
                  </div>
                  <input className='sm:w-96 w-48 h-8 border border-gray-300 rounded-md bg-slate-700 p-5 border-opacity-5 shadow-sm' placeholder='Enter Your Full Name' />
                 
               </div>
               <div className='sm:ml-20 ml-10'>
                  <div className='my-3 text-bold font-serif'>
                     <label>Full Name</label>
                  </div>
                  <input className='sm:w-96 w-48 h-8  border border-gray-300 rounded-md bg-slate-700 p-5 border-opacity-5 shadow-sm' placeholder='Enter Your Full Name' />
                 
               </div>
               <div className='sm:ml-20 my-8 ml-10 text-bold font-serif'>
                  <div className='my-3'>
                     <label>Full Name</label>
                  </div>
                  <input className='sm:w-96 w-48 h-8 border border-gray-300 rounded-md bg-slate-700 p-5 border-opacity-5 shadow-sm focus:ring-2' placeholder='Enter Your Full Name' />
                 
               </div>
              <div className='sm:ml-20 my-8 ml-10 text-bold font-serif'>
              <label for="message" class="block  mb-2 text-bold font-serif  text-white">Your message</label>
               <textarea id="message" rows="6" className="block p-2 sm:w-96 w-48 text-sm text-gray-900 bg-slate-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 border-opacity-5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
              </div>
             <div className='sm:ml-20 ml-10 font-medium text-white w-40 py-2 text-center rounded-lg tracking-wider bg-indigo-900 hover:bg-indigo-600 focus:right-1 focus:ring-indigo-900 duration-500'>
               <button>Send message</button>
             </div>
           </form>
           <div className='text-white ml-8 sm:mt-28 mt-20'>
            <div className='top-0 text-2xl font-serif font-bold'>
            <h1>Contact Details</h1>
            </div>
            <div className='mt-10 text-lg font-medium space-y-2'>
            <p>Your Address, Your City, Your Country</p>
              <p>email@domain.com</p>
              <p>555 8888 888</p>
            </div>
             
           </div>
        </div>
    </div>
  )
}

export default Contact