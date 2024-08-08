let greet: Function;

// greet = 'hello'
greet = ()=>{
    console.log('hello');
    
}

const add = (a:number,b:number,c:number|string = 100)=>{
    console.log(a+b);
    console.log(c);
    // this function als returns a value it is called void
    
}

add(2,10,'hahaha')

const minus = (a:number,b:number):number=>{
    return a+b
}

let result = minus(10,5)
// result  = 'nbgvhjg'