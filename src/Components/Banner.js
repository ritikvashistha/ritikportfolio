import React, { useState, useEffect } from "react";
import Typist from 'react-typist';

const Banner = ({ children, title, subtitle }) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  return (
    <div className="banner">
      <h2>{title}</h2>
      {/* <p>{subtitle}</p> */}
      <div className="banner-para">
        {count ? (
          <Typist onTypingDone={() => setCount(0)}>
            <p> And I'm a <span className="t-special">Programmer </span> </p>
            <Typist.Backspace count={12} delay={1000} />
            <text className="t-special"> React.js Developer </text>
            <Typist.Backspace count={19} delay={1000} />
            <p className="t-special"> Frontend Developer </p>
            <Typist.Backspace count={19} delay={1000} />
            <p className="t-special"> Software Engineer </p>
          </Typist>) : ("")}



      </div>


    </div>
  );
};

export default Banner;