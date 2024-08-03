"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Riding implemanataton of Objects over interfaces ensures typesafety
let user = {
    name: 'Caleb',
    id: 1,
    email: 'mbuguacaleb30@gmail.com',
};
let employeeOne = {
    name: 'Caleb',
    id: 1,
    email: 'mbuguacaleb30@gmail.com',
    salary: 20000,
};
console.log(employeeOne);
//Descrunturing an access of properties
let userTwo = {
    name: 'Caleb',
    id: 1,
    email: 'mbuguacaleb30@gmail.com',
};
//Traditional way, ait it is repetitive
userTwo.name;
userTwo.email;
//Bette way to access properties via descrunctuting
let { name, email } = {
    name: 'Caleb',
    id: 1,
    email: 'mbuguacaleb30@gmail.com',
};
//Renaming propery after accessing it
let { name: nameTwo, email: emailTwo } = {
    name: 'Caleb',
    id: 1,
    email: 'mbuguacaleb30@gmail.com',
};
console.log(name, email);
console.log(nameTwo, emailTwo);
//Array desctructuring
let users = [
    {
        name: 'Caleb',
        id: 1,
        email: 'mbuguacaleb30@gmail.com',
    },
    {
        name: 'Mercy',
        id: 2,
        email: 'mbuguacaleb30@gmail.com',
    },
    {
        name: 'Humphrey',
        id: 3,
        email: 'mbuguacaleb30@gmail.com',
    },
    {
        name: 'Ruth',
        id: 4,
        email: 'mbuguacaleb30@gmail.com',
    },
];
//i can get objects in array index via descructuring
let [user1, user2, ...restUsers] = [
    {
        name: 'Caleb',
        id: 1,
        email: 'mbuguacaleb30@gmail.com',
    },
    {
        name: 'Mercy',
        id: 2,
        email: 'mbuguacaleb30@gmail.com',
    },
    {
        name: 'Humphrey',
        id: 32,
        email: 'mbuguacaleb30@gmail.com',
    },
    {
        name: 'Ruth',
        id: 42,
        email: 'mbuguacaleb30@gmail.com',
    },
    {
        name: 'Mercy',
        id: 22,
        email: 'mbuguacaleb30@gmail.com',
    },
    {
        name: 'Humphrey',
        id: 32,
        email: 'mbuguacaleb30@gmail.com',
    },
    {
        name: 'Ruth',
        id: 42,
        email: 'mbuguacaleb30@gmail.com',
    },
];
console.log(user1, user2);
console.log(restUsers);
let usersGreateThanIdTwo = restUsers.filter((user) => user.id >= 2);
console.log(usersGreateThanIdTwo);
