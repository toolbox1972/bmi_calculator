<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/index.css">
  <title>Document</title>
</head>
<body>

<div class="wrapper">

    <div class="header-1">BMI calculator</div>

    <div class="content">

        <!-- Areas -->

        <div class="area-1">
            <input id="input-height" type="text" placeholder="Height (cm)">
        </div>

        <div id="area-2" class="area-2">
          <input id="input-weight" type="text" placeholder="Weight (kg)">
        </div>

        <div id="area-3" class="area-3">
            <button
                    id="button"
                    type="button"
                    name="button"
                    onclick="myFunction()">Submit
            </button>
        </div>

        <div id="area-4" class="area-4">

            <img
                id="indicator-background"
                src="images/bmi_indicator_background.png"
                alt="indicator_background"
                width=350
            >

            <img
                id="indicator-arrow-horizontal"
                src="images/bmi_indicator_arrow_horizonal.png"
                alt="arrow_horizontal"
                width=100
            >

        </div>

        <div id="bmi-result" class="bmi-result"></div>

    </div>

</div> <!-- Closure of wrapper  -->

<script src="js/index.js"></script>

</body>
</html>
