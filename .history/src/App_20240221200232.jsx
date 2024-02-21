import { useEffect, useState } from "react"

const styles = {
  bigSize: 66,
  smallSize: 16
};

function App() {
  const [size, setSize] = useState("000000");
    
  console.log('size --> ', size);

  const changeClassname = () => {
    document.querySelector('.a').classList.add(`bg-[#${size}]`);
  };

  return (
    <>
      <h1 className={`a`}>
        Hello world!
        <input
          
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
