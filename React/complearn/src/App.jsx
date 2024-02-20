import { useState } from 'react';

import './App.css';

const SecNav = ()=>{
  return(
    <div>
      <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
    </div>
  )
}


const Info = (props)=>{

  console.log("Info",props.val)
  return(
    <div className='info'>
      <h2> {props.name} </h2>
      <h3>{props.info} {props.val}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, et dolorum optio omnis nulla perspiciatis, quas quae voluptatum quam est soluta laboriosam deserunt aliquid totam iure a illum expedita fugit cumque harum accusamus. Quis, itaque deserunt, vitae amet aliquid nemo cumque facilis magnam ducimus a beatae ab quo quidem consequuntur.</p>
    </div>
  )
}

function App() {

  const[ value, setValue] = useState(0);

  console.log("App",value)

  function onbtncick(){
    setValue(value+1)
  }
  
  return (
    <div className='main'>
      <h1 className='h1'>hiii i am <span>{value}</span></h1>
      <button onClick={onbtncick} >click me</button >
      <SecNav/>
      <Info val={value} name={'it is a nature'} info={'it is good'}/>
    </div>
  );
}

export default App;
