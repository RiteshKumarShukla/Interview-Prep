let employees = [
    {
        firstName: 'john',
        lastName: 'doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'ana',
        lastName: 'rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'zion',
        lastName: 'albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];

// sorting firstname in ascending order

employees.sort(function (a,b){
    if(a.firstName>b.firstName) return 1;
    if(a.firstName<b.firstName) return -1;
    return 0;
})
console.log(employees)


// sorting firstname in descending order

employees.sort(function (a,b){
    if(a.firstName>b.firstName) return -1;
    if(a.firstName<b.firstName) return 1;
    return 0;
})
 console.log(employees)

 // sorting age in ascending order

 employees.sort(function (a,b){
    if(a.age>b.age) return 1;
    if(a.age<b.age) return -1;
    return 0;
})
console.log(employees)

// sorting age in descending order

employees.sort(function (a,b){
    if(a.age>b.age) return -1;
    if(a.age<b.age) return 1;
    return 0;
})
console.log(employees)
