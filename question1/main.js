"use strict"

//write code in here
let initNum = 0
const number = document.getElementById('number')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const resetBtn = document.getElementById('reset')

const onBtnClicked = (operation) => () => {
  if (operation === 'plus') number.textContent = (++initNum).toString()
  else if(operation === 'minus') number.textContent = (--initNum).toString()
  else if(operation === 'reset'){
    initNum = 0
    number.textContent = '0'
  }
}

plusBtn.addEventListener('click', onBtnClicked('plus'))
minusBtn.addEventListener('click', onBtnClicked('minus'))
resetBtn.addEventListener('click', onBtnClicked('reset'))