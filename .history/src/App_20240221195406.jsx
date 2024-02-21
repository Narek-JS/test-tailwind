import { useEffect, useState } from "react"

const styles = {
  bigSize: 66,
  smallSize: 16
};

function App() {
  const [size, setSize] = useState(0);
    
  console.log('size --> ', size);

  return (
    <>
      <h1 className={`text-[${String(size)}px] ${size > 10 ? "bg-[#531818]": ""}`}>
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
