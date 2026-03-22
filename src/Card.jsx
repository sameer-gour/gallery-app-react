import React from 'react'

function Card(props) {
  return (
    <>
     <a href={props.elem.url} target='_blank'>
          <div className='h-50 w-65 overflow-hidden  '>
         <img className='rounded-xl h-full w-full object-cover' src={props.elem.download_url} alt="" />
      </div>
       <h2 className='text-white text-xl'>{props.elem.author}</h2>
        </a>
    </>
  )
}

export default Card