


//FIRST PROBLEM SOLVED KILOMETER TO METER...

function kilometerToMeter(km) {
    var meter = km * 1000 ;          //[ 1 k.m. = 1000 m.]
    if (km < 0) {
        return "Distance can't be negative.";
    }
    return meter;
}
// var result = kilometerToMeter(-15);
// console.log(result);





//SECOND PROBLEM SOLVED ...

function budgetCalculator(perWatches, perPhones, perLaptops) {
    
    watchCost  = perWatches* 50;             //per watch price
    phoneCost  = perPhones * 100;            //per phone price            
    laptopCost = perLaptops * 500;          //per laptop price

                                                     //if input is a decimal number...
    if ( (perWatches % 1 != 0) || (perPhones % 1 != 0) || (perLaptops % 1 != 0) ) {
        return "Please, put an integer number."
    }                                                //if input is a negative number...
    else if ( (watchCost < 0) || (phoneCost < 0) || (laptopCost < 0) ) {
        return "Something went wrong! Please, check your value!"
    }
    else {
        totalCost = watchCost + phoneCost + laptopCost;
    }
    return totalCost;
}
// var result = budgetCalculator(5,3.4, -2);
// console.log(result)






//THIRD PROBLEM SOLVED ...

function hotelCost(spendDays) {
    var cost = 0;
    if (spendDays < 0) {                      //if input is a negative number...
        return "Days can't be negative."
    }
    else if (spendDays % 1 !=0) {             //if input is a decimal number...
        return "Please, check your value!"
    }
    else if (spendDays <= 10) {               // if you spend 1 to 10 days...
        cost = spendDays * 100;
    }
    else if (spendDays <= 20) {               // if you spend 11 to 20 days...
        firstTenDays = 10 * 100;
        remaining = spendDays - 10;
        secondTenDays = remaining * 80;
        cost = firstTenDays + secondTenDays;
    }
    else {                                    // if you spend 21 to infinity days...
        firstTenDays = 10 * 100;
        secondTenDays = 10 * 80;
        remaining = spendDays - 20;
        lastAllDays = remaining * 50;
        cost = firstTenDays + secondTenDays + lastAllDays;
    }
    return cost;
}
// var totalCost = hotelCost(-45);
// console.log(totalCost);





//LAST PROBLEM SOLVED ...

function megaFriend(friendName) {
    var start = 0;
    for (var i = 0; i < friendName.length; i++) {

        if (friendName[i].length > start) {
            start = friendName[i].length ;
            largestName = friendName[i] ;
        }
    }
    return largestName;
}
// var result = megaFriend(['Shorif', 'Sami', 'Sakib', 'Shahin', 'Bhuiyan']);
// console.log(result);