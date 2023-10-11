import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import ColorTest from './components/ColorTest'

const App = () => {
  const [total, setTotal] = useState(0);
  const [score, setScore] = useState(0);
  const [began, setBegan] = useState(false);
  const [finished, setFinished] = useState(false);
  let content;

  const handleStartClick = () => {
    setBegan(true);
    setTimeout(() => setFinished(true), 60000)
    console.log("start clicked")
  }

  console.log(score, total);

  if(began === false) {
    content = 
      <div>
        <Button name="Start" typeOfButton="start" clickHandler={handleStartClick} />
        <p>
          Instructions: After clicking start, you will see a prompt with the name of a color
          and two buttons of different colors. One of the colors of the two buttons will be the
          name of the color and the other will be the color of the text. If the prompt is not
          underlined, choose the color of the text. If it is underlined, choose the color of the
          word. You have 60 seconds to answer as many of these prompts as you can. Your score
          will be the number of prompts you answered correctly.        
        </p>
      </div>;
  } 
  
  else if(finished === true) {
    content = <div id="scoreResult">Your score is {score}</div>;
  }

  else {
    content = 
    <>
      <ColorTest updateTotal={() => setTotal(total + 1)} updateScore={() => setScore(score + 1)}/>
    </>;
  }

  return (
    <>
      {content}
    </>
  );
}

export default App