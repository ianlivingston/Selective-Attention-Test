import { useState, useEffect } from 'react'
import './App.css'
import Button from './components/Button'
import ColorTest from './components/ColorTest'
import axios from 'axios'

let scoreboard;
const leaderboard_url = 'http://localhost:3001/';
const DURATION_MS = 30000

const App = () => {
  const [total, setTotal] = useState(0);
  const [score, setScore] = useState(0);
  const [began, setBegan] = useState(false);
  const [finished, setFinished] = useState(false);
  const [username, setUsername] = useState('');
  let content;

  useEffect(() => {
    axios
      .get(leaderboard_url)
      .then(response => {
        scoreboard = response.data
        console.log(response)
      }).then(() => console.log(scoreboard));
    console.log(scoreboard)
  }, [])

  const handleStartClick = () => {
    setBegan(true);
    setTimeout(() => setFinished(true), DURATION_MS)
    console.log("start clicked")
  }

  let scoreboardList;
  if(scoreboard != null){
    scoreboardList = scoreboard.map(entry =>
      <li key={entry.id}>
        {entry.id}&emsp;&emsp;&emsp;&emsp;{entry.score}
      </li>
    );
  }

  if(began === false) {
    content = 
      <div>
        <Button name="Start" typeOfButton="start" clickHandler={handleStartClick} />
        <form>
          Enter Username: 
          <input 
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </form>
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
    console.log(username)
    console.log(score)
    if(score > scoreboard[scoreboard.length - 1].score){
      scoreboard.pop();
      scoreboard.push(
        {
          id: username,
          score: score
        }
      );
      scoreboard.sort((a,b) => b.score - a.score);
      axios.put(leaderboard_url, scoreboard);
    }
    content = 
      <>
        <div id="scoreResult">Your score is {score}</div>
        <ol>
          {scoreboardList}
        </ol>
      </>;
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