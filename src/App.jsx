import { useState } from 'react'
import  Footer from './components/footer'
import  Navbar  from './components/navbar';
import  Body  from './components/body';
import  Hero  from './components/hero';
import './App.css'

const Committee = ({image_path, position}) => {
  return (
        <div className='committee flex flex-col items-center m-5'>
          <img src={image_path} className='object-cover m-5' />
          <p className='font-light'>{position}</p>
        </div>
  )
};


function App() {

return (
  <main className='p-0'>
    <Navbar />
    <Hero />
      <div className='content'>
        <Body />
      </div>

      <div className='carreer-section flex flex-col justify-center text-center'>
        <h2 className='mt-10 mb-10 font-bold'>Management Team</h2>
        <div className='flex flex-row justify-center'>

        <Committee image_path="/public/c1.jpg" position="President"/>
        <Committee image_path="/public/c6.jpg" position="VC President 1"/>
        <Committee image_path="/public/c6.jpg" position="VC President 2"/>
        <Committee image_path="/public/c2.jpg" position="Secretary 1"/>
        <Committee image_path="/public/c3.png" position="Secretary 2"/>

        </div>
          <div className='flex flex-row justify-center'>
        <Committee image_path="/public/c1.jpg" position="Treasurer"/>
        <Committee image_path="/public/c6.jpg" position="Coperate Communication"/>
        <Committee image_path="/public/c2.jpg" position="Graphic Design"/>
        <Committee image_path="/public/c3.png" position="Presenter"/>
        </div>

      <hr className='w-[1200px] ml-auto mr-auto m-10'/>
      <p className='career-info'>Suppamok Tosranon (Jimmy) 6810545921</p>
      <p className='career-info'>Piyatida Muanjaingam (Ploy) 6810545760</p>
      <p className='career-info'>Siraphob Phonphakdee (Peem) 6810545930</p>
      <p className='career-info'>Phunnipath Theankaew (Nice) 6810545816</p>
      <p className='career-info'>Apichai Pattanakamolkul (Ess) 6810545972</p>
      <p className='career-info'>Chatthaya Tipatnaranan (Ping) 6810545531</p>
      <p className='career-info'>Thunyasorn Chaliasomboon (Dear) 6810545689</p>
      <p className='career-info'>Chayapol Kaewsakul (Kew) 6810545557</p>
      <p className='career-info'>Phutharak Wongpitak (Q) 6810545841</p>
      </div>

      <div className='carreer-section flex flex-col justify-center text-center'>
        <h2 className='mt-10 mb-10 font-bold'>Development Team</h2>
        <div className='flex flex-row justify-center'>
        <Committee image_path="/public/c4.jpg" position="Lead Developer"/>
        <Committee image_path="/public/c5.jpg" position="Developer 1"/>
        <Committee image_path="/public/c2.jpg" position="Developer 2"/>
        <Committee image_path="/public/c3.png" position="Developer 3"/>
        </div>

        <div className=' flex flex-col justify-center ml-auto mr-auto w-[1050px] m-5 mt-48 mb-48 bg-black p-5  rounded-2xl'>
        <h1 className='text-5xl mt-5 mb-5 font-bold text-white inline-block'>Discord Community <img className='inline-block rounded-4xl  w-20' src='/public/discord.png'/> </h1>
        
        <div className=' flex flex-row ml-auto mr-auto'>
          <a className= 'mt-5 mb-10 m-5'href='https://discord.gg/FkKtkcu4'><iframe src="https://discord.com/widget?id=1&theme=dark"  width="350"height="400"allowtransparency="true"frameborder="0"sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe></a>
          <a className= 'mt-5 mb-10 m-5'href='https://discord.gg/FkKtkcu4'><iframe src="https://discord.com/widget?id=1397550111344558201&theme=dark"  width="350"height="400"allowtransparency="true"frameborder="0"sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe></a>

        </div>


      </div>

      </div>

    <Footer />
  </main>

  );
}

export default App
