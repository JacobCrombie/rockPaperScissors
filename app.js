let options = [
  {
    name: "rock"
  },

  {
    name: "paper"
  },

  {
    name: "scissors"
  }
]




function play(pChoice) {
let cChoice = randomChoice()

  if (pChoice == cChoice) {
    message()
  }
  else if(pChoice == "paper"){
    if(cChoice == "rock"){
      message("win")
    }
    else{
      message("lose")
    }
  }
  else if(pChoice == "scissors"){
    if(cChoice == "paper"){
      message("win")
    }
    else{
      message("lose")
    }
  }
  else if(pChoice == "rock"){
    if(cChoice == "scissors"){
      message("win")
    }
    else{
      message("lose")
    }
  }

}

function randomChoice(){
  let i= Math.floor(Math.random() *(options.length - 0.01))
  let cChoice = options[i].name
  return cChoice
}

function message(result){
  let image 
  if (result == "win") {
    image = `<img src="youwin.png" alt="you win">`
  } else if(result == "lose"){
    image = `<img src="youlose2.png" alt="you lose">`
  } else{
    image = `<img src="tie2.png" alt="tie">`
  }
document.getElementById("message").innerHTML = image
}

function drawButtons() {
  let template = ""

  for (let i = 0; i < options.length; i++) {
    const option = options[i].name;

    template += `
  <button class="btn btn-secondary col-3" onclick="play('${option}')">${option}</button>
  `
  }
  document.getElementById("buttons").innerHTML = template
}

drawButtons()