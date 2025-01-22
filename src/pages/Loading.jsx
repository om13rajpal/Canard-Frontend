import React from 'react'

const Loading = () => {
  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center'>
      <video src="/loading.mp4" muted autoPlay className='w-[35vw]'></video>
    </div>
  )
}

export default Loading