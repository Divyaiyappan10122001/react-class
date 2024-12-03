import React,{useState} from 'react'
import './style.scss'

const Calculator = () => {
    const [input, setInput] = useState("")
    const [result, setResult] = useState("")

    const handleButtonClick = (value) =>{
        if(value === "C"){
            setInput("");
            setResult("");
        }else if(value === "B"){
            setInput(input.slice(0,-1));
        }else if(value === "="){
           try{
              setResult(eval(input).toString());
           }catch{
              setResult("Error");  
           }
        }else{
            setInput(input+value)
        }
    }

    const buttons = [
        "C", "B", "/", "*",
        "7", "8", "9", "+",
        "4", "5", "6", "-",
        "1", "2", "3", "=",
        ".", "0"
    ]
  return (
    <>
        <div className='calculator'>
            <div className='display'>
                <div className='input'>{input || "0"}</div>
                <div className='result'>{result}</div>
            </div>
            <div className='button-grid'>
                {buttons.map((btn, index)=>(
                    <button key={index}
                    onClick={()=>handleButtonClick(btn)}
                    className={btn === "=" ? "eqauls" : ""}>
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    </>
    
  )
}

export default Calculator