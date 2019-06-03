console.log("rotate");

var myValue = 12;

myValue = myValue * 0.18;
console.log(myValue);

// function myFunction() {
// x = document.getElementById("box");
// x.style.transform = "rotate(90deg)"; // Rotate.
// x.style.transform.origin = "top left";
// x.style.transition = "all 1.5s"; // Smooth transition.
// }


var thresholds = {
                  "normal":         {"from": 18.5, "to": 24.9},
                  "overveight":     {"from": 25 ,  "to": 29.9},
                  "obsese":         {"from": 30 ,  "to": 39.9},
                  "morbidlyObsese": {"from": 40 ,  "to": 24.9}
}

if (myValue > thresholds.normal.from && myValue < thresholds.normal.to) {
console.log("Your BMI is within normal range");
}


function myFunction() {
   x = document.getElementById("box");
   x.style.transform = "rotate(45deg)";
   x.style.transformOrigin = "100%";
   x.style.transition = "3s"
}
