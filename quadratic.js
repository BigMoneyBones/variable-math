console.log("\n");

console.log("Quadratic formulaaaaaaaaa")

console.log("\n");

console.log("If a=1 b=3 and c=2")

console.log("\n");

console.log("using the quadratic equation we can calculate the roots")

console.log("\n");

// program to solve quadratic equation
let root1, root2;

// take input from the user
let a = 1;
let b = 3;
let c = 2;

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}

console.log("\n");