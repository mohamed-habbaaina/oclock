<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="./style/style.css">
    <title>O'clock</title>
</head>
<body>
    <main>
        <!-- Horloge -->
        <div class="clock">
            <div class="hand hour" data-hour-hand></div>
            <div class="hand minute" data-minute-hand></div>
            <div class="hand second" data-second-hand></div>
            <div class="number number1">1</div>
            <div class="number number2">2</div>
            <div class="number number3">3</div>
            <div class="number number4">4</div>
            <div class="number number5">5</div>
            <div class="number number6">6</div>
            <div class="number number7">7</div>
            <div class="number number8">8</div>
            <div class="number number9">9</div>
            <div class="number number10">10</div>
            <div class="number number11">11</div>
            <div class="number number12">12</div>
        </div>

        <!-- compte a rebours -->
        <div class="rebour_stop">
            
            <div class="compteRebour">
                <h1 id="time">00:00:00 PM</h1>
                <div class="content">
                    <div class="colRebour">
                        <select name="" id="">
                            <option value="Hour" selected hidden>Hour</option>
                        </select>
                    </div>
                    <div class="colRebour">
                        <select name="">
                            <option value="Minute" selected hidden>Minute</option>
                        </select>
                    </div>
                    <div class="colRebour">
                        <select name="" id="">
                            <option value="AM/PM" selected hidden>AM/PM</option>
                        </select>
                    </div>
    
                </div>
                <button id="btnAlarm">Set Alarme</button>
            </div>

            <!-- the stopwatch -->
            <div class="stopwatch">
            <h1 id="stopwatchAffich">00 : 00 : 00</h1>
            <div class="buttonWatch">
                <img src="img/stop.png" alt="" id="watchstop">
                <img src="img/play.png" alt="" id="startwatch">
                <img src="img/reset.png" alt="" id="resetwatch">
            </div>

            </div>
        </div>
    </main>

<script src="./app.js"></script>
</body>
</html>