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

  return (
    <>
      <h1 className="text-[11px] font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
