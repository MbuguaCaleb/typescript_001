"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
//Exporting all exportable objects in a class
// import * as UserLogIn from './04_interface';
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
//Any class than implements the LogIn interface must have the LogIn Method
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    login() {
        return {
            name: 'Caleb',
            id: 1,
            email: 'mbuguacaleb30@gmail.com',
        };
    }
    //class methods
    //To create Methods in my classes i do not have to use the function Key WORD
    getNamesWithAddress() {
        //a string can be written very well between a variable, and we can as well use a literal
        return `${this.name} stays at ${this.address}`;
    }
    //Static Member can be accessed directly within/in the className
    //There are times we may not want to instantiate classes because it is uncecessary.
    //This is where static methods come it
    static getEmployeeCount() {
        return 50;
    }
    //What if i want to access a private property outside?
    //This is where getters and setters come it
    getEmpId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    setEmpId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
}
_Employee_id = new WeakMap();
//INSTANTIATE A CLASS
let caleb = new Employee(1, 'Caleb', {
    street: 'kimathi',
    city: 'Naivasha',
    state: 'Kabati',
    pin: '1234',
});
caleb.setEmpId(12345);
let mercy = new Employee(1, 'Mercy', {
    street: 'kimathi',
    city: 'Naivasha',
    state: 'Kabati',
    pin: '1234',
});
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
    constructor(id, name, address) {
        super(id, name, address);
    }
    getManagerDetails() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
//Bacauss the name propery is protected it cannot be accessed outside the
let manager = new Manager(1, 'Mercy', {
    street: 'kimathi',
    city: 'Naivasha',
    state: 'Kabati',
    pin: '1234',
});
console.log(manager.getManagerDetails());
console.log(manager.getNamesWithAddress());
//Static class Members
console.log(Employee.getEmployeeCount());
//Accessing private class properties via getters and setters
console.log(caleb.getEmpId());
