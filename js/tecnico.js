class tecnico {

    
        constructor ( id,nombre,apellido,email){
    
            this.nombre = nombre.value;
            this.apellido = apellido.value;
            this.email = email.value;
            this.id = id;
        };
    
    
       
    
        mostrar_descripcion(){
    
            return (this.id + " - " +this.nombre + " - " + this.apellido + " - " + this.email) ;
    
    
    
        };
    
      
       
        set_id(nuevo_id){
    
    
            this.id = nuevo_id ;
        }
    
    
    };