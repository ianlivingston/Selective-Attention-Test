const ColorQuestion = ({colorWord, colorInk, isUnderlined}) => {
    if(isUnderlined){
      return (
        <div style={{color: colorInk, textDecorationLine: "underline"}} className="colorQuestion">
          {colorWord}
        </div>
      )
    }
    
    return (
      <div style={{color: colorInk}} className="colorQuestion">
        {colorWord}
      </div>
    )
  }

  export default ColorQuestion