//Vamos a crear una función que permita validar los datos ingresados 
// necesitamos exportarla para que la podamos utilizar

export function validatorObject(objetoCliente){
    //console.log('Hola Loco Que tal');
    return Object.values(objetoCliente).every(values => values !== '');

}

//* The every return true or false
//* true if the values is not empty
//* False if the values that come are empty