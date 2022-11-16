
let tecnicos = [];
let almacenados = [];
let btn_crear = document.getElementById('btn_crear');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');

//escuchar el evento del boton , se crea un objeto nuevo con el usuario
btn_crear.addEventListener('click', () => {

    recuperardatos('listaUsuarios');
    agregarusuario();


});

//recuperamos datos del local o array vacio y lo guardamos
function recuperardatos(msg) {
    let almacenados =  JSON.parse(localStorage.getItem(msg)) ;

};


//funcion que agrega al usuario validando si ya existe o no primero
function agregarusuario() {

    if (almacenados.includes(nombre.value)) {

        alert('El usario ya fue ingresado anteriormente');
        console.log(almacenados);


    } else {
debugger;
//si el usuario no existe, pushea el objeto nuevo en tecnicos y el mismo se guarda en local
        almacenados.push(new tecnico(nombre, apellido, email));
        localStorage.setItem('listaUsuarios', JSON.stringify(almacenados));
        alert('Bienvenido ' + nombre.value + ' proximamente recibira un correo con nuestra lista actualizada');
        mostrarusuarios();
    }
};



function validaradmin() {

    //guardar en un json al admin y llamarlo con fetch   

};



//funcion que muestra los usuarios guardados en el local
function mostrarusuarios() {


    let mensaje = 'Los tecnicos registrados son:';

    almacenados.forEach(tecnico => {
        mensaje += '\n' + tecnico.mostrar_descripcion();

    });

    alert(mensaje);
};


//agergar swetalerts y toastyfy para confirmaciones
//validar email valido , insertarlo en el html 





