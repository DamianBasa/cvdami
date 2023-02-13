var sobreMenuMi=document.querySelectorAll(".claseMenuSobreMi");
for(let a=0; a<sobreMenuMi.length;a++){
    sobreMenuMi[a].addEventListener("click",function (){
        //detecto si el mouse paso por arriba o hizo click
        if(a==0){
            document.getElementById("tituloTexto").innerHTML="ACERCA DE MI"
            //acá pongo que cambie el html con algunas opciones (texto) que hable sobre mi
            document.getElementById("texto").innerHTML="<p>Me encanta la tecnologia desde muy pequeño, por tal motivo fui a una escuela tecnica, a mis 13 años aproximadamente hice un curso de reparación de PC y me di cuenta que ,no solo me gustaba repararla, sino que tambien crear cosas con ella, fue cuando hice otro curso de diseño gráfico.En este ultimo curso me enseñaro a utilizar herramientas de Adobe, como por ejemplo Ai, Ps ,DW ,entre otros. Eso me llevo a una nueva etapa, empece con mi minimo conocimiento a verder tarjetas de cumpleaños y maquetacion de web. Me faltaba aprender a programar del lado del servidor, por lo que hice otro curso de programacion web en PHP.Para no extenderme mucho, emprendi en una gráfica <b>DB Diseño y me encuentro estudiando Marketing y Publicidad Digital</b> en la Universidad Siglo XXI</p>"
            //document.getElementById("sobreMiText").style.height="auto";
        }
        else if (a==1){
            document.getElementById("tituloTexto").innerHTML="Mi fecha de nacimiento"
            //pongo otro html mostrando mi edad
            document.getElementById("texto").textContent="11/08/1990"
            
            
        }
        else if (a==2){
            document.getElementById("tituloTexto").innerHTML="Mi experiencia laboral"
            //mostrar mi experiancia laboral
            document.getElementById("texto").innerHTML="no trabaje"
            //document.getElementById("sobreMiText").style.height="auto";
        }
        else{
            //no hacar ningun cambio
        }
    })
}

let opciones
/*function sobreMiMenu(opciones){
    //detecto si el mouse paso por arriba o hizo click
    if(opciones==0){
        document.getElementById("tituloTexto").innerHTML="Sobre Mi"
        //acá pongo que cambie el html con algunas opciones (texto) que hable sobre mi
        document.getElementById("texto").innerHTML="<p>Me encanta la tecnologia desde muy pequeño, por tal motivo fui a una escuela tecnica, a mis 13 años aproximadamente hice un curso de reparación de PC y me di cuenta que ,no solo me gustaba repararla, sino que tambien crear cosas con ella, fue cuando hice otro curso de diseño gráfico.En este ultimo curso me enseñaro a utilizar herramientas de Adobe, como por ejemplo Ai, Ps ,DW ,entre otros. Eso me llevo a una nueva etapa, empece con mi minimo conocimiento a verder tarjetas de cumpleaños y maquetacion de web. Me faltaba aprender a programar del lado del servidor, por lo que hice otro curso de programacion web en PHP.Para no extenderme mucho, emprendi en una gráfica <b>DB Diseño y me encuentro estudiando Marketing y Publicidad Digital</b> en la Universidad Siglo XXI</p>"
        //document.getElementById("sobreMiText").style.height="auto";
    }
    else if (opciones==1){
        document.getElementById("tituloTexto").innerHTML="Mi fecha de nacimiento"
        //pongo otro html mostrando mi edad
        document.getElementById("texto").textContent="11/08/1990"
        
        
    }
    else if (opciones==2){
        document.getElementById("tituloTexto").innerHTML="Mi experiencia laboral"
        //mostrar mi experiancia laboral
        document.getElementById("texto").innerHTML="no trabaje"
        //document.getElementById("sobreMiText").style.height="auto";
    }
    else{
        //no hacar ningun cambio
    }
}

//movimientos a los onjetos con esta funcion que escucha
/*window.addEventListener('scroll',function(){

 let animacionUno=document.getElementById("tarjetaUno");
 let animacionDos=document.getElementById("tarjetaDos");
 let animacionTres=document.getElementById("tarjetaTres");
 let posisionDelObjeto1=animacionUno.getBoundingClientRect().top;
 console.log(posisionDelObjeto1);
 //tomo el tamaño de la pantalla
 let tamañoDePantalla = window.innerHeight/2;

 if(posisionDelObjeto1<tamañoDePantalla){
        animacionUno.style.animation="tarjetasAnimacion 5s"    
        animacionDos.style.animation='tarjetasAnimacionDos 5s'

 }

})*/