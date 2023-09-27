import { useState } from 'react'
import './App.css'

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
    content = <Button name="Start" typeOfButton="start" clickHandler={handleStartClick} />;
  } 
  
  else if(finished === true) {
    content = <>Your score is {score}</>;
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

const Button = ({name, typeOfButton, clickHandler}) =>  {
  return (
    <button className={typeOfButton} onClick={clickHandler}>
      {name}
    </button>
  );
}

const ColorTest = ({updateTotal, updateScore}) => {
  const random_int = (upper_limit) => Math.floor((Math.random() * upper_limit))
  
  const colorSet = ["Black", "Blue", "Red", "Green", "Orange"]
  let colorWordIndex = random_int(5);
  let colorWord = colorSet[colorWordIndex];
  let colorInk;
  let underlined;
  let left_side;

  let colorInkIndex = ((colorWordIndex + random_int(4) + 1) % 5);
  colorInk = colorSet[colorInkIndex];

  random_int(2) === 1 ? underlined = true : underlined = false;
  random_int(2) === 1 ? left_side = true : left_side = false;

  let answer = underlined ? colorWord : colorInk;

  const handleColorWordChoice = () => {
    updateTotal();
    if(colorWord === answer) updateScore();
  }

  const handleColorInkChoice = () => {
    updateTotal();
    if(colorInk === answer) updateScore();
  }

  console.log("Answer: ", answer)

  if (left_side){
    return (
     <div>
      <ColorQuestion colorWord={colorWord} colorInk={colorInk} isUnderlined={underlined}/>
      <div>
          <ColorChoice color={colorWord} handleClick={handleColorWordChoice}/>
          <ColorChoice color={colorInk} handleClick={handleColorInkChoice} />
      </div>
     </div>
    )
  } else {
    return (
      <div>
        <ColorQuestion colorWord={colorWord} colorInk={colorInk} isUnderlined={underlined}/>
        <div>
          <ColorChoice color={colorInk} handleClick={handleColorInkChoice} />
          <ColorChoice color={colorWord} handleClick={handleColorWordChoice} />
        </div>
      </div>
     )
  }

}

const ColorChoice = ({color, handleClick}) => {
  return (
    <>
      <Button name={color} typeOfButton="choice" clickHandler={handleClick}/>
    </>
  )
}

const ColorQuestion = ({colorWord, colorInk, isUnderlined}) => {
  if(isUnderlined){
    return (
      <div style={{color: colorInk, textDecorationLine: "underline"}}>
        {colorWord}
      </div>
    )
  }
  
  return (
    <div style={{color: colorInk}}>
      {colorWord}
    </div>
  )
}

export default App

/*


randomly pick color word, color ink, and underline
determine correct answer
display
determine if choice is correct
update tallies after choice
reapeat


determine correct:

update total and correct

*/