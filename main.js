const start = document.querySelector("#start")
const screen = document.querySelectorAll(".screen")
const timeList = document.querySelector("#time-list")
const gameTime = document.querySelector("#time")
const board = document.querySelector("#board")
let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
let time = 0
let score = 0

start.addEventListener("click", (event)=>{
   event.preventDefault()
   screen[0].classList.add("up")
})

timeList.addEventListener("click", event =>{
   if(event.target.classList.contains("time-btn")){
      time = parseInt(event.target.getAttribute("data-time"))
      screen[1].classList.add("up")
      startGame()
   }
})

board.addEventListener("click", event =>{
   if(event.target.classList.contains('circle')){
      score++
      event.target.remove()
      createRandomCircle()
   }
})

function startGame (){
   setInterval(decreaseTime, 1000)
   createRandomCircle()
   setTime(time)
}

function decreaseTime (){
   if(time === 0){
      finishGame()
   } else {
      let current = --time
      if(current < 10){
      current = `0${current}`
   }
   setTime(current)
   }
}

function setTime (value){
   gameTime.innerHTML = `00:${value}`
}

function finishGame(){
   gameTime.parentNode.remove()
   board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle(){
   const circle = document.createElement("div")
   const size = getRandomNumber(10, 50)
   const {width,height} = board.getBoundingClientRect()
   const x = getRandomNumber(0,width - size)
   const y = getRandomNumber(0,height - size)
   const color = getRandomeColor(colorArray)

   circle.classList.add("circle")
   circle.style.width = `${size}px`
   circle.style.height = `${size}px`
   circle.style.top = `${y}px`
   circle.style.left = `${x}px`
   circle.style.background = color

   board.append(circle)
}

function getRandomNumber(min,max){
  return Math.round(Math.random()*(max-min)+min)
}

 function getRandomeColor (){
   const indexColor = Math.floor(Math.random() * colorArray.length)
   return colorArray[indexColor]
}