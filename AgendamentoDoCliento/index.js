//Buscar elementos
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const horario = document.querySelector('#horario');
const msg = document.querySelector('.msg');
const msg_email = document.querySelector('.msg_email');
const clientes = document.querySelector('#users');
//Método para receber o envio do formulario
myForm.addEventListener('submit',cadCliente);
//Fução para registrar o cadastro
function cadCliente(e){
    e.preventDefault();

    //validando preenchimento do usuário

    if(nameInput === '' || emailInput.value === '' || horario.value === ''){
        const msgError = document.createElement('p');
        msgError.classList.add('error');
        msgError.innerHTML = 'Por favor insira as informações completas';
        msg.appendChild(msgError);
        
        setTimeout(() => msg .remove (),5000 );
    }
    else{
            //Criar elemento <li>
    const li = document.createElement('li');
    //Inserindo contéudo no elemento li
    li.appendChild(
       document.createTextNode(`${nameInput.value} : ${emailInput.value} : ${horario.value}`)
    );
    //associar li a lista de clientes
    clientes.appendChild(li);

    //apagar informaçoes do formulario
    nameInput.value = '';
    emailInput.value = '';
    horario.getElementsByTagName('option')[0].selected = 'selected';
    nameInput.focus();
}

    }
    
