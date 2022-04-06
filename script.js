const q = document.getElementById("Q")
const w = document.getElementById("W")
const e = document.getElementById("E")
const a = document.getElementById("A")
const s = document.getElementById("S")
const d = document.getElementById("D")
const z = document.getElementById("Z")
const x = document.getElementById("X")
const c = document.getElementById("C")
let displayEl = document.getElementById("display")
let muteBtn = document.getElementById("mute")
let muteMark = document.getElementById("muteMark")
const slider = document.getElementById("myVolumeSlider")
const sliderValue = document.getElementById("display-value")



sliderValue.textContent = slider.value
slider.oninput = function(){
  sliderValue.textContent = this.value
}



muteMark.style.display = "none"
muteBtn = false


function muteBtnActivation(){
  if(muteBtn === true){
    q.pause()
    w.pause()
    e.pause()
    a.pause()
    s.pause()
    d.pause()
    z.pause()
    x.pause()
    c.pause()
  } 
}



function muteBtnRegulations(){
  if(muteBtn === false){
     muteBtn = true
     muteMark.style.display = ""
   } else if(muteBtn === true){
     muteBtn = false
     muteMark.style.display = "none"
  }
}













document.addEventListener('keydown', event => {
  if(muteBtn === true){
    muteBtnActivation()
  } else if(event.keyCode === 81) {
     q.play()
     q.volume = slider.value / 100
    
    displayEl.textContent = "heater"
    
  } 
})

document.addEventListener('keydown', event => {
  if(muteBtn === true){
    muteBtnActivation()
  } else if(event.keyCode === 87) {
     w.play()
     w.volume = slider.value / 100
    displayEl.textContent = "drum-1"
  } 
})

document.addEventListener('keydown', event => {
  if(muteBtn === true){
    muteBtnActivation()
  } else if(event.keyCode === 69) {
     e.play()
     e.volume = slider.value / 100
    displayEl.textContent = "heater-3"
  } 
})

document.addEventListener('keydown', event => {
  if(muteBtn === true){
    muteBtnActivation()
  } else if(event.keyCode === 65) {
     a.play()
     a.volume = slider.value / 100
    displayEl.textContent = "drum-2"
  } 
})

document.addEventListener('keydown', event => {
  if(muteBtn === true){
    muteBtnActivation()
  } else if(event.keyCode === 83) {
     s.play()
     s.volume = slider.value / 100
    displayEl.textContent = "drum-3"
  } 
})
document.addEventListener('keydown', event => {
  if(muteBtn === true){
    muteBtnActivation()
  } else if(event.keyCode === 68) {
     d.play()
     d.volume = slider.value / 100
    displayEl.textContent = "drum-4" 
  } 
})
document.addEventListener('keydown', event => {
  if(muteBtn === true){
    muteBtnActivation()
  } else if(event.keyCode === 90) {
     z.play()
     z.volume = slider.value / 100
    displayEl.textContent = "kick"
  } 
})
document.addEventListener('keydown', event => {
  if(muteBtn === true){
    muteBtnActivation()
  } else if(event.keyCode === 88) {
     x.play()
     x.volume = slider.value / 100
    displayEl.textContent = "drum-5"
  } 
})
document.addEventListener('keydown', event => {
  if(muteBtn === true){
    muteBtnActivation()
  } else if(event.keyCode === 67) {
     c.play()
     c.volume = slider.value / 100
    displayEl.textContent = "drum-6"
  } 
})


function playHeaterSound(){
   q.play()
   q.volume = slider.value / 100
   displayEl.textContent = "heater"
  }


function playDrum_1Sound(){
   w.play()
   w.volume = slider.value / 100
  displayEl.textContent = "drum-1"
}




function playHeater3Sound(){
   e.play()
   e.volume = slider.value / 100
  displayEl.textContent = "heater-3"
}



function playDrum2Sound(){
   a.play()
   a.volume = slider.value / 100
  displayEl.textContent = "drum-2"
}

function playDrum3Sound(){
   s.play()
   s.volume = slider.value / 100
  displayEl.textContent = "drum-3"
}


function playDrum4Sound(){
   d.play()
   d.volume = slider.value / 100
  displayEl.textContent = "drum-4"
}



function playKickSound(){
   z.play()
   z.volume = slider.value / 100
  displayEl.textContent = "kick"
}



function playDrum5Sound(){
   x.play()
   x.volume = slider.value / 100
  displayEl.textContent = "drum-5"
}


function playDrum6Sound(){
   c.play()
   c.volume = slider.value / 100
   
  displayEl.textContent = "drum-6"
}