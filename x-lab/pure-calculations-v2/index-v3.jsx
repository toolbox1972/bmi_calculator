console.log("BMI-program");
//var result = ((bmi-rangeStart) * angleDegree) / deltaRange + startAngles.normal;

//var bmi = 20;
//var bmi = 25; // Should be 45 degrees.
//var bmi = 29.9; // Should be 90 degrees.
//var bmi = 39.9; // Should be 135 degrees.

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
                      "rangeMax":    "unknown",
                      "rangeSpread": "unknown"
            }
}
/****************/
/* Area: Normal */
/****************/
if (bmi >= areas.normal.rangeMin && bmi <= areas.normal.rangeMax) {
  console.log("Your BMI = normal");
  // Auto result.
  var autoResult = ((bmi - areas.normal.rangeMin) * areas.normal.maxAngleOfArea) / areas.normal.rangeSpread + areas.normal.startAngle;
  var autoResult = Math.round(autoResult * 100) / 100; //Round 2 digits.
  console.log("Auto Result: " + autoResult);

  // Manual Result.
  var manualResult = ((20  - 18.5) * 45) / 6.4
  var manualResult = Math.round(manualResult * 100) / 100; //Round 2 digits.
  console.log("Manual result: " + manualResult);

/********************/
/* Area: Overweight */
/********************/
} else if (bmi >= areas.overweight.rangeMin && bmi <= areas.overweight.rangeMax) {
  console.log("Your BMI = overweight");
  // Auto result.
  var autoResult = ((bmi - areas.overweight.rangeMin) * areas.overweight.maxAngleOfArea) / areas.overweight.rangeSpread + areas.overweight.startAngle;
  var autoResult = Math.round(autoResult * 100) / 100; //Round 2 digits.
  console.log("Auto Result: " + autoResult);

/***************/
/* Area: Obese */
/***************/
} else if (bmi >= areas.obese.rangeMin && bmi <= areas.obese.rangeMax) {
  console.log("Your BMI = obese");
  // Auto result.
  var autoResult = ((bmi - areas.obese.rangeMin) * areas.obese.maxAngleOfArea) / areas.obese.rangeSpread + areas.obese.startAngle;
  var autoResult = Math.round(autoResult * 100) / 100; //Round 2 digits.
  console.log("Auto Result: " + autoResult);

/************************/
/* Area: Morbidly Obese */
/************************/
} else if (bmi >= areas.morbidlyObese.rangeMin) {
  console.log("Your BMI = obese");
}
