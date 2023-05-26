import React from 'react';

function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0)? 
        <button className="stopwatch-btn-fTimeSheet stopwatch-btn-gre-fTimeSheet"
        onClick={props.start}>Start</button> : ""
      }

      {(props.status === 1)? 
        <div>
          <button className="stopwatch-btn-fTimeSheet stopwatch-btn-red-fTimeSheet"
                  onClick={props.stop}>Stop</button>
          <button className="stopwatch-btn-fTimeSheet stopwatch-btn-yel-fTimeSheet"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      }

     {(props.status === 2)? 
        <div>
          <button className="stopwatch-btn-fTimeSheet stopwatch-btn-gre-fTimeSheet"
                  onClick={props.resume}>Resume</button>
          <button className="stopwatch-btn-fTimeSheet stopwatch-btn-yel-fTimeSheet"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      }
     
    </div>
  );
}

export default BtnComponent;