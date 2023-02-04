// Exercise 1: Print Odds
function printOdds(count) {
    for (let i = 1; i <= count; i++){
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

// arrow notation^: const printOdds = (count) => {
//* then add a semicolon to the finishing curly bracket
printOdds(10);
printOdds(100);

// Exercise 2: Check Age
function checkAge(name, age) {
    let oldEnoughMsg = `Congrats ${name}! You can drive!`;
    let tooYoungMsg = `Sorry ${name}, you need to wait ${16 - age}
    years (s) until you can drive.`;

    if (age < 16) {
        console.log(tooYoungMsg);
    } else {
        console.log(oldEnoughMsg);
    }
}

// arrow notation^: const checkAge = (name, age) => {
checkAge("Ben", 12);
checkAge("Seth", 16);
checkAge("Cameron", 21);


// Exercise 3: Quadrant
function checkQuadrant(x,y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1"; 
    } else if (x < 0 && y > 0) {
        return "Quandrant 2"; 
    } else if (x > 0 && y < 0) {
        return "Quandrant 3";
    } else if (x > 0 && y < 0) {
        return "Quandrant 4"; 
    } else if (x == 0 && y != 0) {
        return "X Axis";
    } else if (x != 0 && y == 0) {
        return "Y-Axis";
    } else {
        return "Origin";
    }
 }

 console.log(checkQuadrant(1, 1));
 console.log(checkQuadrant(-1, 1));
 console.log(checkQuadrant(-1, -1));
 console.log(checkQuadrant(1, -1));
 console.log(checkQuadrant(0, -1));
 console.log(checkQuadrant(1, 0));
 console.log(checkQuadrant(0, 0));

 // Exercise 4: Triangles
 function isValidTriangle(a, b, c){
    return a + b >= c && a + c >= b && b + c >= a
 }
  
 function checkTriangle(a, b, c) {
   let isValid = isValidTriangle(a, b, c);
   if (isValid) {
    //what type of triangle?
    if (a == b && b == c) {
        return `Equilateral`;
    } else if (a == b || b == c || a == c) {
        return `Isosceles`;
    } else {
        return `Scalene`;
    }
    } else {
        return `Not a valid triangle`;
    }
   }
// arrow notation^: const isValidTriangle = (a, b, c) => a + b >= c && a + c >= b && b + c >= a
   console.log(checkTriangle(1, 2, 2)); // isosceles
   console.log(checkTriangle(1, 1, 2)); // invalid
   console.log(checkTriangle(2, 3, 4)); // scalene
   console.log(checkTriangle(2, 2, 2)); // equilateral

   // Exercise 5: Data

//15 days used, 15 days remaining
//Average daily use: 3.333 GB/day
//You are EXCEEDING your average daily use (3.73 GB/day),
//continuing this high usage, you'll exceed your data plan by
//11.9 GB.
//To stay below your data plan, use no more than 2.93 GB/day.
function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let remainingData = planLimit - usage; 
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);
    console.log(`Average projected use: ${projectedAvg.toFixed(2)} GB/day`);

    if (currentAvg > projectedAvg) {
        statusMsg = "EXCEEDING";
    } else if (currentAvg < projectedAvg) {
        statusMsg = "UNDER";
    } else {
        statusMsg = "AT";
    }
    
    console.log(`You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)} GB/day),
    continuing this usage, you'll end up using 
    ${usage + projectedUsage - planLimit} GB from your data limit.`);
 
    console.log(`To stay below your data plan, use no more than 
    ${(remainingData / remainingDays).toFixed(2)} GB/day.`);
}
 
dataUsageFeedback(50, 12, 25);

 

    
    

   
 
    
    
 
        
    


