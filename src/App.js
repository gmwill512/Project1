
import './App.css';
import LineChart from './LineChart';
import { useContext } from 'react';
import { Store } from './Context';
import { useState,useEffect } from 'react';
import SideButtons from './SideButtons.js'
import dataTable from './dataTable.png'

function App() {
  const { Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4} = useContext(Store)
  const [showTableButton, setShowTableButton] = useState(false)

  useEffect(()=>{

  },[Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4,showTableButton, setShowTableButton])
  return (
    <div className="App">
      <div className='title'>Dose-Response Relationship Between Mediaction Adherence and Visual-Field Progression</div>
      <div className='dataContainer'>
        <LineChart />
        <SideButtons />
      </div>
      <div className='dataTable'>
        <button className='tableButton'
        onClick={()=> setShowTableButton(!showTableButton)}
        >Show Data</button>
        {showTableButton ? "" :
          <img src={dataTable} alt="" style={{height:'250px'}}/>
        }
      </div>
    </div>
  );
}

export default App;


