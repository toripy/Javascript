//https://github.com/toripy/Javascript

// 1 kilometer = 1000meter
function kilometerToMeter(km) {
    if (km < 0) {
        return "Length can not be negative.";
    } else {
        var meter = km * 1000;
        return meter;
    }

}

//clock = 50$, phone = 100$. laptop = 500$
function budgeCalculator(clock, phone, laptop) {
    if (clock < 0 || phone < 0 || laptop < 0) {
        return 'please enter a valid number';
    } else {
        var total = (clock * 50) + (phone * 100) + (laptop * 500);
        return total;
    }

}

//first 10 days 100$, second 10 days 80$, up to 20 days 50$
function hotelCost(days) {
    if (days < 0) {
        return "please enter a valid number";
    } else if (days <= 10) {
        var total = days * 100;
        return total;
    } else if (days <= 20) {
        var first = 10 * 100;
        var last = (days - 10) * 80;
        var total = first + last;
        return total;
    } else {
        var first = 10 * 100;
        var second = 10 * 80;
        var last = (days - 20) * 50;
        var total = first + second + last;
        return total;
    }

}

//largest name of friend
function megaFriend(arr) {
    if (arr.length == 0) {
        return "your array is empty";
    } else {
        var largestname = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (largestname.length < arr[i].length) {
                largestname = arr[i];
            }
        }
        return largestname;
    }
}


console.log(budgeCalculator(10, 10, -1))