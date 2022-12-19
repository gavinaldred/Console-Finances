// You have been given a dataset composed of arrays with two fields, Date and Profit/Losses.

// Your task is to write JavaScript code that analyzes the records to calculate each of the following:


// 1. The total number for of months included in the dataset. (done)
// work out how many months there are in the data set in total - count the months in first position of each array (is this the length of the array)


// Your task is to write JavaScript code that analyzes the records to calculate each of the following:

// 2. The net total amount of Profit/Losses over the entire period.(done)
// work out the net total of all the numeric values and print the total

// 3. The average of the changes in Profit/Losses over the entire period.
// total of the monthly changes / divided by the #months (-1) // (Total/Number of months)

// You will need to track what the total change in profits are from month to month and then find the average.
//split the array

// 4. The greatest increase in profits (date and amount) over the entire period.
//Print the month that had the largest increase in profit
//how do I do this!!

// 5. The greatest decrease in losses (date and amount) over the entire period.
//Print the month that had the largest decrease in profit
//how do I do this!!

// 6.When you open your code in the browser your resulting analysis should look similar to the following:
// We need to console log at various points with these values


// Financial Analysis
// ----------------------------
// Total Months: 25  //length of the array or number of months value
// Total: $2561231  // add all the number values by accessing second value in array using for loop
// Average  Change: $-2315.12
// Greatest Increase in Profits: Feb-2012 ($1926159)
// Greatest Decrease in Profits: Sep-2013 ($-2196167)
// Your final code should print the analysis to the console.



var finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099]
];




// This creates a way to format a number as currency
let dollarUSLocale = Intl.NumberFormat("en-US", {
    style: "currency", //makes number it currency
    currency: "USD", //$ sign
    useGrouping: false, // removes commas

});


// 1. The total number of months included in the dataset. (done)
const numberOfMonths = finances.length
console.log(numberOfMonths) // this prints the number of months 86

// 2. The net total amount of Profit/Losses over the entire period.(done)
let sumOfProfits = 0;

for (let i = 0; i < finances.length; i++) { //this is the loop to work out sumOfProfits
    sumOfProfits += finances[i][1];
}
console.log(dollarUSLocale.format(sumOfProfits)) // this prints the total p&L


// this splits the original array in to two new arrays, dates and numbers

let datesOnly = [];
let numbersOnly = [];
for (let i = 0; i < finances.length - 1; i++) {
    numbersOnly[i] = finances[i + 1][1] - finances[i][1];
    datesOnly[i] = finances[i + 1][0];
}


console.log(datesOnly); // all dates from month 2 [1] onwards e.g months with a difference
console.log(numbersOnly); // all differences from m2 - m1 


// 3. The average of the changes in Profit/Losses over the entire period.
// Getting sum of numbers

// loop to work out the sum of an arrray // this works out the sum of difference, e.g. the sum of the numbersOnly array

let sumOfNumbersOnly = 0;

for (let i = 0; i < numbersOnly.length; i++) {
    sumOfNumbersOnly += numbersOnly[i]
}


console.log(sumOfNumbersOnly); // Prints: value of the sum of all the monthly value changes
console.log(sumOfNumbersOnly / datesOnly.length) // prints the average change, sum of changes / number of months where there is a change, e.g 85


// 4. The greatest increase in profits (date and amount) over the entire period.
// we need to find the highest value in numbersOnly array and the index of that number
let greatestValue
let smallestValue


for (let i = 0; i < numbersOnly.length; i++) {
    if (i === 0) {
        greatestValue = numbersOnly[i]
        smallestValue = numbersOnly[i]

    } else {
        if (numbersOnly[i] > greatestValue) {
            greatestValue = numbersOnly[i]
        }

        if (numbersOnly[i] < smallestValue) {
            smallestValue = numbersOnly[i]
        }
    }
}

console.log(greatestValue) // biggest increase






// 5. The greatest decrease in losses (date and amount) over the entire period.
// we need to find the lowest value in numbersOnly array and the index of that number
console.log(smallestValue) // biggest loss