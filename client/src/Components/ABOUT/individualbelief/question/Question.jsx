import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

import { useState } from "react";
const Question = ({title, message}) => {
  const [showInfo, setShowInfo] = useState(false)
    return (
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn-q"
           onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {showInfo && <p>{message}</p>}
      </article>
    );
  };
  
  export default Question;