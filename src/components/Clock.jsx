import {use, useEffect, useState} from 'react'


const Clock = () => {
    const [time,settime]=useState(new Date());
 
       const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true, // This ensures 12-hour format with AM/PM
      };
useEffect(()=>{
  const inteerval=  setInterval(() => {
         settime(new Date())
    }, 1000);

   return(()=>{
    clearInterval(inteerval);
   }) 
},[])

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
      .catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message} (${err.name})`);
      });
  } else {
    document.exitFullscreen();
  }
}

  return (
    <>
    <div className='text'>
      <span className='bigblue'>const time</span> = &#123;
      <br />
      &nbsp; <span className='blue'>Hour:</span>{time.toLocaleTimeString('en-US', options).split(":")[0] <10?'0'+time.toLocaleTimeString('en-US', options).split(":")[0]:time.toLocaleTimeString('en-US', options).split(":")[0] },
      <br />
       &nbsp; <span className='blue'>Minutes:</span>{time.getMinutes()<10? '0'+time.getMinutes():time.getMinutes()},
       <br />
        &nbsp; <span className='blue'>Seconds:</span>{time.getSeconds()<10? '0'+time.getSeconds():time.getSeconds()},
        <br />
        &nbsp; <span className='blue'>Meridian:</span> <span className='orange'>"{time.toLocaleTimeString('en-US', options).split(" ")[1]}"</span>
      <br />
      &#125;;
      <br />
      
    </div>
    {!document.fullscreenElement?<button className='btn' onClick={toggleFullscreen}>▶️</button>:""}
    </>
  )
}

export default Clock
