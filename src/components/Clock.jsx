import {use, useEffect, useState} from 'react'


const Clock = () => {
    const [time,settime]=useState(new Date());
 
useEffect(()=>{
  const inteerval=  setInterval(() => {
         settime(new Date())
    }, 1000);

   return(()=>{
    clearInterval(inteerval);
   }) 
},[])

  return (
    <div className='text'>
      {time.getHours()>12? "0"+time.toLocaleTimeString() : " " +time.toLocaleTimeString()}
    </div>
  )
}

export default Clock
