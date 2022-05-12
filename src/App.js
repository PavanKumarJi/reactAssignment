import './App.css';
import Functional from './component/Functional';
import Classes from './component/Classes';
import './component/style.css';
import React, { useState } from 'react';
//import { render } from '@testing-library/react';

const App=()=> {
  const[name1,setName1]=useState(false);
  const[name2,setName2]=useState(false);
  return (<>
    <div className="App">
      <h1 style={{fontSize:"3vw" }}>Styling Function Component and Class Component</h1>
      <div className="hid">
      <header1>  
      <button onClick={()=>name1?setName1(false):setName1(true)}> Style with Functional Component</button>
      {name1&&<Functional/>}
      </header1>

      <header2>
      <button onClick={()=>name2?setName2(false):setName2(true)} > Style with Class Component</button>
      {name2&&<Classes/>}
      </header2>
      </div>
    </div>
    </>
  );
}

export default App;
