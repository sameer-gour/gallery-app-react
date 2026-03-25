import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './card'

function App() {

  const [usrdata, setusrdata] = useState([])
  const [index, setIndex] = useState(2)


  const getdata = async()=>{
    const respons =  await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setusrdata(respons.data)  
    
  }

  useEffect(() => {
    getdata()     
  },[index])
  

  let printusrdata = (
  <div className="flex justify-center items-center h-screen w-full text-gray-500 text-4xl">
    Loading...
  </div>
);


  if (usrdata.length > 0) {
    printusrdata = usrdata.map(function (elem, idx) {

      return <div key={idx}>
      <div className='overflow-hidden'>
        <Card elem={elem}  />
      </div>
      </div>
     
    })
  }


  return (
    <>
    <div className='p-5 h-screen bg-black text-white'>
    
      <div className='flex flex-wrap gap-8 p-2'>
      {printusrdata}
    </div>
     
    <div className='flex justify-center items-center  gap-8 mt-5 '>
      <button           style={{ opacity: index == 1 ? 0.6 : 1 }}
 onClick={()=>{if (index>1) {
        setIndex(index-1)
      }}}  className='p-2 text-black text-2xl font-bold rounded-2xl  active:scale-95 bg-amber-400'>Prve</button>
        <h2 className='text-2xl font-bold capitalize'>{index-1}</h2>
      <button  onClick={()=>{setIndex(index+1)}}  className='p-2 text-black text-2xl font-bold rounded-2xl active:scale-95 bg-amber-400'>Next</button>
    </div>
    </div>

    </>
  )
}

export default App
