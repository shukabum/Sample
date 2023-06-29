import React, { useState } from 'react'
import './Home.css'

const Home = () => {
  const [count, setcount] =useState(0);
  const handleClick =()=>{
    setcount(count+1);

  }
  const [show, setshow] = useState(false);

  const handleshow=()=>{
    show? setshow(false):setshow(true);
    
  }

  // const imag ={img}
  return (
    <>
    <div className='home-main'>
        <p>Hi I'am</p>
        <h1>
            Shubham Sharma
        </h1>
        <p>Web Developer</p>


        <button onClick={handleClick}>
          Click me
        </button>
          {count}
        <button onClick={handleshow}>
         
         { show ? <p>show</p>:<p>hide</p>}
        </button>
        {/* <Loader type="packman"/> */}
    </div>
    </>
  )
}

export default Home

