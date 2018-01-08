//----------------------------Scope Functions
var outsideVariable = 5;

function doSomething() {
  var insideVariable = 10;
  console.log(outsideVariable);
}

doSomething();
console.log(insideVariable);

//-------------------------------------
function firstFunction() {
  console.log("I am the first function");
}

function secondFunction() {
  firstFunction();
  console.log("I'm the second function");
  function insideSecondFunction() {
    console.log("I'm inside the second function");
  }
}
secondFunction();

//----------------------------------------------
function joinStringAndPrint(string1, string2) {
  var newString = string1 + string2;
  //Declare the function
  function printString(string ) {
    console.log(string);
  }
  //Call the function here
  printString(newString);
  return newString;
}

var hello = "hello ";
var world = "World!";
joinStringAndPrint( hello, world);


//-------------------------- TASK--------------------

function joinStringsAndPrint( string1 , string2 ) {
	var newString =  string1 + string2;
	function printString( string ) {
		console.log(string);
		// Q3
		// console.log(newString);
		// Q4
		// console.log(string1 + string2);
	}
	printString( newString );
	return newString;
}
var string1 = "hello, ";
var string2 = "world";
joinStringsAndPrint( string1 , string2 );
// Q1
// printString( "run from outside joinStrings" );
// Q2
// console.log(newString)
