function outer() {
    let counter = 0;
    function innerCounter() {
        counter++;
        console.log(counter);
        
    }
    return innerCounter;
}
const fn = outer();
fn()
fn()

//In Closure the inner function has access to the outer variable even after the outer function has finished execution.

