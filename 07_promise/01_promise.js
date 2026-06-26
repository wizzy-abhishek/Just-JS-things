const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Will this execute");
        console.log("This executes");
        resolve() // This is required to execute the then
    }, 4000)
})

console.log("This will execute first")

promise.then(function(){
    console.log("This will always execute after the promise")
})