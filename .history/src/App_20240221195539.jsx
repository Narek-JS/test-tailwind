import { useEffect, useState } from "react"

const styles = {
  bigSize: 66,
  smallSize: 16
};

function App() {
  const [size, setSize] = useState(25);
    
  console.log('size --> ', size);

  return (
    <>
      <h1 className={`text-[${String(size)}px] ${size > 10 ? `bg-[rgb(${size} ${size} ${size})]`: ""}`}>
        Hello world!
        <input
          type="number"
          onChange={e =>{
            setSize(e.target.value)
          }}
        />
      </h1>
    </>
  )
}

export default App
