import React, { useState } from 'react'


const App = () => {
  const [bgColor, setBgColor] = useState('white');

  const handleButtonClick = () => {
    setBgColor('black');
  };

  return (
    <div  className='container' style={{ backgroundColor: bgColor, height: '100vh', width: '100vw', margin: 0, padding: 0 }}>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  )
}

export default App
