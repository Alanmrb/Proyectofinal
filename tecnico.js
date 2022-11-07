class tecnico {

    
        constructor (nombre,apellido,mail){
    
            this.nombre = nombre.value;
            this.apellido = apellido.value;
            this.mail = mail.value;
            this.id = 1;
        }
    
    
       
    
        mostrar_descripcion(){
    
            return (this.id + " - " +this.nombre + " - " + this.apellido + " - " + this.mail) ;
    
    
    
        }
    
      
       
        set_id(nuevo_id){
    
    
            this.id = nuevo_id ;
        }
    
    
    }