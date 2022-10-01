const noOfButtons = document.querySelectorAll('.drum').length

for(var i = 0; i < noOfButtons; i++){
  document.querySelectorAll('.drum')[i].addEventListener('click', function(){

    var buttonInnerText = this.innerText
    Sound(buttonInnerText)
    buttonAnimnation(buttonInnerText)

  });
}

document.addEventListener('keydown' , function(event){
  Sound(event.key)
  buttonAnimnation(event.key)
})


function Sound(key){
  switch (key) {
    case "w":
      var crash = new Audio('crash.mp3')
      crash.play()
      break;

    case "a":
      var kick = new Audio('kick-bass.mp3')
      kick.play()
      break;

    case "s":
      var snare = new Audio('snare.mp3')
      snare.play()
      break;

    case "d":
      var tom1 = new Audio('tom-1.mp3')
      tom1.play()
      break;

    case "j":
      var tom2 = new Audio('tom-2.mp3')
      tom2.play()
      break;

    case "k":
      var tom3 = new Audio('tom-3.mp3')
      tom3.play()
      break;

    case "l":
      var tom4 = new Audio('tom-4.mp3')
      tom4.play()
      break;

    default: console.log(key)
  }
}


function buttonAnimnation(currentKey){
  var activeButton = document.querySelector("."+currentKey)

  activeButton.classList.add('pressed')
  resetState(activeButton)
}

function resetState(currentKey){
  setTimeout(function(){
    currentKey.classList.remove('pressed')
  },100)
}
