import Button from './Button'

const ColorChoice = ({color, handleClick}) => {
  
    const buttonStyle = {
      backgroundColor: color, 
      height: "400px", 
      width: "400px"
    }
    
    return (
      <>
        <Button name="" buttonStyle={buttonStyle} typeOfButton="choice" clickHandler={handleClick}/>
      </>
    )
  }

  export default ColorChoice