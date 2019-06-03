//
// myBMI = 40;
//
// rangeNormalMin = 18.5;
// rangeNormalMax = 24.9;
// rangeNormalDiff = Math.round((rangeNormalMax - rangeNormalMin)*100)/100;
// angleDegree = 45;
// OneBmiWithinNormalRange = Math.round((rangeNormalDiff/angleDegree)*100)/100;
//
// angleResult = Math.round(((myBMI * OneBmiWithinNormalRange)+18.5)*100)/100;
//
//
// console.log("BMI: " + myBMI);
// console.log("Angle per range: " + angleDegree);
// console.log("Range diff for normal range: " + rangeNormalDiff);
// console.log("Value of one BMI: " + OneBmiWithinNormalRange);
//
// console.log("Angle Result: " + angleResult);


//Pure digits.

var manual = (24.9*((24.9 - 18.5)/45)) + 18.5;

console.log(manual);

// angle 22 of 45
