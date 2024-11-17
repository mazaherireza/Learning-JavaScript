// Use underscore (_) as the numeric separators to create a visual separation between groups of digits.

const x = 8_000;
console.log(x);
console.log(parseInt(x)); // 8000
console.log(Number(x));

const y = "8_000_000";
console.log(parseInt(y)); // 8
console.log(Number(y)); // NaN
