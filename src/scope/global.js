//scope global, accesible y modificable desde cualquier parte
var hello = 'hellouuuu';
//scope global, accesible desde cualquier parte, pero no modificables
let world = 'hello world';
const helloWorld = 'hello world const'

const anotherFunction = (params) => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);

};

anotherFunction();