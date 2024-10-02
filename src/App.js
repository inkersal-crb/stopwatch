import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const formatTime = (time) => {
    const milliseconds = ("0" + ((time / 10) % 100)).slice(-2);
    const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
    const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };


  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false); 

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);


  return (
    <div className="App">
       <div style={{display:"flex",justifyContent:"center"}}>

          <div>
            <div>
              <h1>{formatTime(time)}</h1>
            </div>
            <div style={{display:"flex",gap:"10px"}}>
              <button onClick={() => setRunning(true)} disabled={running}>
                Start
              </button>
              <button onClick={() => setRunning(false)} disabled={!running}>
                Stop
              </button> 
              <button onClick={() => {setRunning(false);setTime(0);}} disabled={!time}>
                Reset
              </button> 
            </div>
          </div>
       </div>
    </div>
  );
}

export default App;
