import React from 'react'
import AudioPlayer from "./AudioPlayer";
import tracks from "./tracks";
function List() {
  return (
    <div className='flex-1 bg-[purple] p-5 '>
      <AudioPlayer tracks={tracks} />

    </div>
  )
}

export default List