import { useState } from 'react'
import Accordian from './Accordian';
import Data from "./data";
import './style.css';

function Faq() {
   const [openIndex, setOpenIndex] = useState(null);

   const handleClick = (index) => { 
    index===openIndex ? setOpenIndex(null) : setOpenIndex(index);
   }

  return (
    <>
     <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {Data.map((faq,index)=>(
         <Accordian key={index}
         faq={faq} isVisible={index===openIndex} 
         handleClick={() => handleClick(index)}  
         
         />
      ))}
     
      </div>
    </>
  )
}

export default Faq
