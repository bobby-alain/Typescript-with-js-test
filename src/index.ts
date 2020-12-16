function add(n1: number, n2: number, show: boolean) {
  if (show) {
    console.log("Pass");
  }
  return n1 + n2;
}

const res = true;
const result = add(45, 4.6, res);

console.log(result);
