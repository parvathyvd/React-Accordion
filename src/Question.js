import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title,info}) => {
  const [showInfo, setShowInfo] = useState(true);
  return (
    <div>
      <h4>{title} <button onClick={()=>setShowInfo(!showInfo)}>{showInfo ? <AiOutlineMinus />: <AiOutlinePlus />}</button></h4>
       <p>{showInfo && info} </p>
    </div>
  )
};

export default Question;
