import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';



const Question = ({title,info}) => {
  const [showInfo, setShowInfo] = useState(true);
  const toggleQuesionInfo = () => {
      console.log('toggle this');
      setShowInfo(!showInfo);
  }
  return (
    <div>
      <h4>{title} {showInfo ?  <AiOutlineMinus onClick={toggleQuesionInfo}/> : <AiOutlinePlus onClick={toggleQuesionInfo}/>} </h4>
       <p>{showInfo ? info : ''} </p>
    </div>
  )
};

export default Question;
