
let students = {

    '15' : {
        name : "Anjali Borhude",
        id : 21,
    },
    "14" : {
        name : `Shruti Ghotane`,
        id : 99,
    },
    '12' : {
        name : 'Ajay Bhosle',
        id : 17 
    }

}
let x = 10
let y = x 

for(key in students){
    console.log(students[key].name + "-----" + students[key].id)
}

// console.log(students)