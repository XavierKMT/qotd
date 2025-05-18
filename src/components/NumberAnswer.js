import { useState } from "react";

function NumberAnswer({ answer, handleCorrect, doneToday }) {

  const [userAnswer, setUserAnswer] = useState(doneToday ? answer : '');

  const hasUnits = answer.split(';').length === 2;

  const handleSubmit = () => {
    const correctAns = parseFloat(answer.split(';')[0]);
    const usersGuess = parseFloat(userAnswer);
    if (usersGuess >= correctAns*0.98 && usersGuess <= correctAns*1.02) {
      handleCorrect();
    }
    else {
      alert(userAnswer + " is incorrect");
      setUserAnswer('');
    }
  }

  return (
    <>
      <input
        type='number'
        value={userAnswer}
        readOnly={doneToday}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      {hasUnits && answer.split(';')[1]}
      <button
        onClick={handleSubmit}
        disabled={doneToday}
      >
        Submit
      </button>
    </>
  );
}

export default NumberAnswer;