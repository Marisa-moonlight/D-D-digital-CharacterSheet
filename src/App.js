import { useState } from 'react';
import './App.css'
import Race from './pages/race';

function App() {
  const [showSheet, setShowSheet] = useState(false)
  return (
    <>
      {showSheet === false ?
        <div className="App">
          <h1 className='title'>D&D Chracter-Sheet App</h1>

          <br></br>
          <div>
            <button onClick={() => setShowSheet(true)} className='buttons'>Saved Chracter Sheets</button>
            <br></br>
            <br></br>
            <button onClick={() => setShowSheet(true)} className='buttons'>Create Chracter Sheet</button>
            <br></br>
            <br></br>
            <button className='buttons'>Delete Chracter Sheet</button>
          </div>
          <br></br>

        </div> : <Race/>}
    </>
  );

}

export default App;
