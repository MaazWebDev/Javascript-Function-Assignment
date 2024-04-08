// Name
let firstName = prompt("Enter Your First Name");
let lastName = prompt("Enter Your Last Name");

function fullName(firstName,lastName){
    alert("Welcome To My Page" + " " + firstName + " " + lastName)
}
if(!isNaN(firstName) && !isNaN(lastName)){
    alert("Numbers Not Allowed");
}
else{
fullName(firstName,lastName);
}

//Capatalize

let sentence = prompt("Enter A Sentence To Capatalize :")
function toCapatalize(sentence) {


    if(!isNaN(sentence)){
        console.log("Numeric values are not capatilized !");
        return null;
    }

    let words = sentence.split(" ");
    let sentenceToCapitalize = words.map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

    });

    sentenceToCapitalize = sentenceToCapitalize.join(" ");
    return sentenceToCapitalize;

}

console.log(toCapatalize(sentence));

//Counting

let startForCount = prompt("Enter Start Value From Where To Start Counting");
let endForCount = prompt("Enter End Value From Where To End Counting");

function convertToNum(input) {
    return parseInt(input);
}

function counting (startForCount,endForCount){
     startForCount = convertToNum(startForCount)
     endForCount = convertToNum(endForCount)
    for(let i = startForCount ; i <= endForCount ; i++){
        console.log(i);
    }
}

if(!isNaN(startForCount) && !isNaN(endForCount)){
    counting(startForCount,endForCount);
}
else{
    console.log("Invalid ! Please write only numeric value")
}

// Area

function calculateTheAreaUsingVariable(){
   let width = prompt("Enter The Width Of The Rectangle");
   let height = prompt("Enter The Height Of The Variable");

   if(isNaN(width) || isNaN(height)){
    console.log("Inavlid ! Please Type Valid Number")
    return;
   }

   let area = width * height;
   console.log(area);
}

calculateTheAreaUsingVariable();

// Result

document.write("<h2>THANK YOU FOR ENTERING VALUES</h2>")
document.write("<h2>PLEASE CHECK THE ANSWER IN CONSOLE !</h2>")