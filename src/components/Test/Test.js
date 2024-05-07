import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
function Test() {
  // const [windowSize, setWindowSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight
  // });

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight
  //     });
  //   }
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  // const { width, height } = useWindowSize();

  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(count * 2);
  const handleCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setDoubleCount(count * 2);
  }, [count]);
  return (
    <>
      <div>{count}</div>
      <div>{doubleCount}</div>
      <button onClick={handleCount}> inc</button>
    </>
  );
}

export default Test;
