import { useEffect, useState } from "react"

const styles = {
  bigSize: 66,
  smallSize: 16
};

function App() {
  const [size, setSize] = useState(0);
    
  const changeClassname = () => {
    document.querySelector('.a').classList.remove(`text-[${size - 1}px]`);
    document.querySelector('.a').classList.add(`text-[${size}px]`);
  };

  return (
    <>
      <h1 className={`a text-[100px]`}>
        Hello world!
        <input
        type="number"
          onChange={e =>{
            setSize(e.target.value)
            changeClassname()
          }}
        />
      </h1>
    </>
  )
}

export default App
