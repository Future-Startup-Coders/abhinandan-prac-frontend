const root = document.getElementById('root')


const img = document.createElement('img')
img.setAttribute('src','./download.jpeg')


const sd = document.createElement('h2')
sd.textContent = 'Software Devloper'

const n = document.createElement('h1')
n.textContent = 'Abhinandan Ambekar'

const no = document.createElement('h3')
no.textContent = '9850108383'

const m = document.createElement('h3')
m.textContent = 'abhinandanambekar@gmail.com'

const right = document.createElement('div')
right.className = 'right'
right.appendChild(sd)
right.appendChild(n)
right.appendChild(no)
right.appendChild(m)

const card = document.createElement('div')
card.className = 'card'
card.appendChild(img)
card.appendChild(right)

root.appendChild(card)