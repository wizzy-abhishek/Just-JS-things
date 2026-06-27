const promise = new Promise(function(resolve, reject){
    let err = true;
    if(!err){
        resolve("Data")
    }else{
        reject("There is an error")
    }
})

promise.then(function(data){
    console.log(data);
}).catch(function(msg){
    console.log(msg);
})
