
import { Dialog } from '@headlessui/react';
const HireModel =({isopen, setIsOpen})=>{
    return(
    <div className=''>
     <Dialog open={isopen} onClose={() => setIsOpen(false)}>
        <Dialog.Overlay className="opacity-100" />

        <div className="fixed flex justify-center inset-0 mt-20">
          <div className='bg-slate-500 w-80 h-64 text-center relative rounded-md'>
            <p className='text-xl font-sans text-gray-100 mt-1'>please Fill Information</p>
            <form>
                <div className='mx-auto mt-3'>
                   <input type='input' className='bg-gray-100 border border-gray-300 text-gray-900 text-md rounded-sm focus:ring-blue-500 focus:border-blue-500 p-2.5 px-2 py-1 w-56 ' placeholder='please enter contact number'/>
                   <textarea className='bg-gray-100 border border-gray-300 text-gray-900 text-md mt-4 h-24 w-56 px-2 py-2 rounded-sm'/>
                </div>
            </form>
            <div className='absolute left-12 bottom-2 text-white border-2 border-blue-600 bg-blue-600 hover:bg-blue-700 px-6 py-1.5 mt-4 rounded-full focus:ring-4'>
            <button className='' type='button' onClick={() => setIsOpen(false)}>close</button>
            </div>
            <div className='absolute right-12 bottom-2 text-white border-2 border-blue-600 bg-blue-600 hover:bg-blue-700 px-6 py-1.5 mt-4 rounded-full focus:ring-4'>
            <button className='' type='button' onClick={() => setIsOpen(false)}>send</button>
            
            </div>
            
          </div>
        </div>
      </Dialog>
    </div>

    )
}

export default HireModel;
