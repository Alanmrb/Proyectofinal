  /*while (flag){

    let mensaje = "Estas Registrado? Indique la opcion correcta: ";
    mensaje +=    "\n1) Si, estoy registrado ";
    mensaje +=    "\n2) No! deseo registrarme ";
    mensaje +=    "\n3) Soy el administrador y quiero ver todos los usuarios ingresados " ;
    mensaje +=    "\n4) Salir " ;
   

    let resp = prompt(mensaje) ;

    switch (resp){

        case "1" : 
                validarusuario();
                break;
        case "2" :          
                crearusuario();
                break;
        case "3" :
                if(existen_tecnicos){ 
                    mostrarusuarios()};
                break;
        case "4" : 
                alert("Gracias por utilizar nuestra pagina :) ");
                flag=false;
                break;        
        case null : 
                alert("Gracias por utilizar nuestra pagina :) ");
                flag=false;
                break;
        default : 
                alert ("No ingreso una opcion valida") ;                     


    }

}
*/


let almacenados = new Array ();
localStorage.setItem("listaUsuarios",almacenados);
let btn_crear = document.getElementById('btn_crear');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');

//escuchar el evento del boton , se crea un objeto nuevo con el usuario
btn_crear.addEventListener('click', ()=>{

agregarusuario();


} )


function agregarusuario(){

if (validarusuario){
    almacenados.push(new tecnico(nombre,apellido,email));
   console.log(almacenados);
    alert('Bienvenido ' + nombre.value + ' proximamente recibira un correo con nuestra lista actualizada');
}else{

    alert('El usario ya fue ingresado anteriormente')
}

}

// funcion que valida si el usuario ya fue ingresado anteriormente
function validarusuario(){

    let encontrado = false
    let i = 0;
   
    while (!encontrado && i != almacenados.length ){
  
      if (almacenados[i].nombre === nombre) {
  
        return true;
  
      }
  
      i++;
      encontrado = false;

    }
}


function validaradmin(){

   

}

function mostrarusuarios(){

    
    let mensaje = 'Los tecnicos registrados son:';

     arreglo_tecnico.forEach(tecnico => {
        mensaje += '\n' + tecnico.mostrar_descripcion();
        
     });

    alert(mensaje);
}