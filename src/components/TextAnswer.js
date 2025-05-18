import { useState } from "react";

function TextAnswer({ answer, handleCorrect, doneToday }) {

  const [userAnswer, setUserAnswer] = useState(doneToday ? answer : '');

  const handleSubmit = () => {
    if (userAnswer.toLowerCase().trim() === answer.toLowerCase()) {
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
        type='text'
        value={userAnswer}
        readOnly={doneToday}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        disabled={doneToday}
      >
        Submit
      </button>
    </>
  );
}

export default TextAnswer;