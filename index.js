function receivesAFunction(callback){
    return callback();
} 


function returnsANamedFunction(){
    let name="seth"
    return function howdy(){
        console.log(`hello my name is ${seth}`);
    }
}

function returnsAnAnonymousFunction(){
    let name="seth"
    return function(){
        console.log(`hello my name is ${name}`);
    }
}