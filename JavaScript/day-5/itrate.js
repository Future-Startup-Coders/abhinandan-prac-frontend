let team = {
    noOfMembers : {name: {firstname : 'abhi ',lastname : 'ambekar'},id:1},
    noOfBatsman : 6,
    noOfBolwer : 5
}

let college = {
    nameOfCollege : `ZCOER`,
    numberOfDepartments : 4,
    numberOfStudents : 102,
    team
}

// console.log(college['team'].noOfMembers.name.firstname);


for(key in college){
    console.log(college[key])
}
// console.log('hii\nmy name is abhi')