//* Tenemos el endpoint en puerto 3000, que es donde se ejecuta el json-server
//* we have the endpoint on port 3000, that is where the json is executed
const URL ="http://localhost:3000/clientes";

//* Get - Obtener los clientes - Y la estamos exportando 
export const obtenerClientes = async () => {
    
    try {
        const resultado = await fetch(URL);
        const clientes = await resultado.json();
        return clientes;

    } catch (error) {
        throw error;
    }
};

//* POST crear un cliente que tiene que se ser un objeto
//* variable cliente por lo general va a ser un objeto
//var client generally is going to be a object
//as we are using asunc await, we will use try catch
// i don't need a variable to save the function fetch and it's call directly to fetch
export const nuevoCliente = async (cliente) => {
    try {
        await fetch(URL, { //* the function fetch accept like a second parameter a object with determinated configuration 
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        }); 
        
        window.location.href='index.html';

    } catch (error) {
        throw error;
    }
    //console.log('Llamará a la página!');

};

export const eliminarCliente = async (id) => {
    try {
        // http://localhost/3000/clientes/1 2 (id)
        await fetch(`${URL}/${id}`,{
            method: 'DELETE'
        });
    } catch (error) {
        throw error;
    }
};