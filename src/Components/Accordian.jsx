import React from 'react'
import "./style.css";

const Accordian = ({faq ,isVisible,handleClick}) => {
  return (
    <div className='accordian'>
      <h3>{faq.question}<span onClick={handleClick}>
        {isVisible ? '-':"+"}</span></h3>
            {isVisible && <p>{faq.answer}</p>}


    </div>
  )
}

export default Accordian