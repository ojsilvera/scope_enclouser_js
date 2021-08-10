const person = () => {
    // Se declara la variable con let justo en la raíz de la función para que pueda ser
    // vista en todos los niveles interiores.
    let nombre = "sin nombre";

    // Se retorna un "objeto" con 2 "metodos" (funciones)
    return {

        // método 1, que no recibe parámetros y sólo devuelve la variable nombre.
        obtenerNombre: () => {
            return nombre;
        },

        // método 2, que recibe un parámetro y lo asigna a la propiedad nombre definida
        // en la raíz de este objeto.
        definirNombre: (nuevoNombre) => {
            nombre = nuevoNombre;
        }
    };
};
// Define la constante mipersona y le asigna el objeto (la función) persona,
// recibiendo asi los 2 métodos (obtenerNombre y definirNombre).
const mipersona = person();

// Te dará el valor por omisión que en este caso sería sin nombre.
console.log(mipersona.obtenerNombre());

// Asignas un nuevo nombre por medio del método definirNombre().
mipersona.definirNombre('Jonny');

// Te dará el nuevo valor que asignaste la línea anterior.
console.log(mipersona.obtenerNombre());