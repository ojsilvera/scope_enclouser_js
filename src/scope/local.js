const helloWorld = () => {
    const hello = 'hola desde la funcion';
    console.log(hello);
}

helloWorld();
console.log(hello);

var scope = 'global';

const scopeFunction = () => {

    var scope = 'local'

    function func() {
        return scope;
    }

    console.log(func());
}

scopeFunction();