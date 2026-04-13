// Some Of Two Number
var q1_v1 = 6;
var q1_v2 = 4;
document.getElementById("question-1").innerHTML = "Q1. Create a program to calculate the sum of two number: ";
document.getElementById("q1-value").innerHTML = "values : " + q1_v1 + " + " + q1_v2;
document.getElementById("q1-answer").innerHTML = "Ans: " + (q1_v1 + q1_v2);

// Diffrence Between Two Number 


var q2_v1 = 8;
var q2_v2 = 3;
document.getElementById("question-2").innerHTML = "Q2. Create a program to calculate the diffrence between two number: ";
document.getElementById("q2-value").innerHTML = "values : " + q2_v1 + " - " + q2_v2;
document.getElementById("q2-answer").innerHTML = "Ans: " + (q2_v1 - q2_v2);


// Multiplication


var q3_v1 = 6;
var q3_v2 = 5;
document.getElementById("question-3").innerHTML = "Q3. Develop a function to calculate the product of two number: ";
document.getElementById("q3-value").innerHTML = "values : " + q3_v1 + " * " + q3_v2;
document.getElementById("q3-answer").innerHTML = "Ans: " + (q3_v1 * q3_v2);


// Divide two number

var q4_v1 = 144;
var q4_v2 = 12;
document.getElementById("question-4").innerHTML = "Q4. Write a program of divide two numbers: ";
document.getElementById("q4-value").innerHTML = "values : " + q4_v1 + " / " + q4_v2;
document.getElementById("q4-answer").innerHTML = "Ans: " + (q4_v1 / q4_v2);


// Square 

var q5_v1 = 12;
document.getElementById("question-5-a").innerHTML = "Q5. (a) Create a program to calculate the square of number: ";
document.getElementById("q5-a-value").innerHTML = "values : " + q5_v1 + " * " + q5_v1;
document.getElementById("q5-a-answer").innerHTML = "Ans: " + (q5_v1 * q5_v1);


// cube

var q5_1_v1 = 12;
document.getElementById("question-5-b").innerHTML = "(b) Create a program to calculate the cube of number: ";
document.getElementById("q5-b-value").innerHTML = "values : " + q5_1_v1 + " * " + q5_1_v1 + " * " + q5_1_v1;
document.getElementById("q5-b-answer").innerHTML = "Ans: " + (q5_1_v1 * q5_1_v1 * q5_1_v1);


// Area Of Recangle

var q6_v1 = 10;  //length
var q6_v2 = 5;  //width

document.getElementById("question-6").innerHTML = "Q6. Create a program to calculate the area of a rectangle: ";
document.getElementById("formula-rectangle").innerHTML = "Area of Rectangle = Length * Width ";
document.getElementById("q6-value").innerHTML = "values : Length = " + q6_v1 + " & Width = " + q6_v2;
document.getElementById("q6-answer").innerHTML = "Ans: " + (q6_v1 * q6_v2);


// Area Of Circle

var q7_v1 = 3.14;  //length
var q7_v2 = 5;  //width

document.getElementById("question-7").innerHTML = "Q7. Create a program to calculate the area of a circle: ";
document.getElementById("formula-circle").innerHTML = "Area of Circle = Pai * (radius *radius) ";
document.getElementById("q7-value").innerHTML = "values : Pai = " + q7_v1 + " & Radius = " + q7_v2;
document.getElementById("q7-answer").innerHTML = "Ans: " + (q7_v1 * q7_v2 * q7_v2);


// Convert Celsius Into Fahrenheit

var q8_celsius = 25;
var q8_fahrenheit = (q8_celsius * 9/5) + 32;

document.getElementById("q8_celsius").innerHTML = "Q8. Create a program to convert celsius into fahrenheit: ";
document.getElementById("formula-convert").innerHTML = "Celsius into Fahrenheit = (c * 9/5) + 32 ";
document.getElementById("q8-value").innerHTML = "celsius value : " + q8_celsius;
document.getElementById("q8-answer").innerHTML = "Fahrenheit: " + q8_fahrenheit;


// Area Of Recangle

var q9_v1 = 7;  //P
var q9_v2 = 5;  //R
var q9_v3 = 8; //T

document.getElementById("question-9").innerHTML = " Q9. Create a program to calculate simple intrest: ";
document.getElementById("formula-simple-intrest").innerHTML = "Simple Intrest = (P * R * T) / 100 ";
document.getElementById("q9-value").innerHTML = "values : p = " + q9_v1 + " & R = " + q9_v2 + " & T = " + q9_v3;
document.getElementById("q9-answer").innerHTML = "Ans: " + ((q9_v1 * q9_v2 * q9_v3) / 100);


// Q10 Even or Odd
var num = 7;
document.getElementById("q10").innerHTML = "Q10. Check even or odd";
document.getElementById("q10-answer").innerHTML =
    (num % 2 === 0) ? "Even Number" : "Odd Number";


// Q11 Positive, Negative, Zero
var n = -5;
document.getElementById("q11").innerHTML = "Q11. Check number type";
if (n > 0)
    document.getElementById("q11-answer").innerHTML = "Positive";
else if (n < 0)
    document.getElementById("q11-answer").innerHTML = "Negative";
else
    document.getElementById("q11-answer").innerHTML = "Zero";


// Q12 Largest of 2 numbers
var a = 10, b = 20;
document.getElementById("q12").innerHTML = "Q12. Largest of two numbers";
document.getElementById("q12-answer").innerHTML =
    (a > b) ? a + " is largest" : b + " is largest";


// Q13 Largest of 3 numbers
var x = 5, y = 15, z = 10;
document.getElementById("q13").innerHTML = "Q13. Largest of three numbers";
var largest = (x > y && x > z) ? x : (y > z ? y : z);
document.getElementById("q13-answer").innerHTML = largest + " is largest";


// Q14 Voting eligibility
var age = 18;
document.getElementById("q14").innerHTML = "Q14. Voting eligibility";
document.getElementById("q14-answer").innerHTML =
    (age >= 18) ? "Eligible for voting" : "Not eligible";


// Q15 Grade system
var marks = 78;
document.getElementById("q15").innerHTML = "Q15. Grade calculation";
if (marks >= 90)
    document.getElementById("q15-answer").innerHTML = "Grade A";
else if (marks >= 75)
    document.getElementById("q15-answer").innerHTML = "Grade B";
else if (marks >= 50)
    document.getElementById("q15-answer").innerHTML = "Grade C";
else
    document.getElementById("q15-answer").innerHTML = "Fail";


// Q16 Leap year
var year = 2024;
document.getElementById("q16").innerHTML = "Q16. Leap Year Check";
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    document.getElementById("q16-answer").innerHTML = "Leap Year";
else
    document.getElementById("q16-answer").innerHTML = "Not Leap Year";


// Q17 Divisible by 5 and 11
var num2 = 55;
document.getElementById("q17").innerHTML = "Q17. Divisible by 5 and 11";
if (num2 % 5 === 0 && num2 % 11 === 0)
    document.getElementById("q17-answer").innerHTML = "Divisible by both";
else
    document.getElementById("q17-answer").innerHTML = "Not divisible";


// Q18 Calculator using switch
var n1 = 10, n2 = 5, op = "+";
document.getElementById("q18").innerHTML = "Q18. Simple Calculator";
var result;

switch(op) {
    case "+": result = n1 + n2; break;
    case "-": result = n1 - n2; break;
    case "*": result = n1 * n2; break;
    case "/": result = n1 / n2; break;
    default: result = "Invalid operator";
}

document.getElementById("q18-answer").innerHTML = "Result: " + result;


// Q19 BMI
var weight = 60, height = 1.6;
var bmi = weight / (height * height);

document.getElementById("q19").innerHTML = "Q19. BMI Calculator";

if (bmi < 18.5)
    document.getElementById("q19-answer").innerHTML = "Underweight";
else if (bmi < 25)
    document.getElementById("q19-answer").innerHTML = "Normal";
else if (bmi < 30)
    document.getElementById("q19-answer").innerHTML = "Overweight";
else
    document.getElementById("q19-answer").innerHTML = "Obese";


// Q20 Electricity Bill
var units = 120;
var bill;

document.getElementById("q20").innerHTML = "Q20. Electricity Bill";

if (units <= 50)
    bill = units * 1;
else if (units <= 100)
    bill = units * 2;
else
    bill = units * 3;

document.getElementById("q20-answer").innerHTML = "Bill = ₹" + bill;
