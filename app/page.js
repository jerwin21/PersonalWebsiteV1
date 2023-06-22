import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import johnAndBass from '../public/johnAndBassWBackground.jpg';

export default function Home() {
  return (
    <main className='bg-white px-10 '>
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className='text-xl font-burtons'>John Erwin</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer mx-5 text-2xl'/>
            </li>
            <li> <a className='bg-gradient-to-tr from-cyan-500 to-cyan-300 text-white px-4 py-2 border-none rounded-lg ml-2' href='/JohnErwinResume.pdf' target='_blank' rel='noreferrer'>Resume</a></li>
          </ul>
        </nav>
        <div className='flex items-center justify-center text-center'>
          <div className='flex flex-col max-w-md'>
            <h2 className='text-5xl font-bold py-2 text-teal-600'>John Erwin</h2>
            <h3 className='text-2xl py-2'>Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Software Engineer, Adventurer, and Friend to Many
            </p>
            <p className='text-md py-5 leading-8 text-gray-800'>Feared by Fish and C# Bugs</p>
            <p className='text-md py-5 leading-8 text-gray-800'>This little website was a small exercise for myself in a new framework (using Next.js and tailwind.css) and it marks
            beginning of and effort to better market myself as an engineer and worker in general. Over the next several months, I plan on creating several small side-projects that will demonstrate
            my creativity and ingenuity as well allow me to grow as a developer outside of my 9 to 5.</p>
            <p className='text-md py-5 leading-8 text-gray-800'>Stay tuned ...</p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='relative bg-gradient-to-br from-orange-500 to-white rounded-full m-5 p-5 w-70 h-70 max-w-md'>
            <Image src={johnAndBass} className='rounded-full'/>
          </div>
        </div>
        
        <div className='text-5xl text-gray-600 flex justify-center gap-16 py-3'>
          <a href='https://twitter.com/john_w_erwin' target="_blank" rel="noopener noreferrer">
            <AiFillTwitterCircle />
          </a>
          <a href='https://linkedin.com/in/john-erwin-6b494917b' target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin />
          </a>
          <a href='https://instagram.com/jerwizzle' target="_blank" rel="noopener noreferrer">
            <AiFillInstagram />
          </a>
          
        </div>
       
      </section>

      <section>
        <div>
          <h3> </h3>
        </div>
      </section>
    </main>
  )
}
