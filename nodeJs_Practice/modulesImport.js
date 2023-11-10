

function add(a,b){
return a+b;
}


subtract = function (a,b){
    return a-b;
}

module.exports = add; 
// module.exports keyword is used when we declare another function vlaues or something in another file then to make that work we use this export function


//now for example we have now two function like add and 2nd one is subtract now when we use same module.export = subtract then (module.export =  add) function will get vanished so to overcome this problem we need to make an module.export object in which we will declare bith the function and run accordingly
module.exports={
    add,
    subtract
}

//another way aslo there to export 

// exports.add1 = (a,b) => a+b