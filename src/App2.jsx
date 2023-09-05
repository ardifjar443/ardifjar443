import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App2() {
    const [text, setText] = useState('p');

    const changeText = () => {
      setText('ardi');
    };
  
    return (
      <div>
        <p>{text}</p>
        <button onClick={changeText}>Ubah Text</button>
      </div>
    );
}


export default App2
