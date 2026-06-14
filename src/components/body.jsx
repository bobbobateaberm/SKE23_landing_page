import { useState } from 'react'

function Body() {
  const img_paths = ['/s1.png','/s2.png','/s3.png'];
  const [img , setImg] = useState(img_paths[0])
  const img_change = () => {
    const idx = Math.floor(Math.random() * img_paths.length)
    setImg(img_paths[idx])
  }


  return (
      <>
      <div className='border-2 border-l-white pl-4'>
      <h1 className='text-white font-bold m-0'>About <span className='text-blue-500'>SKE</span></h1>
      <p className='font-light'>
       The Software and Knowledge Engineering (SKE) program has been offered by the Department of Computer Engineering since 2003 in response to the needs of the country, which is undergoing rapid technological change. The aim is to produce graduates with the knowledge and skills in software and knowledge engineering with experience in extensive practical work. Students have many opportunities to gain practical experience through cooperative or internship programs, as well as project-based learning. Every year, the eXceed Camp – an intensive software development camp in an open environment for developing technical and social skills – is held during summer of the program’s second year.
      </p>
      </div>

      <div className='mt-20'>
        <button className='img_button' onClick={img_change}><img src={img} /></button>
      </div>


      </>
  )
}

export default Body
