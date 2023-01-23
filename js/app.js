import { obtenerClientes, eliminarCliente } from './api.js';

(() => {
    //console.log('Soy una funcion autoinvocada!!');
    //let nombre = 'Lepito';

    //the tbody located in the html document is stored in this variable
    const listado = document.querySelector('#listado-clientes');

    //we are going to listening to the event DOMContentLoaded and then, call the function "llamar_cliente"
    //The DOMContentLoaded event will wait for all the page information to load.
    //once to all the information is loaded, the event will call the function mostrarClientes
    document.addEventListener('DOMContentLoaded', mostrarClientes);

    //* called to eliminar function 
    listado.addEventListener('click', confirmarEliminar);

    //La función será una promesa porque está declarado como promesa en la función obntenerClientes
    //Y como es una promesa, necesitamos el async await para controla la sincronía de esta función
    async function mostrarClientes(){
        const clientes = await obtenerClientes(); //Vamos a esperar el obtener cliente y retornará un array
        //El foreach recibe un callbak, y en este callback se recibirán los elementos que hay en el arreglo clientes que llamaremos
        //Clientes es el array, y la variable cliente es el objeto que está dentro del array
        clientes.forEach( (cliente)  => {
            //vamos a utilizar destructuring es una expresión de JavaScript que permite desempacar 
            //valores de arreglos o propiedades de objetos en distintas variables
            const {nombre, email, telefono, empresa, id} = cliente;
            //Vamos a construir lo q irá dentro del tbody, los tr td y sus variables
            const row = document.createElement('tr');
            row.innerHTML += `
            <td>
                <p>${nombre}</p>
            </td>
            <td>
                <p>${email}</p>
            </td>
            <td>
                <p>${telefono}</p>
            </td>
            <td>
                <p>${empresa}</p>
            </td>
            <td>
                <a>${id} Editar</a>
                <a href="#" data-cliente="${id}" class="eliminar">
                    Eliminar
                </a>
            </td>
        `;
        //Al elemento TBODY le agregamos todo el codigo que hemos creado para el row
        listado.appendChild(row);

        });
    };

    function confirmarEliminar(event){
        // console.log('Click en eliminar');
        // console.log(event.target.classList);
        // console.log(event.target.classList.contains('eliminar'));
        if(event.target.classList.contains('eliminar')){
            //El dataset del href de eliminar se llama data-cliente. Data es palabra obligatoria, no cambia, y cliente es el nombre del dataset
            //console.log(event.target.dataset.cliente);  //retorna un valor de tipo string
            const clienteId = parseInt(event.target.dataset.cliente); //Se transforma en numerico

            //Mensaje de alerta
            //Lo sacamos de la fuete sweet alert en la web, del que hacemos referencia en el archivo index.html //cdn.jsdelivr.net/npm/sweetalert2@11
            Swal.fire({
                title: 'Are you sure you want to delete?',
                text: "You will be not able to recovery this user's information",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  eliminarCliente(clienteId);
                }
              })
        }
    }


})(); //These last parentheses execute the function automatically
//In the html code, where we called the file js, we added the option type=module, this for 