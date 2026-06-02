import { useState } from 'react'
import './App.css'
import {P5Canvas} from '@p5-wrapper/react'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
        </div>
        <div>
          <h1>Get</h1>
          <P5Canvas
              sketch={SketchX}
              obj_input={{count}}
              obj_output={callBack}
          />
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default App
