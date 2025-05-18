import { useEffect, useState } from 'react';
import './App.css';
import TextAnswer from "./components/TextAnswer";
import { db } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import NumberAnswer from './components/NumberAnswer';
import MCAnswer from './components/MCAnswer';

function App() {

  const [semesterStart, setSemesterStart] = useState('2025-02-08');
  const [question, setQuestion] = useState(null);
  const [doneToday, setDoneToday] = useState(false);

  function getQuestionNum() {
    const today = new Date();
    const start = new Date(semesterStart);
    const diffTime =  today - start;
    return "Q" + Math.max(1, Math.floor(diffTime / (1000 * 60 * 60 * 24)));
  }

  useEffect(() => {
    const fetchCourses = async () => {
      setQuestion(
        {
          "answer": "3.53;m/s",
          "question": "A car accelerates for 8 seconds in a straight line. It starts at rest and after 8 seconds of constant acceleration it reaches a speed of 100km/h. What is the car's acceleration?",
          "type": 3,
          "mcAnswers": ["Onew", "al very long answer goes right here, its super long csd c dcjksd vksdjv skdvj skdvjnsdvkjnsdv svdsdv al very long answer goes right here, its super long csd c dcjksd vksdjv skdvj skdvjnsdvkjnsdv svdsdv al very long answer goes right here, its super long csd c dcjksd vksdjv skdvj skdvjnsdvkjnsdv svdsdv", "theree", "fore", "v"]
          // "mcAnswers": ["Onew", "al very long answer goes right here,", "theree", "fore", "v"]
        }
      );
      // const docRef = doc(db, "questions", getQuestionNum());

      // try {
      //   const docSnap = await getDoc(docRef);
      //   if (docSnap.exists()) {
      //     console.log(docSnap.data());
      //     setQuestion(docSnap.data());
      //   } else {
      //     console.log("No such question for this day!");
      //   }
      // } catch (error) {
      //   console.error("Error fetching question:", error);
      // }
    };

    fetchCourses();
  }, []);

  const getFormattedDate = () => {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };

  const handleCorrect = () => {
    alert("correct answer");
    setDoneToday(true);
  }

  const renderAnswerSection = (type) => {
    switch (type) {
      case 1:
        return <TextAnswer answer={question.answer} handleCorrect={handleCorrect} doneToday={doneToday} />
      case 2:
        return <NumberAnswer answer={question.answer} handleCorrect={handleCorrect} doneToday={doneToday} />
      case 3:
        return <MCAnswer answer={question.answer} handleCorrect={handleCorrect} doneToday={doneToday} mcAnswers={question.mcAnswers} />
      default:
        return <p>Error loading answer section</p>
    }
  }

  return (
    <div className="App">
      <div className='header'>
        {getFormattedDate()}
      </div>
      {getQuestionNum()}
      {question ? 
        <div className='body'>
          <div className='questionSection'>
            {question.question}
          </div>
          <div className='answerSection'>
            {renderAnswerSection(question.type)}
            {/* <TextAnswer answer={question.answer} handleCorrect={handleCorrect} doneToday={doneToday}/> */}
          </div>
        </div> :
        <p>Loading question</p> 
      }
      <div className='footer'>
        footer
      </div>
    </div>
  );
}

export default App;
