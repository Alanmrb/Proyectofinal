
let almacenados = [];
let tecnicos = [];
let btn_crear = document.getElementById('btn_crear');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');

//funcion que agrega al usuario validando si ya existe o no primero
function agregarusuario(){

existeusuario();   
if (existeusuario){
    
    alert('El usario ya fue ingresado anteriormente');
    console.log(tecnicos);
    

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
    let i = 0;
    let nombre2 = nombre.value;
    console.log('antes del while');

    while ( !encontrado && i != tecnicos.length ){
//consulta : 
//tengo que parsear de vuelta local storage para que busque dentro de esos nombres? o como busco ?
//porque si busco dentro del arreglo nuevo que estoy creando con el nombre, siempre va a devolver true

        if (tecnicos[i].nombre == nombre2 ) {
  
            encontrado = true;
            console.log('hola'); 
            return encontrado;
           

          }
          
          i++;
        }
        console.log('del while sale');
          return encontrado;
      
};


function validaradmin(){

//guardar en un json al admin y llamarlo con fetch   

};



//funcion que muestra los usuarios guardados en el local
function mostrarusuarios(){

    
    let mensaje = 'Los tecnicos registrados son:';

     almacenados.forEach(tecnico => {
        mensaje += '\n' + tecnico.mostrar_descripcion();
        
     });

    alert(mensaje);
};

function recuperardatos(msg){
         console.log('recuperadellocal');
         return JSON.parse(localStorage.getItem(msg)) || [];
        
};
function convertirdatos(almacenados){
        console.log('conviertedatos');
        almacenados.forEach(element => {
            tecnicos.push(new tecnico(nombre,apellido,email));
        })
    };

//agergar swetalerts y toastyfy para confirmaciones
//validar email valido , insertarlo en el html 


//escuchar el evento del boton , se crea un objeto nuevo con el usuario
btn_crear.addEventListener('click', ()=>{
    
    convertirdatos(recuperardatos('listaUsuarios')); 
    agregarusuario();
    
    
    } );

 //recuperamos datos del local o array vacio y lo guardamos
  