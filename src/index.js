function add(n1, n2, show) {
    if (show) {
        console.log("Pass");
    }
    else {
        return n1 + n2;
    }
}
var res = true;
var result = add(45, 4.6, res);
console.log(result);
