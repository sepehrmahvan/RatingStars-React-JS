import React, { useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./app.css";

export default function App() {
    const [rate, setRate] = useState(null);
    const [hover, setHover] = useState(null);
    const starValue1 = 1;
    const starValue2 = 2;
    const starValue3 = 3;
    const starValue4 = 4;
    const starValue5 = 5;

  return (
    <>
      <label>
        <input type="radio"  onClick={() => setRate(1)}/>
        <FaStar color={starValue1 <= (rate || hover) ? "gold" : "gray"} className="icon" size={80}
        onMouseEnter={() => setHover(starValue1)} onMouseLeave={() => setHover(null)} />
      </label>
      <label>
        <input type="radio"  onClick={() => setRate(2)}/>
        <FaStar color={starValue2 <= (rate || hover) ? "gold" : "gray"} className="icon" size={80} 
        onMouseEnter={() => setHover(starValue2)} onMouseLeave={() => setHover(null)} />
      </label>
      <label>
        <input type="radio"  onClick={() => setRate(3)}/>
        <FaStar color={starValue3 <= (rate || hover) ? "gold" : "gray"} className="icon" size={80} 
        onMouseEnter={() => setHover(starValue3)} onMouseLeave={() => setHover(null)} />
      </label>
      <label>
        <input type="radio"  onClick={() => setRate(4)}/>
        <FaStar color={starValue4 <= (rate || hover) ? "gold" : "gray"} className="icon" size={80} 
        onMouseEnter={() => setHover(starValue4)} onMouseLeave={() => setHover(null)} />
      </label>
      <label>
        <input type="radio"  onClick={() => setRate(5)}/>
        <FaStar color={starValue5 <= (rate || hover) ? "gold" : "gray"} className="icon" size={80} 
        onMouseEnter={() => setHover(starValue5)} onMouseLeave={() => setHover(null)} />
      </label>
    </>
  );
}
