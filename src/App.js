import { useState } from 'react';
import './App.css';
import Device from './components/Device';

function App() {
  const[steps,setSetps] =useState(0);
  const handleIncreaceSteps= () =>{
    const newStepsCount= steps + 1;
    setSetps(newStepsCount);
  }
  // useEffect(()=>{
  //   console.log("count");
  // },[steps])
  return (
    <div className="App">
      <h3>My steps: {steps}</h3>
      <button onClick={handleIncreaceSteps}>Walk</button>
     <Device name="Iphone 13 pro" price="15000" steps={steps}></Device>
    </div>
  );
}

export default App;
