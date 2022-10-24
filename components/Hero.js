import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-image'>
      <div />

      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70'>
        <h2>Heading</h2>
      </div>

      <p>Message</p>
      <button>Book</button>
    </div>
  )
}

export default Hero