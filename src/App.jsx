import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {

  const [usrdata, setusrdata] = useState([])
  


  const getdata = async()=>{
    const respons =  await axios.get('https://picsum.photos/v2/list?page=4&limit=18');
    setusrdata(respons.data)  
    console.log(respons.data);    
  }

  useEffect(() => {
    getdata() 
    
  }, [])
  

  let printusrdata = (
  <div className="flex justify-center items-center h-screen w-full text-gray-500">
    Loading...
  </div>
);


  if (usrdata.length > 0) {
    printusrdata = usrdata.map(function (elem, idx) {

      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-55 overflow-hidden  '>
         <img className='rounded-xl h-full w-full object-cover' src={elem.download_url} alt="" />
      </div>
        </a>
       <h2 className='text-white text-xl'>{elem.author}</h2>
      </div>
     
    })
  }


  return (
    <>
    <div className='p-5 h-screen bg-black text-white'>
    
      <div className='flex flex-wrap gap-5 p-2'>
      {printusrdata}
    </div>
     
    <div className='flex justify-center items-center  gap-5 mt-5'>
      <button className='p-2 text-black text-2xl font-bold rounded-2xl bg-amber-400'>Prve</button>
        <h2 className='text-2xl font-bold capitalize'>page 4</h2>
      <button className='p-2 text-black text-2xl font-bold rounded-2xl bg-amber-400'>Next</button>
    </div>
    </div>

    </>
  )
}

export default App
