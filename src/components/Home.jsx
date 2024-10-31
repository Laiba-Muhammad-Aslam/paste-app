import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [searchParams, setSearchParam] = useSearchParams("");
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes)
    console.log(allPastes)

    // useEffect(() => {
    //   if(pasteId){
    //    const paste = allPastes.find((p) => p._id === pasteId);
    //    setTitle(paste.title);
    //    setValue(paste.content)
    //   }
    //  }, [pasteId, allPastes])

    useEffect(() => {
      console.log("pasteId:", pasteId); // Debugging the pasteId value
      if (pasteId) {
        const paste = allPastes.find((p) => p._id === pasteId);
        if (paste) {
          setTitle(paste.title);
          setValue(paste.content);
        } else {
          console.error(`Paste with ID ${pasteId} not found`);
        }
      }
    }, [pasteId, allPastes]);
    

    function createPaste(){
      const paste ={
        title: title,
        content: value,
        _id: pasteId || Date.now().toString(36),
        createdAt: new Date().toISOString(),
      }
   
      

      if(pasteId){
        //update the paste
        dispatch(updateToPastes(paste));
      }else{
        //create the paste
        dispatch(addToPastes(paste));
      }

      // After creation or updation 

      setTitle("");
      setValue("");
      setSearchParam({});
    }

  return (
   <div>
     <div className='flex flex-row gap-7 place-content-between'>
      <input 
      className='p-2 rounded-2xl mt-2 w-[66%] pl-5'
      type="text" 
      placeholder='Enter Title name here'
      value={title}
      onChange={(e) => setTitle(e.target.value)} />

      <button className='p-2 rounded-2xl mt-2' onClick={createPaste}>
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
