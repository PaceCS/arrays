
// The function min will take in an array and log its minimum value.
function min(inArray) {

}

// The function max will take in an array and log its maximum value.
function max(inArray) {

}

// The function sum will take in an array and log the sum of the array.
function sum(inArray) {

}

// The function average will take in an array and log the average of the values.
function average(inArray) {
    
}

















// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
let out = [];
console.log = function log(d) {
    out.push(d);
};
printme('\nTesting...');
const a = [[1, 3, 5], [10, 20, 30], Array.from(Array(90).keys())];
const result = [[1, 5, 9, 3], [10, 30, 60, 20], [0, 89, 4005, 44.5]];
const log = [true, true, true, true];
for (let i = 0; i < a.length; i += 1) {
    out = [];
    [min, max, sum, average].forEach((j) => {
        j(a[i]);
    });
    log[0] = log[0] && (out[0] == `The minimum value is ${result[i][0]}.`);
    log[1] = log[1] && (out[1] == `The maximum value is ${result[i][1]}.`);
    log[2] = log[2] && (out[2] == `The sum of the array is ${result[i][2]}.`);
    log[3] = log[3] && (out[3] == `The average of the array is ${result[i][3]}.`);
}
printme(`\t did you properly implement min?\t ${log[0]} `);
printme(`\t did you properly implement max?\t ${log[1]}`);
printme(`\t did you properly implement sum?\t ${log[2]}`);
printme(`\t did you properly implement average?\t ${log[3]}`);
