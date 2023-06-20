import { useState } from 'react'
import './App.css'

function App() {
  const [size, setSize] = useState(5)
  const [rows, setRows] = useState([1, 2, 3, 4, 5])

  const cellStyle = {
    backgroundColor: 'purple',
    width: '50px',
    height: '50px',
  };

  const handleChange = ({ target: { value }}) => {
    setSize(value)
  };

  const onClick = () => {
    setRows(Array.from({length: size}))
  }

  return (
    <>
    <h1>PIXEL ART</h1>
    <input type="number" name="size" placeholder="Board size" value={size} onChange={handleChange}/>
    <button type="button" onClick={onClick}>Change size</button>
    { rows.map((row, i) =>     
    <div key={i} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {rows.map((row, i) => <div key={i} style={cellStyle} /> )}
    </div>) }
    </>
  )
}

export default App
