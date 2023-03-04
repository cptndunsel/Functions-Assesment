function firstLetterName(name) {
    alert("The name " + name + " starts with the letter " + name[0]);
}

function divisibleByTwo(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function largestNum(arr) {
    Math.max = arr[0];

    for (i = 0; i < arr.length; i++) {
        if (Math.max < arr[i]) {
            Math.max = arr[i];
        }
    }
    return Math.max;
}