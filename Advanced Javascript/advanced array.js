
// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];


//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const usernameArray = [];
const usernames = array.forEach((num)=>
  { usernameArray.push(num.username+"!"); });


//Create an array using map that has all the usernames with a "? to each of the usernames

const mapUsername= array.map((num) =>  num.username + "?");


//Filter the array to only include users who are on team: red
const teamRed = array.Filter(num => num.team === "red");

//Find out the total score of all users using reduce
let totalScore = array.reduce((acc, num)=> acc+ num.score, 0 );


// (1), what is the value of i? index 
// (2), Make this map function pure:


const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

const arrayNum = [1, 2, 4, 5, 8, 9];
arrayNum.map((num, i) => {
  console.log(num, i); 
  alert(num);
  return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
let array2 = array.map((num) => num.items.)