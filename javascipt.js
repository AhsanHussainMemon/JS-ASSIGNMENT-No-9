// Assignment No 9

var array = [1,2,4,5,6,7,8,9,10];
var n = array.length + 1;
var  MissingNumber;

for (var i = 1; i<=n; i++){
    if (!array.includes(i)){
        MissingNumber = i;
        break;
    }
}

document.write("The Missing Number Is: " , MissingNumber);