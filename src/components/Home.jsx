import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export default function Home() {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [searchParams, setSearchParam] = useSearchParams("");
    const pasteId = searchParams.get("pasteId");

  return (
   <div>
     <div className='flex flex-row gap-7 place-content-between'>
      <input 
      className='p-2 rounded-2xl mt-2 w-[66%] pl-5'
      type="text" 
      placeholder='Enter Title name here'
      value={title}
      onChange={(e) => setTitle(e.target.value)} />

      <button className='p-2 rounded-2xl mt-2'>
        {
            pasteId ? "Update My Paste" : "Create My Paste"
        }
      </button>
    </div>

    <div className='mt-8'>
        <textarea 
        className='rounded-2xl mt-4 min-w-[500px] p-4'
        value={value}
        placeholder='Enter content here'
        onChange={(e) => setValue(e.target.value)}
        />
    </div>
   </div>
  )
}
