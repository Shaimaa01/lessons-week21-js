/* 
lessong => 169
What Is JSON ?
    JavaScript Object Notaion
    Format For Sharing Data Between Server And Client
    JSON Derived From JavaScript
    Alterative To XML
    File Extension Is .json

Why JSON ?
    Easy To Use And Read
    Used By Most Programming Languages And Its Frameworks
    You Can Convert JSON Object To Js Object And Vice Varsa

JSON vs XML
=============================================================
= Text Based Format          = Markup Language              =
= Lightweight                = Heavier                      =
= Does Not Use Tags          = Using Tags                   =
= Shorter                    = Not Short                    =
= Can Use Arrays             = Cannot Use Arrays            =
= Not Support Comments       = Support Comments             = 
=============================================================
*/

/*
lesson => 170
  JSON Syntax
    Data Added Inside Curly Braces { }
    Date Added With Key :Value
    Key Should Be String Wrapped In Dobule Quotes
    Data Separated By Comaa
    Square Brackets [] For Arrays
    Curly Braces {} For Objects

  Available Data Types
    String
    Number
    Object
    Array
    Boolean Values
    null
*/

/*
lesson => 171
  JSON
    API Overview = appliction programming interface 
    Tools To Test API
    preview Github API
*/

/*
lesson => 172
  JSON
    JSON.parse => Convert Text Data To JS Object
    JSON.stringify => Convert JS Object To JSON
*/
// json is a text formate responsible for share data between server and client

const myJsonObjectFromServer = `{"Username":"Osama" , "Age":39}`;
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);

myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);

/*
lesson => 173
  To Understand Ajax, Fetch , Promises

  Asynchronous vs Synchronous Programming
    Meaning

  Synchronous
    Operations Runs in Sequence
    Each Operation Must Wait For The Previous One To Complete
    Story From Real Life

  Asynchronous
    Operations Runs In Parallel
    This Means That An Operation Can Occur Wile Another One Is Still Being processed
    Story From Real Life

  Facebook As Example
  Simulation

  Search
    JavaScript Is A Single-Threaded
    Multi Threaded Languages
*/

// Synchronous
// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// Asynchronous
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 3000);
console.log("3");

/*
lesson => 174
  To Understand Ajax,Fetch, Promises

  Call Stack || Stack Trace
    JavaScript Engine Uses A Call Stack To Manage Execution Contexts
    Mechanism To Make The Interpreter Track Your Calls
    When Function Called It Added To The Stack
    When Function Executed It Removed From The Stack
    After Function Is Finished Executing The Interpreter Continue From The Last Point
    Work Using LIFO Principle => Last In First Out 
    Code Execution Is Synchronous.
    Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
    Methods Available From The Environment => Browser
*/

setTimeout(() => {
  console.log("Web API");
}, 0); // you are the last 😛

function one() {
  console.log("One");
}
function two() {
  one();
  console.log("Two");
}
function three() {
  two();
  console.log("Three");
}

three();
/*
 ========================================================
  console.log("One");
 ========================================================
  function one(){
  console.log("One");
 }
 ========================================================
 function two(){
  one();
  console.log("Two");
 }
 ========================================================
 function three(){
  two();
  console.log("Three");
 }
 ========================================================
 */

console.log("#########");
console.log("One");
console.log("Two");
console.log("Three");

/*
lesson => 175
  To Understand Ajax, fetch , Promises

  Event Loop + Callback Queue

  Story
    JavaScript Is A Single Threaded Language 'All Operations Executed in Single Thread'
    call stack Track All Calls
    Every Function Is Done Its Poped Out
    When you call asynchronous Function It Sent To Browser API
    Asynchronous Function Like Settimeout Start Its Own Thread
    Browser API Act As A Second Thread
    API finish Waiting And Send Back The Function For Processing
    Browser API Add The Callback To Callback Queue
    Event Loop Wait For Call Stack To Be Empty
    Event Loop Get Callback From Callback Queue And Add It To Call Stack
    Callback Queue Follow FIFO "First In First Out" Rule
*/

console.log("One");
setTimeout(() => {
  console.log("Three"); // Asyncorons function special for API
}, 0);
setTimeout(() => {
  console.log("Four");
}, 0);
console.log("Two");

let myVar = 100;
myVar += 100;
console.log(myVar);

/*
lesson => 176
  AJAX
    Asychrononus JavaScript And XML
    Approach To Use Many Technologies Together [HTML , CSS , JS , DOM]
    It Use "XMLHttpRequest" Object To Interact With The Server
    YOu Can Fetch Data Or Send Data Wihout page REfresh

  Test new xMLHttpRequest();
  Request And Response
  Status Code
*/

let req = new XMLHttpRequest();
console.log(req);

/*
lesson => 177
  Ajax
    Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
    Status
    [200] Response Is Successful
    [404] Not Found
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
  // console.log(myRequest.readyState);
  // console.log(myRequest.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    console.log(jsData);
    for (i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};

/*
lesson => 178
  Ajax
  Loop On Data

  Search 
  Cross Origin API [CORS]
  API Authentication
*/
