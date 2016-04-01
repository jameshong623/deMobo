var checkNineDigits = function(string) {
  var digits = string.length;
  if (digits >= 10) {
    return false
  }  
  for (var i = 1; i < digits + 1; i++) {
    if (!(i in string)) {
        return false
    }
    else {
        return true
    }
  }
};

var givesProduct = function(a, b) {
    var numbers = a + b + a*b;
    if (numbers.length != 9) {
    return false;
    }
    else {
        return checkNineDigits(numbers);
    }
}

for (var a = 0; a < 100000; a++) {
    for (var b = a; b < 100000; b++) {
    if (numbers.length > 9) {
        break;
    }
    else if (givesProduct(a, b)) {
        console.log(a + " x " + b +" = " + a*b )
    }

    }
}


