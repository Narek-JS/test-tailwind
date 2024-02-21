import { useEffect, useState } from "react"
const s = ['text-[1px]', 'text-[2px]','text-[3px]', 'text-[4px]', 'text-[5px]', 'text-[6px]', 'text-[7px]'];

function App() {
  const [size, setSize] = useState(0);


    "text-[#bb7e0d]";
    
  useEffect(() => {
    const incrementSize = () => setSize((prev) => prev + 1);

    document.addEventListener('keydown', incrementSize);

    return () => {
      document.removeEventListener('keydown', incrementSize);
    };
  }, []);

  console.log('size --> ', size);

  return (
    <>
      <h1 className={`text-[${size}px]`}>
        Hello world!
      </h1>
    </>
  )
}

export default App
