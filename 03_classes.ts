/**
 *
 * Proprties in a class are instantiated by constructors
 * When i do not want to write a constuctor  in my class, but rather want to use the default,
 * i can instantiate propeties in my class with a id!, name!
 *
 * To Make a class propery private, i can add a private KeyWORD or #, This makes the property
 * not to be accessible outside of the class.
 *
 * Protected KeyWORD is important,when extending classes functionality
 */
class Employee {
  #id: number;
  protected name: string;
  address: string;

  constructor(id: number, name: string, address: string) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  //class methods
  //To create Methods in my classes i do not have to use the function Key WORD

  getNamesWithAddress(): string {
    //a string can be written very well between a variable, and we can as well use a literal
    return `${this.name} stays at ${this.address}`;
  }

  //Static Member can be accessed directly within/in the className
  //There are times we may not want to instantiate classes because it is uncecessary.
  //This is where static methods come it
  static getEmployeeCount(): number {
    return 50;
  }

  //What if i want to access a private property outside?
  //This is where getters and setters come it
  getEmpId(): number {
    return this.#id;
  }

  setEmpId(id: number) {
    this.#id = id;
  }
}

//INSTANTIATE A CLASS
let caleb = new Employee(1, 'Caleb', '553, 20117, Nvs');
caleb.setEmpId(12345);
let mercy = new Employee(1, 'Mercy', '553, 20117, Nvs');

//Calling a class Method
console.log(caleb.getNamesWithAddress());

/**We can also assign properties manually */
//caleb.name = 'Mbugua';

//Assign values to class properites
console.log(caleb);
console.log(mercy);

class Manager extends Employee {
  //we must use super to instantiate constructor properties of the other class
  //incase there are other methods i wish to call within it
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }

  getManagerDetails(): string {
    return `${this.name} is a manager at ${this.address}`;
  }
}

//Bacauss the name propery is protected it cannot be accessed outside the
let manager = new Manager(1, 'Mercy', 'Kengen');
console.log(manager.getManagerDetails());
console.log(manager.getNamesWithAddress());

//Static class Members
console.log(Employee.getEmployeeCount());

//Accessing private class properties via getters and setters
console.log(caleb.getEmpId());
