const promises = new Promise(function(resolve, reject){
    let err = false;
    if(!err){
        resolve("Data")
    }else{
        reject("There is an error")
    }
})

async function consumePromise() {
    try {
        const res = await promises
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

consumePromise()