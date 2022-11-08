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
//si agrego esta linea que esta debajo se me rompe el codigo, no se porque
//let data = JSON.parse(localStorage.getItem('listaUsuarios'));
let almacenados = new Array ();
let btn_crear = document.getElementById('btn_crear');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');

//escuchar el evento del boton , se crea un objeto nuevo con el usuario
btn_crear.addEventListener('click', ()=>{

   
agregarusuario();


} )


function agregarusuario(){

if (existeusuario){
    
    alert('El usario ya fue ingresado anteriormente');
    
}else{

    almacenados.push(new tecnico(nombre,apellido,email));
    console.log(almacenados);
    //si agrego estas lineas que estan debajo tambien se me rompe el codigo
    //data=[...data,...almacenados] 
    //localStorage.setItem('listaUsuarios', JSON.stringify(data));
    //data = JSON.parse(localStorage.getItem('listaUsuarios'));
    alert('Bienvenido ' + nombre.value + ' proximamente recibira un correo con nuestra lista actualizada');
    mostrarusuarios();
    
}

}

// funcion que valida si el usuario ya fue ingresado anteriormente
function existeusuario(){

    let encontrado = false;
    let nombrebusq = nombre.value;
    let i = 0;
   
    while ( !encontrado && i != almacenados.length ){
  
        if (almacenados[i].nombre === nombrebusq) {
  
            encontrado = true;
      
          }
      
          i++;
          return encontrado;
      
    }}


function validaradmin(){

   

}

function mostrarusuarios(){

    
    let mensaje = 'Los tecnicos registrados son:';

     almacenados.forEach(tecnico => {
        mensaje += '\n' + tecnico.mostrar_descripcion();
        
     });

    alert(mensaje);
}