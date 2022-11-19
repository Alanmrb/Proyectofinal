const loquehayenlocal = 'listaUsuarios';
let almacenados = JSON.parse(localStorage.getItem(loquehayenlocal)) || [] ;
let emailstecnicos = [];
let tecnicos = [] ; 
let btn_crear = document.getElementById('btn_crear');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');
let btnadmin = document.getElementById('btnadmin');

btnadmin.addEventListener('click', () => {

    mostrarusuarios(almacenados);
    
});



//escuchar el evento del boton , se crea un objeto nuevo con el usuario
btn_crear.addEventListener('click', () => {

   
    agregarusuario();
    


});

//recuperamos datos del local o array vacio y lo guardamos
function recuperardatos() {
    let almacenados = JSON.parse(localStorage.getItem(loquehayenlocal)) || [] ;
    console.log(almacenados);
};


//funcion que agrega al usuario validando si ya existe o no primero
function agregarusuario() {
        
    if (validacion()) {
        Toastify({
            text: "El usuario ya fue ingreso anteriormente",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();

    } else {
//si el usuario no existe, pushea el objeto nuevo en tecnicos y el mismo se guarda en local
        tecnicos.push(new tecnico(getLastId(almacenados),nombre, apellido, email));
        localStorage.setItem('listaUsuarios', JSON.stringify(tecnicos));
        Toastify({
            text: "Bienvenido " + nombre.value + " proximamente recibira un correo con nuestra lista actualizada",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();

    }
};

function validacion(){
    recuperardatos(almacenados);
    let emailstecnicos = tecnicos.map((tecnico) => {return (tecnico.email)});
    let emailstecnicos2 = almacenados.map((tecnico) => {return (tecnico.email)});
    console.log(emailstecnicos,emailstecnicos2); 
    if ((emailstecnicos.includes(email.value))||(emailstecnicos2.includes(email.value))){
     return true;

   }else{
     return false;
   }

};


//funcion que muestra los usuarios guardados en el local
function mostrarusuarios(almacenados) {
//guardar en un json al admin y llamarlo con fetch

    let mensaje = 'Los mails registrados son:';

    almacenados.forEach(tecnico => {
        mensaje += '\n' + tecnico.email;

    });

    Swal.fire(mensaje);
    
};


//Funcion que busca el ultimo id y retorna un nuevo id +1
function getLastId(almacenados) {
    let maxValue = 0;
    almacenados.map((tecnico) => tecnico.id) .forEach((id) => {
        if (id > maxValue) {
          maxValue = id;
        }
      });
    return maxValue + 1;
  }

//agergar swetalerts y toastyfy para confirmaciones
//validar email valido , insertarlo en el html 

