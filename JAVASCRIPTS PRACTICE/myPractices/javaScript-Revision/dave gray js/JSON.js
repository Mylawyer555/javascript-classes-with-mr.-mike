const myObj = {
    name: "samuel",
    hobbies: ["eat", "Sleep", "games,"],
    hello : function () {
        console.log("hello World");
        
    }
}
console.log(myObj);

myObj.hello()
console.log(myObj.name);

// Send object as JSON
// JSON does send functions or methods

const sendJson = JSON.stringify(myObj);
console.log(sendJson);
console.log(typeof sendJson);

const recieveJSON = JSON.parse(sendJson);
console.log(recieveJSON);
console.log(typeof recieveJSON);




