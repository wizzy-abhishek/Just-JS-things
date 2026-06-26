new Promise(function(resolve, reject){
    console.log("Hello, thanks for viewing my code");
    const user = {
        "username": "Abhishek",
        "password": "Javascript"
    } 
    resolve(user)
})
.then(function(data){
    return data.username
})
.then(function(data){
    console.log(data);
})
.finally(console.log("This will always execute")) // Note: This specific line will run sync as I have directly used log init, if I would provide a callback/function it would behave normal 
