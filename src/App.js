import React, { useState } from 'react';
import questions from './data';
import SingleQuestion from './Question';


function App() {
  return (
    <main>
        <div className='container'>
        <h2>accordion project setup</h2>
        <section className='info'>
           <h2 className='underline'></h2>
          <div className=''>
          {questions.map(question => {
            return <SingleQuestion {...question} key={question.id}/>
          })}
          </div>
        </section>
      </div>
    </main>
  )
}

export default App;
