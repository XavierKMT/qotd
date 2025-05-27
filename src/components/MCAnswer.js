import { useState } from "react";

function MCAnswer({ answer, handleCorrect, doneToday, mcAnswers }) {

  const [userAnswer, setUserAnswer] = useState(doneToday ? answer : '');

  

  const handleSubmit = (option) => {
    if (option === answer) {
      handleCorrect();
    }
    else {
      alert("Incorrect: \n" + option);
    }
  }

  return (
    <div className="mcAnsSection">
      {mcAnswers && mcAnswers.map((option) => (
        <button 
          key={option}
          onClick={() => handleSubmit(option)}
          // className="mcBtn"
          className={`mcBtn ${doneToday ? option === answer ? 'correct' : 'incorrect' : ''}`}
          disabled={doneToday}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default MCAnswer;