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
  

  const [visibility0, setvisi0] = useState('block')
  const [visibility1 , setvisi1] = useState('hidden')
  const career_prompt1 = () => {
    setvisi1('block')
    setvisi2('hidden')
    setvisi3('hidden')
    setvisi4('hidden')
    setvisi5('hidden')
    setvisi6('hidden')
    setvisi7('hidden')
    setvisi8('hidden')
    setvisi9('hidden')
    setvisi0('hidden')
  };

  const [visibility2 , setvisi2] = useState('hidden')
  const career_prompt2 = () => {
    setvisi1('hidden')
    setvisi2('block')
    setvisi3('hidden')
    setvisi4('hidden')
    setvisi5('hidden')
    setvisi6('hidden')
    setvisi7('hidden')
    setvisi8('hidden')
    setvisi9('hidden')
    setvisi0('hidden')
  };
  const [visibility3 , setvisi3] = useState('hidden')
  const career_prompt3 = () => {
    setvisi1('hidden')
    setvisi2('hidden')
    setvisi3('block')
    setvisi4('hidden')
    setvisi5('hidden')
    setvisi6('hidden')
    setvisi7('hidden')
    setvisi8('hidden')
    setvisi9('hidden')
    setvisi0('hidden')
  };

  const [visibility4 , setvisi4] = useState('hidden')
  const career_prompt4 = () => {
    setvisi1('hidden')
    setvisi2('hidden')
    setvisi3('hidden')
    setvisi4('block')
    setvisi5('hidden')
    setvisi6('hidden')
    setvisi7('hidden')
    setvisi8('hidden')
    setvisi9('hidden')
    setvisi0('hidden')
  };
  const [visibility5 , setvisi5] = useState('hidden')
  const career_prompt5 = () => {
    setvisi1('hidden')
    setvisi2('hidden')
    setvisi3('hidden')
    setvisi4('hidden')
    setvisi5('block')
    setvisi6('hidden')
    setvisi7('hidden')
    setvisi8('hidden')
    setvisi9('hidden')
    setvisi0('hidden')
  };

  const [visibility6 , setvisi6] = useState('hidden')
  const career_prompt6 = () => {
     setvisi1('hidden')
    setvisi2('hidden')
    setvisi3('hidden')
    setvisi4('hidden')
    setvisi5('hidden')
    setvisi6('block')
    setvisi7('hidden')
    setvisi8('hidden')
    setvisi9('hidden')
    setvisi0('hidden')
  };
  const [visibility7 , setvisi7] = useState('hidden')
  const career_prompt7 = () => {
    setvisi1('hidden')
    setvisi2('hidden')
    setvisi3('hidden')
    setvisi4('hidden')
    setvisi5('hidden')
    setvisi6('hidden')
    setvisi7('block')
    setvisi8('hidden')
    setvisi9('hidden')
    setvisi0('hidden')
  };

  const [visibility8 , setvisi8] = useState('hidden')
  const career_prompt8 = () => {
    setvisi1('hidden')
    setvisi2('hidden')
    setvisi3('hidden')
    setvisi4('hidden')
    setvisi5('hidden')
    setvisi6('hidden')
    setvisi7('hidden')
    setvisi8('block')
    setvisi9('hidden')
    setvisi0('hidden')
  };
  const [visibility9 , setvisi9] = useState('hidden')
  const career_prompt9 = () => {
    setvisi1('hidden')
    setvisi2('hidden')
    setvisi3('hidden')
    setvisi4('hidden')
    setvisi5('hidden')
    setvisi6('hidden')
    setvisi7('hidden')
    setvisi8('hidden')
    setvisi9('block')
    setvisi0('hidden')
  };


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

        <button onClick={career_prompt1} ><Committee image_path="/c1.jpg" position="President"/></button>
        <button onClick={career_prompt2} ><Committee image_path="/c6.jpg" position="VC President 1"/></button>
        <button onClick={career_prompt3} ><Committee image_path="/c6.JPG" position="VC President 2"/></button>
        <button onClick={career_prompt4} ><Committee image_path="/c2.jpg" position="Secretary 1"/></button>
        <button onClick={career_prompt5} ><Committee image_path="/c3.png" position="Secretary 2"/></button>

        </div>
          <div className='flex flex-row justify-center'>
        <button onClick={career_prompt6} ><Committee image_path="/c1.jpg" position="Treasurer"/></button>
        <button onClick={career_prompt7} ><Committee image_path="/c6.jpg" position="Coperate Communication"/></button>
        <button onClick={career_prompt8} ><Committee image_path="/c2.jpg" position="Graphic Design"/></button>
        <button onClick={career_prompt9} ><Committee image_path="/c3.png" position="Presenter"/></button>
        </div>

      <hr className='w-[1200px] ml-auto mr-auto m-10'/>
      <div className='name mr-auto ml-auto border-2 border-blue-950 rounded-4xl p-10 w-[500px] font-light'> 
      <p className={visibility0}>Name</p>
      <p className={visibility1}>Suppamok Tosranon (Jimmy) 6810545921</p>
      <p className={visibility2}>Piyatida Muanjaingam (Ploy) 6810545760</p>
      <p className={visibility3}>Siraphob Phonphakdee (Peem) 6810545930</p>
      <p className={visibility4}>Phunnipath Theankaew (Nice) 6810545816</p>
      <p className={visibility5}>Apichai Pattanakamolkul (Ess) 6810545972</p>
      <p className={visibility6}>Chatthaya Tipatnaranan (Ping) 6810545531</p>
      <p className={visibility7}>Thunyasorn Chaliasomboon (Dear) 6810545689</p>
      <p className={visibility8}>Chayapol Kaewsakul (Kew) 6810545557</p>
      <p className={visibility9}>Phutharak Wongpitak (Q) 6810545841</p>
      </div>

      </div>

      <div className='carreer-section flex flex-col justify-center text-center'>
        <h2 className='mt-10 mb-10 font-bold'>Development Team</h2>
        <div className='flex flex-row justify-center'>
        <Committee image_path="/c4.jpg" position="Lead Developer"/>
        <Committee image_path="/c5.jpg" position="Developer 1"/>
        <Committee image_path="/c2.jpg" position="Developer 2"/>
        <Committee image_path="/c3.png" position="Developer 3"/>
        </div>

        <div className=' flex flex-col justify-center ml-auto mr-auto  m-5 mt-48 mb-48 bg-black p-5  rounded-2xl'>
        <h1 className='text-5xl mt-5 mb-5 font-bold text-white inline-block'>Discord Community <img className='inline-block rounded-4xl  w-20' src='/discord.png'/> </h1>
        
        <div className=' flex flex-row ml-auto mr-auto'>
          <a className= 'mt-5 mb-10 m-5'href='https://discord.gg/FkKtkcu4'><iframe src="https://discord.com/widget?id=1397550111344558201&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe></a>
          <a className= 'mt-5 mb-10 m-5'href='https://discord.gg/FkKtkcu4'><iframe src="https://discord.com/widget?id=1397550111344558201&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe></a>
          <a className= 'mt-5 mb-10 m-5'href='https://discord.gg/FkKtkcu4'><iframe src="https://discord.com/widget?id=1397550111344558201&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe></a>
        </div>


      </div>

      </div>

    <Footer />
  </main>

  );
}

export default App
