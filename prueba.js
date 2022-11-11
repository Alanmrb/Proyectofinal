
let tecnicos = [];
let almacenados = new Array ();
let btn_crear = document.getElementById('btn_crear');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');

//recuperamos datos del local o array vacio y lo guardamos
convertirdatos(recuperardatos('listaUsuarios'));


//escuchar el evento del boton , se crea un objeto nuevo con el usuario
btn_crear.addEventListener('click', ()=>{

   
agregarusuario();


} );

//funcion que agrega al usuario validando si ya existe o no primero
function agregarusuario(){

if (existeusuario){
    
    alert('El usario ya fue ingresado anteriormente');
    
}else{
//si el usuario no existe, pushea el objeto nuevo en tecnicos y el mismo se guarda en local
    tecnicos.push(new tecnico(nombre,apellido,email));
    localStorage.setItem('listaUsuarios', JSON.stringify(tecnicos));
    alert('Bienvenido ' + nombre.value + ' proximamente recibira un correo con nuestra lista actualizada');
    mostrarusuarios();
    
}};

// funcion que valida si el usuario ya fue ingresado anteriormente
function existeusuario(){

    let encontrado = false;
    let nombrebusq = nombre.value;
    let i = 0;
   
    while ( !encontrado && i != almacenados.length ){
  
        if (almacenados[i].nombre == nombrebusq) {
  
            encontrado = true ;
            console.log('hola'); 
            return encontrado;
           

          }
          console.log('del while sale');
          i++;
          return encontrado;
      
    }};


function validaradmin(){

//guardar en un json al admin y llamarlo con fetch   

};



//funcion que muestra los usuarios guardados en el local
function mostrarusuarios(){

    
    let mensaje = 'Los tecnicos registrados son:';

     tecnicos.forEach(tecnico => {
        mensaje += '\n' + tecnico.mostrar_descripcion();
        
     });

    alert(mensaje);
};

function recuperardatos (msg){
         return JSON.parse(localStorage.getItem(msg)) || [];
};
function convertirdatos(){
        tecnicos.forEach(tecnico =>{
            almacenados.push(new tecnico(nombre,apellido,email));
        })
    };

//agergar swetalerts y toastyfy para confirmaciones
//validar email valido , insertarlo en el html 
