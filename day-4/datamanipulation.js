
// top leval object

let company = {

    snehal : {
        name : 'snehal dindle',
        department : 'HR',
        id : 1,
        position : '',
        mobileno : 0,
        mail : '',
    }

}

function createEmployee(name , id , position){

    let firstName = name.split(' ')
    company[firstName[0]] = {name , position , id }

    // company.ajay = {name , position , id }

}

function readEmployee(id){

    for (key in company){
        if(company[key].id == id){
            // console.log('sapadla' , company[key].name)
            return company[key]
        }
    }

}

function updateEmployee(id , updates){

    for(i in company){
        if(company[i].id == id){
            company[i] = { ...company[i] , ...updates } 
            // spread oprator (cloning)
        }
    }

}

function deleteEmployee(id){
    for(i in company){
        if(company[i].id == id){
            delete company[i]
        }
    }

}


createEmployee('ajay bhosle',2,'senior devloper')
createEmployee('shruti ghotane',3,'devloper')

updateEmployee(3,{ 
    department : 'sellig',
    position : 'head',
    mobileno : 123456789,
    mail : '@.'
})
deleteEmployee(3)
console.log(company)