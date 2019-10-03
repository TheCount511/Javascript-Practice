//Evaluate these:
//#1
[2] === [2] 
{} === {} 

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;

//4 4 4 5

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Mammal{
	constructor(name, type, color, sound){
	this.name = name;
	this.type = type;
	this.color = color;
	this.sound = sound;
	}


}

class Animal extends Mammal {
	constructor(name, type, color, sound){
		super(name, type, color, sound)
	}
		makeSound(){
	console.log(`${this.sound}   my name is${this.name} i am a ${this.color} ${this.type}`);
	}}

const cow = new Animal('sam', 'kano breed',  'white', 'mooo');