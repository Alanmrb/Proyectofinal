const loquehayenlocal = 'listaUsuarios';
let almacenados = JSON.parse(localStorage.getItem(loquehayenlocal)) || [] ;
let emailstecnicos = [];
let tecnicos = [] ; 
let almacenadosnuevo ; 
let btn_crear = document.getElementById('btn_crear');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');
let btnadmin = document.getElementById('btnadmin');
let usuarios;

//traer con fetch el admin y guardarlo en usuarios para validar al mostrar usuarios
fetch('admin.json')
        .then((res)=> res.json())
        .then(data => {usuarios = data
        console.log(usuarios)})



btnadmin.addEventListener('click', () => {

    mostrarusuarios(almacenados,tecnicos);
    
});



//escuchar el evento del boton , se crea un objeto nuevo con el usuario
btn_crear.addEventListener('click', () => {

   
    agregarusuario();
    


});

//recuperamos datos del local o array vacio y lo guardamos
function recuperardatos() {
    let almacenados = JSON.parse(localStorage.getItem(loquehayenlocal)) ;
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
        
        almacenados.push(new tecnico(getLastId(almacenados),nombre, apellido, email));
        localStorage.setItem('listaUsuarios', JSON.stringify(almacenados));
        Toastify({
            text: "Bienvenido " + nombre.value + " proximamente recibira un correo con nuestra lista actualizada",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();

    }
};

//funcion que valida si el mail ingresado esta o no dentro de lo recuperado del local
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


//funcion que muestra unicamente al admin los usuarios guardados en el local
//si no es admin devuelve un error
function mostrarusuarios(almacenados) {

let recuperadode = usuarios.map((Element) => {return (Element.nombre)});


Swal.fire({
        title: "Ingrese Su Pass",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Cancelar",
        inputValidator: passingresado => {
            // Si el valor es válido, debes regresar undefined. Si no, una cadena
            if (!passingresado) {
                return "por favor ingrese su pass";
            } else {
                if (passingresado == recuperadode ) {
                    

                    let mensaje = 'Los mails registrados son:';
                
                    almacenados.forEach(tecnico => {
                        mensaje += '\n' + tecnico.nombre + tecnico.email;
                     
                    })
                    Swal.fire(mensaje);
            }else{
                Swal.fire('Pass Invalido')
            }
        }
    }
})
}

       

//Funcion que busca el ultimo id y retorna un nuevo id +1
function getLastId() {
    recuperardatos(almacenados)
    let maxValue = 0;
    almacenados.map((tecnico) => tecnico.id) .forEach((id) => {
        if (id > maxValue) {
          maxValue = id;
        }
      });
    return maxValue + 1;
  }

