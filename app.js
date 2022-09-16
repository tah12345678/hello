console.log
 var rightNow = new Date();
 var theDay = rightNow.getDay();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 var now = new Date();
 var theDay = now.getDay();
 var nameOfToday = dayNames[theDay];
var d = new Date();
 var currentMonth = d.getMonth();
var dayOfMonth = d.getDate();
var currYr = d.getFullYear();
var currentHrs = d.getHours();
var currMins = d.getMinutes();
var currSecs = d.getSeconds()


var today = new Date();
var doomsday = new Date("June 30, 2035");
var msToday = today.getTime();
 var msDoomsday = doomsday.getTime();
var msDiff = msDoomsday - msToday;
var dDiff = msDiff / (1000 * 60 * 60 * 24);
var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
 var daysTillDoom = Mathfloor(msDiff / (1000 * 60 * 60 * 24));
var d = new Date("July 21, 1983 13:25:00");


var d = new Date();
 d.setFullYear(2001);
var d = new Date();
 d.setMonth(11);
var d = new Date();
 d.setDate(15);
var d = new Date();
 d.setMinutes(05);
var d = new Date();
 d.setSeconds(55);
var d = new Date();
 d.setMilliseconds(867);


 var now = new Date();
 var theHr = now.getHours();
 var theMin = now.getMinutes();
 alert("time: " + theHr + ":" + theMin);
function tellTime() {
     var now = new Date();
     var theHr = now.getHours();
     var theMin = now.getMinutes();
     alert("Current time: "+ theHr + ":" + theMin);
     }

    function greetUser() {
         alert("Hello, there.");
         }

        function greetUser(greeting) {
             alert(greeting);
             }

            var greeting = "Hello, there."
             greetUser(greeting);

             function greetUser(greeting) {
                 alert(greeting);
                
             }

                var whatever = "Hello, world.";
 greetUser(whatever);

var almostAMil = 999999;
 showBigNum(almostAMil);

var month = "March";
 showMessage(month, "'s winner number is ", 23);

var orderTot;
 if (merchTot >= 100) {
 orderTot = merchTot;
 }
 else if (merchTot < 50.01) {
 orderTot = merchTot + 5;
 }
 else {
 orderTot = merchTot + 5 + (.03 * (merchTot - 50));
 }

function calcTot(merchTot) {
     var orderTot;
     if (merchTot >= 100) {
     orderTot = merchTot;
     }
     else if (merchTot < 50.01) {
     orderTot = merchTot + 5;
     }
     else {
     orderTot = merchTot + 5 + (.03 * (merchTot - 50));
     }
     return orderTot;
     }
    var totalToCharge = calcTot(79.99);
    var totalToCharge = 85.00
    var totalToCharge = merchTotal;
    var totalToCharge = merchTotal + ship + tax;
    var totalToCharge = calcTot(79.99);
    alert(calcTot(79.99));
    
    
    var theSum
 addNumbers();
function addNumbers() {
     theSum = 2 + 2;
     }
    alert(theSum);
    function addNumbers() {
         var theSum = 2 + 2;
         }
        alert(theSum);
        var theSum = 1000;
 addNumbers();
function addNumbers() {
     var theSum = 2 + 2;
     }
    var theSum = addNumbers();
    function addNumbers() {
 var theSum = 2 + 2;
 return theSum;
 }
function addNumbers() {
     var theSum = 2 + 2;
     return theSum;
     }

    if (dayOfWk ==="Sat" || dayOfWk === "Sun") {
         alert("Whoopee!");
         }
         else if (dayOfWk === "Fri") {
         alert("TGIF!");
         }
         else {
         alert("Shoot me now!");
         }

        switch(dayOfWk) {
             case "Sat" :
             alert("Whoopee");
             break;
             case "Sun" :
             alert("Whoopee");
             break;
             case "Fri" :
         alert("TGIF!");
             break;
             default :
             alert("Shoot me now!");
             }

             default :{
              alert("Shoot me now!");
              }



             

                 