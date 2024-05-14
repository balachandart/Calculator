import React from 'react'

const KeysWindow = ({handleButton}) => {
  const sciKeys=["sin",
                 "cos",
                 "ln",
                 "log",
                 "tan",
                 "𝜋",
                 "e",
                 "^",
                 "!",
                 "√",
                 ];

  const basicKeys=["7",
                  "8",
                  "9",
                  "*",
                  "/",
                  "4",
                  "5",
                  "6",
                  "-",
                  "(",
                  "1",
                  "2",
                  "3",
                  "+",
                  ")",
                  ".",
                  "0",
                  "DEL",
                  "AC",
                  "="]
  return (
    <div className='keysWindow'>
      <div className='keys_scientific'>
      {sciKeys.map((keys,index)=>(
        <button key={index}  onClick={()=>handleButton(keys)}>
              {keys}
        </button> )) }
      </div>

    <div className='straightline'></div>

    <div className='keys_basics'>
      {basicKeys.map((keys,index)=>(
        <button key={index} className={`${keys>="0" && keys<="9" ? "number":""} ${keys === "=" && "equal"}`}
             onClick={()=>handleButton(keys)}>
            {keys}
        </button>)) }
      </div>
    </div>
  )
}
export default KeysWindow