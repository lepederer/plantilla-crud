export function mostrarAlerta(mensaje){
    //the element form-text can be captured with its class
    const alerta = document.querySelector('.form-text');
    //we add the error and text-center class contained in the styles.css file
    alerta.classList.add('error', 'text-center', 'mt-5');

    alerta.innerHTML = `
    <span>${mensaje} </span>
    `;
     

}