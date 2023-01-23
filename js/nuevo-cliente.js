import { nuevoCliente } from "./api.js";
import { mostrarAlerta } from "./utils/show-alert.js";
import { validatorObject } from "./utils/validator-object.js";

//*Función autoinvocada
(()=>{
    const formulario = document.querySelector('#formulario');
    //Capturamos el evento submit del formulario 
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(event){
        
        //Se evita que el formulario ejecute su método submit por defecto
        event.preventDefault(); 
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
        
        //Vamos a construir el objeto creadas en la función anterior
        //Estamos trabajando con ECMA - ES6 2015 por lo tanto el siguiente código se puede reducir a
        // const cliente = {
        //     nombre: nombre,
        //     email: email,
        //     telefono: telefono,
        //     empresa: empresa
        // } 
        //Esto.
        //Si el nombre del ID de los elementos es igual a las variables que usamos para almacenar el valor 
        // se puede reducir a lo siguiente:
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        } ;
        

        if(!validatorObject(cliente)){
            //console.log('The fields are requiered!');
            mostrarAlerta('The fields are requiered!');
            return; //if fields come empty, with this instruction it's not executed anything
        }
        nuevoCliente(cliente);
    }

    
})();