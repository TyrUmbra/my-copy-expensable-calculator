
import App from "../app"
import React from "react";

function InputResult({value}){
  return (
    <input 
      type="text"
      readonly= "true"
      value = {`$ ${value}`}
      style = {{
        width: '254px',
        height: '50px',
        padding: '0',
        border: '1px solid #E5E7EB',
        textAlign: 'center',
      }}
    ></input>
  )
}

function NumberTable({number, onChangeInput}) {

  const symbols = ['÷', '1', '2','3', 'e', 'x', '4', '5', '6','c','-','7', '8', '9', '=', '+','ca','0', '.'];

  const [valueButton, setValueButton] = React.useState(<strong> <i style={{color:"#FFFFFF"}} class="ri-check-line"></i></strong>)
  
  const operators = ['+', '-', 'x', '÷']
  function handleButtonSubmit() {

    setValueButton(<strong> <i style={{color:"#FFFFFF"}} class="ri-check-line"></i></strong>)
    if (number.includes('÷')){
      const splitNumber = number.split('÷')
      const newNumber = (+splitNumber[0] / (+splitNumber[1] ? +splitNumber[1] : +splitNumber[0])).toString()
      return onChangeInput(newNumber);
    }else if (number.includes('x')){
      const splitNumber = number.split('x')
      const newNumber = (+splitNumber[0] * (+splitNumber[1] ? +splitNumber[1] : +splitNumber[0])).toString()
      return onChangeInput(newNumber);
    }else if (number.includes('-')){
      const splitNumber = number.split('-')
      const newNumber = (+splitNumber[0] - (+splitNumber[1] ? +splitNumber[1] : +splitNumber[0])).toString()
      return onChangeInput(newNumber);
    } else if(number.includes('+')){
      const splitNumber = number.split('+')
      const newNumber = (+splitNumber[0] + (+splitNumber[1] ? +splitNumber[1] : +splitNumber[0])).toString()
      return onChangeInput(newNumber);
    }
  }

  function handleButtonClick(symItem){
    
    let prevNumber = ''
    // const symbols = ['+', '-', 'x', '÷']

    if (number === '0' && !operators.includes(symItem)){
      prevNumber = symItem
    } else {
      switch(symItem){
        case '÷':
          if(number === '0'){
            prevNumber = number+symItem;
          }
          setValueButton(<strong style={{color:"#FFFFFF"}}>=</strong>);
          break;
        case 'x':
          if(number === '0'){
            prevNumber = number+symItem;
          }
          setValueButton(<strong style={{color:"#FFFFFF"}}>=</strong>);
          break;
        case '-':
          if(number === '0'){
            prevNumber = number+symItem;
          }
          setValueButton(<strong style={{color:"#FFFFFF"}}>=</strong>);
          break;
        case '+':
          if(number === '0'){
            prevNumber = number+symItem;
          }
          setValueButton(<strong style={{color:"#FFFFFF"}}>=</strong>);
          break;
      };
      prevNumber = number+symItem;
      
    }
    
    if(number.includes('.') && symItem.includes('.')) {
        prevNumber = number.replace('.', symItem)
    }

    if (number.includes('÷')){
      if (symItem.includes('÷')) {
        prevNumber = number.replace('÷', symItem)
      }else if (symItem.includes('x')) {
        prevNumber = number.replace('÷', symItem)
      } else if (symItem.includes('-')) {
        prevNumber = number.replace('÷', symItem)
      } else if (symItem.includes('+')) {
        prevNumber = number.replace('÷', symItem)
      }
    }

    if (number.includes('x')){
      if (symItem.includes('÷')) {
        prevNumber = number.replace('x', symItem)
      }else if (symItem.includes('x')) {
        prevNumber = number.replace('x', symItem)
      } else if (symItem.includes('-')) {
        prevNumber = number.replace('x', symItem)
      } else if (symItem.includes('+')) {
        prevNumber = number.replace('x', symItem)
      }
    }

    if (number.includes('-')){
      if (symItem.includes('÷')) {
        prevNumber = number.replace('-', symItem)
      }else if (symItem.includes('x')) {
        prevNumber = number.replace('-', symItem)
      } else if (symItem.includes('-')) {
        prevNumber = number.replace('-', symItem)
      } else if (symItem.includes('+')) {
        prevNumber = number.replace('-', symItem)
      }
    }

    if (number.includes('+')){
      if (symItem.includes('÷')) {
        prevNumber = number.replace('+', symItem)
      }else if (symItem.includes('x')) {
        prevNumber = number.replace('+', symItem)
      } else if (symItem.includes('-')) {
        prevNumber = number.replace('+', symItem)
      } else if (symItem.includes('+')) {
        prevNumber = number.replace('+', symItem)
      }
    }

    return onChangeInput(prevNumber);
  }

  function handleButtonErrase(){
    const newNumber = number.length === 1 ? '0' : number.substring(0,number.length-1);

    return onChangeInput(newNumber);
  }

  function handleButtonClean(){
    const newNumber =  '0';
    
    console.log(newNumber)
    return onChangeInput(newNumber);
  }


  return (
    symbols.map((sym, index) => {
      if(sym === '='){
        return <button 
        type ='button' 
        onClick = {() => handleButtonSubmit()}
        value={`${sym}`} 
        style={{
          gridRow:'3/5',
          gridColumn:'5/6',
          backgroundColor: '#06B6D4',
          border: '1px solid #E5E7EB',
        }}>
          {valueButton}
        </button>
      } else if(sym === 'e'){
        return <button
        type ='button' 
        onClick = {() => handleButtonErrase()}
        value={`${sym}`} 
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E7EB',
        }}
        >
          <i className="ri-delete-back-2-fill"></i>
        </button>
      } else if(sym === 'c'){
        return <input 
        type ='button' 
        onClick = {() => handleButtonClean()}
        value={`${sym}`} 
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E7EB',
        }}
        ></input>
      } else if(sym === 'ca'){
        return <button
        type ='button' 
        onClick = {'#'}
        value={`${sym}`} 
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E7EB',
        }}
        >
          <i class="ri-calendar-event-fill"></i>
        </button>
      } else{
        if (operators.includes(sym)){
          return <input 
            type ='button' 
            value={`${sym}`}
            style={{
              backgroundColor: '#F3F4F6',
              border: '1px solid #E5E7EB',
            }}
            onClick = {() => handleButtonClick(sym)}
          ></input>
        } else{
          return <input 
            type ='button' 
            value={`${sym}`}
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
            }}
            onClick = {() => handleButtonClick(sym)}
          ></input>
        }
        
      
      }
  
    })
  )
}


export {NumberTable, InputResult};