let selected = {
    seatNo : '',
    available : false,
    bookedBy : ''
}
const seatDetails = {
    1:{
        seatNo : 1,
        available : false,
        bookedBy : 'soham kulkarni'
    },
    2:{
        seatNo : 2,
        available : false,
        bookedBy : 'ajay bhosle'
    }
}
let submitBtnClicked = false

for (let i=3 ; i<=10 ; i++){
    seatDetails[i] = {
        seatNo : i,
        available : true,
        bookedBy : ''
    }
}

// ===========================================================================================
function updatebtn(flag){
    submitBtnClicked = flag
    render()
}
function setselected(seat){
    selected = seat
    render()
}
// ===========================================================================================
function render(){
    const root = document.getElementById('root')
    root.innerHTML = ''

    const left = document.createElement('div')
    left.className = 'left'

    for (let i=1 ; i<=10 ; i++){
        const button = document.createElement('button')
        button.className = 'btn'
        button.textContent = i
        if(selected.seatNo == button.innerText){
            button.style.backgroundColor = 'gray'
        }

        button.addEventListener('click',()=>{
            setselected(seatDetails[i])
            updatebtn(false)
        })
        left.appendChild(button)
    }

    const submit = document.createElement('button')
    submit.className = 'btn1'
    submit.textContent = 'Submit'
    left.appendChild(submit)
    submit.addEventListener('click',()=>{
        updatebtn(true)
    })


    const right = document.createElement('div')
    right.className = 'right'

    function details(){
        const label = document.createElement('h1')
        label.textContent = 'Seat no : '+selected.seatNo
        right.appendChild(label)

        if(selected.available){
            const availability = document.createElement('h1')
            availability.textContent = 'is Available'
            right.appendChild(availability)
        }else{
            const bookedBy = document.createElement('h1')
            bookedBy.textContent = 'Booked by : '+selected.bookedBy
            right.appendChild(bookedBy)
        }
    }
    function subBtnClicked(){
        const totSeat = document.createElement('h1')
        totSeat.textContent = 'total seats 10'
        const aveSeat = document.createElement('h1')
        aveSeat.textContent = 'available seat 2'

        right.appendChild(totSeat)
        right.appendChild(aveSeat)
    }
    details()
    if(submitBtnClicked){
        subBtnClicked()
    }
    
    const maindiv = document.createElement('div')
    maindiv.className = 'maindiv'
    maindiv.appendChild(left)
    maindiv.appendChild(right)

    const headline = document.createElement('h1')
    headline.textContent = 'Booking System'

    root.appendChild(headline)
    root.appendChild(maindiv)
}