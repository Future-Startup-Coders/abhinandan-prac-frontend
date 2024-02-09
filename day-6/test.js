let student = {
    img : 'https://images.unsplash.com/photo-1566275529824-cca6d008f3da?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG98ZW58MHx8MHx8fDA%3D',
    name : "Ajay Mahadev Bhosle",
    rollNo : 17,
    mailId : "ajaybhosle@gmail.com",
    mobileNo : 1234567890
}

let root = document.getElementById('root')

let i = document.createElement('img')
i.setAttribute('src',student.img)
i.setAttribute('alt',"no img")
i.className = 'img'


let name = document.createElement('h1')
name.textContent = student.name

let rollNo = document.createElement('h1')
rollNo.textContent = student.rollNo

let mailId = document.createElement('h1')
mailId.textContent = student.mailId

let mobileNo = document.createElement('h1')
mobileNo.textContent = student.mobileNo

let mainDiv = document.createElement('div')
mainDiv.className = 'main'
mainDiv.appendChild(i)
mainDiv.appendChild(name)
mainDiv.appendChild(rollNo)
mainDiv.appendChild(mailId)
mainDiv.appendChild(mobileNo)

root.append(mainDiv)