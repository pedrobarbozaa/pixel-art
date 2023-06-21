import { useState } from 'react'
import './App.css'

function App() {
  const [size, setSize] = useState(5)
  const [rows, setRows] = useState([1, 2, 3, 4, 5])

  const handleChange = ({ target: { value }}) => {
    setSize(value)
  };

  const onClick = () => {
    setRows(Array.from({length: size}))
  }

  return (
    <>
      <h1 className="title">PIXEL ART</h1>
      <section className="resizer-container">
        <input type="number" name="size" placeholder="Board size" value={size} onChange={handleChange}/>
        <button type="button" onClick={onClick}>Change size</button>
      </section>
      <div className="board" >
        { rows.map((row, i) =>     
          <div className="row" key={i} >
            {rows.map((row, i) => <div className='cell' key={i} /> )}
          </div>) 
        }
      </div>
    </>
  )
}

export default App
