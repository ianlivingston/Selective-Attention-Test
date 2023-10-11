const Button = ({name, buttonStyle, typeOfButton, clickHandler}) =>  {
    return (
      <button className={typeOfButton} style={buttonStyle} onClick={clickHandler}>
        {name}
      </button>
    );
  }

  export default Button