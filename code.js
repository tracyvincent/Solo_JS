var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

//step 1
var message = "Months listed are "
for (i = 0; i < (stringList.length); i++){
  if (i < (stringList.length - 1)) {
    message = message + stringList[i] + ", ";
  } else {
    message = message + stringList[i] + ".";
  }
};
console.log(message);

//step 2
console.log(numList[numList.length - 1]);

//step 3
var numListString = "";
for (i = 0; i < (numList.length); i++){
  numListString = numListString + numList[i].toString();
}
console.log(numListString);

//step 4
var numListTotal = 0;
for (i = 0; i < (numList.length); i++){
  numListTotal = numListTotal + numList[i];
};
console.log(numListTotal);

//step 5
if (boolList[1] === true){
  console.log(numList[0] + numList[2]);
} else {
  console.log(numList[1] * numList[1]);
};

//step 6
for (i = 0; i < (boolList.length); i++) {
  if (boolList[i] === true){
  console.log(numList[i]);
 }
};

//step 7
var masterArray = stringList.concat(numList, boolList);
console.log(masterArray.reverse());
