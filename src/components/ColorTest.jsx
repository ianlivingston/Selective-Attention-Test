import ColorChoice from './ColorChoice'
import ColorQuestion from './ColorQuestion'

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

  export default ColorTest