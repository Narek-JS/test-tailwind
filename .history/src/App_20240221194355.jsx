import { useEffect, useState } from "react"

const styles = {
  bigSize: 66,
  smallSize: 16
};

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
      <h1 className={`text-[${size < 10 ? styles.bigSize : styles.smallSize}px]`}>
        Hello world!
      </h1>
    </>
  )
}

export default App
