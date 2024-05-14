import React, { useState } from 'react'
import DisplayWindow from './DisplayWindow'
import KeysWindow from './KeysWindow'

const Calculator = () => {
    const [expression,setExpression]=useState("")
    const [displayExp,setDisplayExp]=useState("")
    const [result,setResult]=useState("0")

    const sciFunc={
      sin  :"Math.sin",
      cos  :"Math.cos",
      ln   : "Math.log",
      e    : "Math.E",
      tan  : "Math.tan",
      log  : "Math.log",
      𝜋    :"Math.PI",
      "^"  :"**",
      "√"  :"Math.sqrt"
    };

    const calcResult=()=>{
         if(expression.length !== 0){
          try {
          /* eslint-disable no-eval */ //special command
          let compute= eval(expression);
          compute=parseFloat(compute.toFixed(4))
          setResult(compute)
          }
          catch(error){
          setResult("An Error Occured!")
          alert("Please check your input, Example Inputs: sin(1), √(2)")
          }}
          else{
            setResult("An Error Occured!")
        }}

    const handleButton=(value)=>{
      if (value==="AC"){
        setExpression("");
        setDisplayExp("");
        setResult("0") }
      

      else if(value === "DEL"){
        setDisplayExp(displayExp.slice(0, -1))
        setExpression(expression.slice(0, -1)) }
      
      else if(sciFunc.hasOwnProperty(value)){
        setDisplayExp(displayExp + value)
        setExpression(expression + sciFunc[value]) }
      
      else if(value === "!"){
        const lastNum= extractLastNum(expression)
        if(lastNum != null){
          const num=parseFloat(lastNum);
          setDisplayExp(displayExp+value)
          setExpression(expression.replace(lastNum,factorial(num))) }}
     
      else if(value === "="){
        calcResult(); }
      
      else {
        setExpression(expression+value)
        setDisplayExp(displayExp+value) }

      function extractLastNum(exp){
        const numbers=exp.match(/\d+/g);
        return numbers ? numbers[numbers.length-1]:null; }

      function factorial(n){
        let result=1;
        for(let i=1;i<=n;i++)
          result *=i;
          return result; }}

  return (
    <main className='calculator'>
      <DisplayWindow
        expression={displayExp}
        result={result} />
      <KeysWindow
        handleButton={handleButton} />
    </main>
  )
}

export default Calculator