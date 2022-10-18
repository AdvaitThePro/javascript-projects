let firstnum = parseInt(prompt("What is your first number?"));
let lastnum = parseInt(prompt("What is your last number?"));

let answer = (((firstnum + lastnum) * (lastnum - firstnum + 1) / 2) / 2);
console.log(answer);