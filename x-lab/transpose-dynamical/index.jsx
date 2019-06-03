console.log("test12");

var bmiScaleStart = 18.5;
var bmiScaleEnd = 40;

var angleDegreeStart = 0;
var angleDegreeEnd = 180;

var arrrowPointerPosition;

var myBMI = 25;

/***************************************/
/* BMI Thresholds (not sure if needed) */
/***************************************/
thresholds = {
                  "normal":         {"from": 18.5, "to": 24.9},
                  "overweight":     {"from": 25 ,  "to": 29.9},
                  "obese":         {"from": 30 ,  "to": 39.9},
                  "morbidlyObsese": {"from": 40}
}

var rangesBMI = {
                "normal": Math.round((thresholds.normal.to - thresholds.normal.from)*100) / 100,
                "overweight": Math.round((thresholds.overweight.to - thresholds.overweight.from)*100) / 100,
                "obese": Math.round((thresholds.obese.to - thresholds.obese.from)*100) / 100,
}

var oneBmiPerRange = {
                "normal": Math.round((6.4/45)*100)/100,
                "overweight": Math.round((4.9/45)*100)/100,
                "obese": Math.round((9.9/45)*100)/100,
}

var angelDeegreOfRange = 45;

var arrowAngles = {
                "normal": (25 * 0.14) + 18.5
}

console.log(arrowAngles);


if (myBMI >= thresholds.normal.from && myBMI <= thresholds.normal.to) {
  console.log("Your BMI is normal!");
} else if (myBMI >= thresholds.overweight.from && myBMI <= thresholds.overweight.to) {
  console.log("Your BMI is overweight!");
}  else if (myBMI >= thresholds.obese.from && myBMI <= thresholds.obese.to) {
  console.log("Your BMI is obese!");
} else if (myBMI >= thresholds.morbidlyObsese.from) {
  console.log("Your BMI is Morbidly obese!");
}




/**************/
/* Asumptions */
/**************/

/***********************/
/* BMI vs AngleDegrees */
/***********************/
    // 18.5 BMI = 0 AngleDegrees
    // 29.9/30 BMI = 90 AngleDegrees
    // 40 BMI = 137,5 AngleDegrees
    // X BMI = 180 AngleDegrees

/*********************************************/
/* Areas - Categorize are not equal balanced */
/*********************************************/
    //   Normal = 6.4 BMI
    //   Overweight = 4.9 BMI
    //   Obese =  9.9 BMI
    //   morbidlyObsese = Unknown
