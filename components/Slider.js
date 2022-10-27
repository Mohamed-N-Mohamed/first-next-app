import Image from 'next/image'
import { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowCircleLeft, FaArrowCircleRight  } from 'react-icons/fa'

const Slider = ({ slides }) => {
  
const [current, setCurrent] = useState(0)
const length = slides.length



const nextSlides = () => {
  setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlides = () => {
  setCurrent(current === 0  ? length - 1 : current - 1)
}

if(!Array.isArray(slides) || slides.length <= 0) {
  return null
}

  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
      <h1 className='test-2xl font-bold text-center'>Gallery</h1>
      <div className='relative flex justify-center p-4'>
        {SliderData.map((slides, index) => (
          <div className={index === current? 'opacity-[1] ease-in duratin-1000' : 'opacity-0' } key={index} >    
           <FaArrowCircleLeft size={50} className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]' onClick={prevSlides}/>
           
            {index === current && (
              <Image src={slides.image} alt="" width='1440' height='600' objectFit='cover'/>
            )}

<FaArrowCircleRight size={50} className='absolute top-[50%] right-[30px]  cursor-pointer select-none z-[2]  text-white/70 ' onClick={nextSlides}/>
             </div>
        ))}
      </div>

    </div>
  )
}

export default Slider