let root = document.getElementById('root')

let text 
let button = document.createElement('button')
button.textContent = 'click me'
button.className = 'btn'
let label = document.createElement('h1')

button.addEventListener('click' , ()=>{
    label.textContent = 'you typed : '+ text
})


let input = document.createElement('input')
input.setAttribute('type','text')


input.addEventListener('change',()=>{text = input.value})

root.appendChild(button)
root.appendChild(input)
root.appendChild(label)
