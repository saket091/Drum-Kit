const rollBtn = document.getElementById('roll-btn')
const imgOne = document.getElementById('img1')
const imgTwo = document.getElementById('img2')
const h1Tag = document.getElementById('heading')

rollBtn.addEventListener('click',rollTheDice)

function rollTheDice(){
  var num1 = Math.floor(Math.random()*6) + 1
  var num2 = Math.floor(Math.random()*6) + 1
  setImage1(num1)
  setImage2(num2)
  check(num1,num2)
}

function setImage1(num){
  if(num === 1){
    imgOne.src = "images/dice1.png"
  }else if(num === 2){
    imgOne.src = "images/dice2.png"
  }else if(num === 3){
    imgOne.src = "images/dice3.png"
  }else if(num === 4){
    imgOne.src = "images/dice4.png"
  }else if(num === 5){
    imgOne.src = "images/dice5.png"
  }else{
    imgOne.src = "images/dice6.png"
  }
}

function setImage2(num){
  if(num === 1){
    imgTwo.src = "images/dice1.png"
  }else if(num === 2){
    imgTwo.src = "images/dice2.png"
  }else if(num === 3){
    imgTwo.src = "images/dice3.png"
  }else if(num === 4){
    imgTwo.src = "images/dice4.png"
  }else if(num === 5){
    imgTwo.src = "images/dice5.png"
  }else{
    imgTwo.src = "images/dice6.png"
  }
}

function check(num1,num2){
  if(num1 > num2){
    h1Tag.innerText = "🚩Player 1 wins"
  }else if(num2 > num1){
    h1Tag.innerText = "Player 2 wins🚩"
  }else{
    h1Tag.innerText = "Its a draw."
  }
}
