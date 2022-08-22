let students = ['John', 'Jane', "jimmy"];


for (let i = 0; i< students.length; i++) {
    console.log(students[i]);
}


let people = [
    {
        name: 'james',
        age: 34
    },
    {
        name: 'John',
        age: 43
    },
    {
        name: 'Jane',
        age: 23
    }
]
for (let i = 0; i < people.length; i++) {
        conslole.log(people[i])
    
    if (people[i].name === 'John' ){
       console.log('I found John');
    }else if (people[i].name === 'Jane'){
        console.log("Hey Jane, do you know where john is?");
    }else 
        console.log('do you happen to know someone named john?');
}

