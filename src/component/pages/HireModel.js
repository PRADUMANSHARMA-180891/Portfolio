
import { Dialog } from '@headlessui/react';
const HireModel =({isopen, setIsOpen})=>{
    return(
    <div className=''>
     <Dialog open={isopen} onClose={() => setIsOpen(false)}>
        <Dialog.Overlay className="opacity-100" />

        <div className="fixed flex justify-center inset-0 mt-20">
          <div className='bg-slate-500 w-80 h-64 text-center relative rounded-md'>
            <p>please Fill Information</p>
            <form>
                <div className='mx-auto mt-6'>
                   <input type='input' className='border-1 ext-md px-2 py-1 w-56 rounded-sm' placeholder='please write contact number'/>
                   <textarea className='mt-4 h-28 w-56 px-2 py-2 rounded-sm'/>
                </div>
            </form>
            <div className='absolute right-2 bottom-2'>
            <button className='' type='button' onClick={() => setIsOpen(false)}>Close Modal</button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>

    )
}

export default HireModel;
