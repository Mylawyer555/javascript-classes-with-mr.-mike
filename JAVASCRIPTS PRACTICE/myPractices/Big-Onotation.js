// O(n) linear time operation of algorithm printing 0 to n-1

function exampleLinear (n){
    for (let i = 0; i < n; i++){
        //console.log(i);
    }
}
exampleLinear(90);


// O(n2) quadratic time

function exampleQuadratic(n) {
    for (let i = 1; i < n; i++){
        console.log(i);

        for (let j = i; j < n; j++){
            console.log(j);
        }
    }
}
exampleQuadratic(10);



function exampleLogarithm(n) {
    for (let i = 2; i <= n; i = i * 2){
        console.log(i);
    }
}
exampleLogarithm(10);
