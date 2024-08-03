//Interfaces are user defined datatypes
//To make a property optional, i can add a ?
export interface User {
  name: string;
  age?: number;
  id: number;
  email: string;
}

//Riding implemanataton of Objects over interfaces ensures typesafety
let user: User = {
  name: 'Caleb',
  id: 1,
  email: 'mbuguacaleb30@gmail.com',
};

//Extending Interfaces
interface Employees extends User {
  salary: number;
}

let employeeOne: Employees = {
  name: 'Caleb',
  id: 1,
  email: 'mbuguacaleb30@gmail.com',
  salary: 20000,
};

console.log(employeeOne);

//Interfaces can also have method definitions
//every class that impements this interface must have this method
export interface LogIn {
  login(): User;
}

//Descrunturing an access of properties

let userTwo: User = {
  name: 'Caleb',
  id: 1,
  email: 'mbuguacaleb30@gmail.com',
};

//Traditional way, ait it is repetitive
userTwo.name;
userTwo.email;
