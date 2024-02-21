import { useEffect, useState } from "react"

function App() {
  const [size, setSize] = useState(0);
    
  useEffect(() => {
    document.addEventListener('keydown', () => {
      setSize((prev) => prev + 1);
    });
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
