import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { useRef } from "react";

const App = () => {
  // useGSAP(() => {
  //   gsap.from(".box", {
  //     scale: 0,
  //     rotate: 360,
  //     duration: 1,
  //     delay: 0.5,
  //     opacity: 0,
  //   })
  // },{scope: ".container"});
  // const [circle, setcircle] = useState(0);
  // const random = gsap.utils.random(-500, 500,100);
  // useGSAP(() => {
  //   gsap.to(".circle", {
  //     x: circle,
  //     duration: 0.5,
  //   })
  // },[circle])

  const randomX = gsap.utils.random(-500, 500, 100);
  const rotateX = gsap.utils.random(-360, 360,30);
  const [xValue, setXValue] = useState(0);
  const [roti, setroti] = useState(0);
  const boxRef = useRef();

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: xValue,
      duration: 1,
      rotate: roti,
    });
  }, [xValue, rotateX]);

  return (
    <main>
      {/* <div className="container">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
      <div className="kuch">
        <div className="circle"></div>
        <div className="box"></div>
      </div> */}

      {/* <button onClick={() =>{ 
          setcircle(random)
          console.log(circle);
          
        }}>Animate</button> */}
      {/* <div  className="circle"></div> */}
      <button onClick={() =>{ 
        setXValue(randomX)
        setroti(rotateX)
      }}>Animate</button>
      <div ref={boxRef} className="box"></div>
    </main>
  );
};

export default App;
