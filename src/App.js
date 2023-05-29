import logo from './logo.svg';
import './App.css';
import Box from './box';
import { useState } from 'react';
import Colors from './color';

function App() {
  const [count, setCount] = useState(0);
  // const duplicateArray = Array.from({ length: 100 });
  // const colors = ["red", "blue", "green", "skyblue", "brown", "yellow"];
  //  colors[Math.floor(Math.random() * colors.length)]
  return (
    <div className="App">
      {
        <h1>this button is {count > 10 ? 0 : count} time click</h1>
        // count ?
        //   <h1>Ravi</h1>
        //   :-  
        //   <h1>Ravina</h1>
      }
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <div className='box-container'>
        {/* {duplicateArray.map((_, i) => (
          <Box label={i + 1} color={'   '} />
        ))
        } */}
        <Colors />
      </div>
    </div>
  );
}

export default App;
