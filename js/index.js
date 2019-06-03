console.log("BMI-program v3");

/**
 * References:
 Ref: (rotate using a variable as input)
 https://stackoverflow.com/questions/16047926/webkit-transform-rotate-with-js-variable-for-degree-value?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
 Ref: Power Of:
 https://www.w3schools.com/jsref/jsref_pow.asp
 */

/**
 * Known errors:
 #1: Putting the BMI under 18.5 does not move the arrow to normal.
 #2: Putting the BMI above of 80 does not move the arrow to max.
 #3: There is nothing indicating that you have exceeded the visible scale
     between start of [normal] and end of [Morbidly obese].
 */

 /**
  * Add [text input validation].
  * Candidates for next version(s):
  * Add date, if not date in the date field, automatically add current timestamp.
  * Store stastistics (e.g. in JSON file).
  * Print stastistics into graph and show on frontend.
  * The BMI text result should count from 0 up to its result.
  */

/**
 * Global variables
 */

var userInputHeightInCentimeters;
var userInputWeightInKilos;
var powerOfHeight;
var bmi_kg_m2;
var bmiArea;
var angleMax = 180;
var angleDegree;
var autoResult;

/**
 * Data
 */

var areas = {
            "normal": {
                      "startAngle":     0,
                      "maxAngleOfArea": 45,
                      "rangeMin":       18.5,
                      "rangeMax":       24.9,
                      "rangeSpread":    6.4
            },
            "overweight": {
                      "startAngle":     45,
                      "maxAngleOfArea": 45,
                      "rangeMin":       25,
                      "rangeMax":       29.9,
                      "rangeSpread":    4.9
            },
            "obese": {
                      "startAngle":     90,
                      "maxAngleOfArea": 45,
                      "rangeMin":       30,
                      "rangeMax":       39.9,
                      "rangeSpread":    9.9
            },
            "morbidlyObese": {
                      "startAngle":     135,
                      "maxAngleOfArea": 45,
                      "rangeMin":       40,
                      "rangeMax":       80,
                      "rangeSpread":    40
            }
}

function checkAreas() {

/**
 * BMI area result: [Normal].
 */

if (
    bmi_kg_m2 >= areas.normal.rangeMin &&
    bmi_kg_m2 <= areas.normal.rangeMax) {

    console.log("Your BMI-Area = normal");

  // Auto result.
  autoResult = (
                (bmi_kg_m2 - areas.normal.rangeMin) *
                 areas.normal.maxAngleOfArea
               )
                / areas.normal.rangeSpread + areas.normal.startAngle;

  autoResult = Math.round(autoResult * 100) / 100;                              //Round 2 digits.
  console.log("Angle to be used: " + autoResult);

/**
 * BMI area result: [Overweight].
 */

} else if (
           bmi_kg_m2 >= areas.overweight.rangeMin &&
           bmi_kg_m2 <= areas.overweight.rangeMax) {

  console.log("Your BMI Area = overweight");
  // Auto result.
  autoResult = (
                (bmi_kg_m2 - areas.overweight.rangeMin) *
                areas.overweight.maxAngleOfArea
               )
               / areas.overweight.rangeSpread + areas.overweight.startAngle;

  autoResult = Math.round(autoResult * 100) / 100;                              //Round 2 digits.
  console.log("Angle to be used: " + autoResult);

/**
 * BMI area result: [Obese].
 */

} else if (
            bmi_kg_m2 >= areas.obese.rangeMin &&
            bmi_kg_m2 <= areas.obese.rangeMax) {

  console.log("Your BMI Area = obese");
  // Auto result.
  autoResult = (
                (bmi_kg_m2 - areas.obese.rangeMin) *
                areas.obese.maxAngleOfArea
              )
              / areas.obese.rangeSpread + areas.obese.startAngle;

  autoResult = Math.round(autoResult * 100) / 100;                              //Round 2 digits.
  console.log("Angle to be used: " + autoResult);

/**
 * BMI area result: [Morbid obese].
 */

} else if (
            bmi_kg_m2 >= areas.morbidlyObese.rangeMin &&
            bmi_kg_m2 <= areas.morbidlyObese.rangeMax) {

  console.log("Your BMI Area = Morbidly Obese");
  // Auto result.
  autoResult = (
                (bmi_kg_m2 - areas.morbidlyObese.rangeMin) *
                areas.morbidlyObese.maxAngleOfArea
              )
              / areas.morbidlyObese.rangeSpread + areas.morbidlyObese.startAngle;

  autoResult = Math.round(autoResult * 100) / 100;                              //Round 2 digits.
  console.log("Angle to be used: " + autoResult);
}

} // Closure of function.



/**
 * Receive HTML input text into javascript variables
 */

function myFunction() {
    userInputHeightInCentimeters = document.getElementById("input-height").value; // Store user input in js variable.
    userInputWeightInKilos  = document.getElementById("input-weight").value;      // Store user input in js variable.
    userInputHeightInMeters = (userInputHeightInCentimeters / 100);               // changed input cm to meters.
    console.clear();                                                              // Clear console.
    calculateBMI();
    checkAreas();
    moveArrow();
}

/**
 * Calulates the BMI
 */

function calculateBMI() {
  powerOfHeight = Math.pow (userInputHeightInMeters, 2);                        // Power of.
  bmi_kg_m2 = Math.round((userInputWeightInKilos / powerOfHeight) * 10) / 10;   // Round to 2 decimals.
  console.log("Your BMI: " + bmi_kg_m2);                                        // Print BMI result to console.
  document.getElementById("bmi-result").innerHTML = bmi_kg_m2;                  // Print BMI result to HTML.
  // transposeBetweenAngelAndPercentage();
}

/**
 * Moves arrow based on transposed % to angle
 */

function moveArrow() {
  x = document.getElementById("indicator-arrow-horizontal").style;
  x.transformOrigin = "95% 50%";
  setTimeout(() => {
    x.transition = "all 3s";
  x.transform = "rotate(" + autoResult + "deg)";
}, 100)
}

/**
 * Text input validation (under development).
 */

// Height:
//  - Write in centimeters. (decline decimals and dots.)
//   - Max 250cm height.

// Kilos:
//  - Max 300kg.
//  - No minuses.
//  - Only digits.
