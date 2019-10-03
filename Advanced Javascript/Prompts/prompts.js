// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
{
    username: "andrei"
    password: "supersecret"
}

// 2. Create an array which contains the object you have made above and name the arry "database"
var database = [{
        username: "andrei",
        password: "supersecret"
    },

    {
        username: "Fola",
        password: "adeola"
    }
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [{
    username: "Bobby",
    timeline: "So tired from all that learning!"
}, {
    username: "Sally",
    timeline: "Javascript is sooooo cool!"
}, {
    username: "Mitch",
    timeline: "Javascript is preeetyy cool!"
}];


var username = prompt("enter username: ");
var password = prompt("enter password");

function loginVerifier(username, password){
 var databaseLength = database.length;

 for(i = 0; i < databaseLength; i++){
    if (database[i].username === username && database[i].password === password) {
        return true;
    }
 }
return false;

}


function login(loginVerifier){
    if(loginVerifier(username, password) === true){
        console.log(newsfeed);
    }
    else{
        alert("invalid login details");
    }
}


login(loginVerifier);