import Link from 'next/link'
import { useState, useEffect} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai' 

const Navbar = () => {
  //nav state
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [text, setTextColor] = useState('white')


  //handle nav click
  const handleNavClick = () => {
    setNav((prev) => !prev)
  }

  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 90){
        setColor('#ffffff')
        setTextColor('#000000')
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
      }
    }

    window.addEventListener('scroll', changeColor)

  }, [])


  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left- top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] margin-auto flex justify-between items-center p-4 text-white'>
        <Link href="/">
        <h1 style={{color: `${text}`}} className='font-bold text-4xl'>Capture</h1>
        </Link>
        <ul style={{color: `${text}`}} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href="/Home">Home</Link>
          </li>
          <li className='p-4'>
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className='p-4'>
            <Link href="/portfolio">Work</Link>
          </li>
          <li className='p-4'>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div className='block sm:hidden z-10' onClick={handleNavClick}>
          {nav? <AiOutlineClose size={20} style={{color: `${text}`}}/> : <AiOutlineMenu size={20} style={{color: `${text}`}}/>}
  
        </div>
        <div className={nav ? 'absolute top-0 left-0 right-0 bottm-0 flex justify-center items-center w-screen h-screen bg-black text-center ease-ing duration-300 sm:hidden' : 'absolute top-0 left-[-100%] right-0 bottm-0 flex justify-center items-center w-screen h-screen bg-black text-center ease-ing duration-300 sm:hidden'}>
        <ul>
          <li className='p-4 text-4xl hover:text-gray-500'>
            <Link href="/Home">Home</Link>
          </li>
          <li className='p-4 text-4xl hover:text-gray-500'>
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className='p-4 text-4xl hover:text-gray-500'>
            <Link href="/portfolio">Work</Link>
          </li>
          <li className='p-4 text-4xl hover:text-gray-500'>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar