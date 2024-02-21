import { useEffect, useState } from "react"

function App() {
  const [size, setSize] = useState(0);
    
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
      <h1 className={`text-[66px]`}>
        Hello world!
      </h1>
    </>
  )
}

export default App
