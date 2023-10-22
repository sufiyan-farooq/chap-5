// Question No 1

var num1 = 3
var num2 = 5

// add two number
const total = num1 + num2


document.write ('Sum of '+ num1 + 'and' + num2 + 'is' + total ) 




// Question 2
var num1 = 5
var num2 = 4

// add two number
const multiply = num1 * num2
const subtract = num1 - num2
const module = num1 % num2

document.write(' multipy of '+ num1 + 'and' + num2 + 'is' + multiply )
document.write(' subtract of '+ num1 + 'and' + num2 + 'is' + subtract )
document.write(' module of '+ num1 + 'and' + num2 + 'is' + module )

// Question 3
var initialValue = 5
var increment = 6
var addition = 7
var additionValue = increment + addition
var decrement = 12
var moduleDecrement = 3
var remainder = decrement % moduleDecrement




document.write ('<h1>Value after variable declaration is: Undefine.</h1>')
document.write ('<h3>Initial Value is :' + " " + initialValue  +  "</h3>" )
document.write ('<h3> Value after increment is :' + " " + increment  +  "</h3>" )
document.write ('<h3> Value after addtion is :' + " " + additionValue  +  "</h3>" )
document.write ('<h3> Value after decrement is :' + " " + decrement  +  "</h3>" )
document.write ('<h3> The remainder is :' + " " + remainder  +  "</h3>" )


// Question 4

var ticketPrice = 600
var multiple = 5
var totalAmount = ticketPrice * multiple


document.write ('<h1>Total Cost To buy'+ " "  + multiple + " " + "tickets to a movie is "+ totalAmount + "PKR  </h1>" )



// Question 5

document.write ("<h3>Table of 4 </h3>")

for(var i=1;i<11;i++){
    var table=4;
    document.write(`<h3>${table} X ${i} = ${table*i}</h3>`)


 }

//  Question 7
document.write ('<h1>Shopping Cart</h1>')

let price1 = 650
let price2 = 100
let charges = 100
var totalAmount = price1*3 + price2*7 + charges

document.write ( '<h3> Price of 1 item is :'+ ' ' + price1  + '</h3>' )
document.write('<h3>Quantity of item 1 is 3</h3>')
document.write('<h3> Price of 2 item is :'+ ' ' + price2  + '</h3>')
document.write('<h3>Quantity of item 2 is 7</h3>')
document.write('<h3>Shipping Charges is' + " " + charges + '</h3> ')
document.write('<h3>Total amount is'+ " " + totalAmount + '</h3>')


// Question 8
document.write('<h1>Mark Sheet</h1>')
var totalMark = 980;
var obtained = 804;
var divideValue = obtained/totalMark;
var percentage = divideValue*100 


document.write ('<h3>Total marks :'  +" " + totalMark  + '</h3>')
document.write ('<h3>Marks Obtained :'  +" " + obtained  + '</h3>')
document.write ( '<h3>Percentage is' + " " + percentage +'</h3>')


// Question 9

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)


document.write('<h1> Currency in PKR </h1>')

var usDollar = 10
var saudiRiyal = 25
var currencyInPkr = usDollar*104.80 + 

document.write("<h3>"+  "</h3>")