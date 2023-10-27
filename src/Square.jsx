import React from 'react'

const Square = ({colorValue, hexValue, isDarkText}) => {
  return (
    <section 
    className='square' 
    style={{backgroundColor: hexValue || colorValue, 
        color: isDarkText ? "#FFF" : "000"
    }}
    >
        <p>{colorValue? colorValue : "Empty value"} </p>
        <p>{hexValue ? hexValue : null} </p>
    </section>
  )
}

Square.defaultProps ={
    colorValue: "Empty color Value",
   


}

export default Square