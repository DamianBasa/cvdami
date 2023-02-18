var sobreMenuMi=document.querySelectorAll(".claseMenuSobreMi");
for(let a=0; a<sobreMenuMi.length;a++){
    sobreMenuMi[a].addEventListener("click",function (){
        //detecto si el mouse paso por arriba o hizo click
        var titulo=document.querySelector("#tituloTexto")
        var texto=document.querySelector("#texto")
        if(a==0){
            titulo.innerHTML="ACERCA DE MI"
            //acá pongo que cambie el html con algunas opciones (texto) que hable sobre mi
            texto.innerHTML="<p>Soy técnico Electromecánico,pero toda la vida me he considerado emprendedor. Actualmente soy dueño de la gráfica DB Diseño y también me encuentro estudiando técnico en Marketing y Publicidad digital en la universidad Siglo XXI.</p>"
            texto.style.height="auto";
        }
        else if (a==1){
            titulo.innerHTML="Mi fecha de nacimiento"
            //pongo otro html mostrando mi edad
            texto.textContent="Nací un 11/08/1990, día sábado a las 3:00 de la madrugada aproximadamente"
            texto.style.height="auto";
            
            
        }
        else if (a==2){
            titulo.innerHTML="Mi EXPERIANCIA LABORAL"
            //mostrar mi experiancia laboral
            texto.innerHTML="<h2>Community Manager:</h2><h4>AVELLANEDA AUTOMOTORES - AVELLANEDA (SANTA FE) ENERO DE 2013 HASTA LA FECHA</h4><ul><li>Diseño las campañas de Marketing Digital,</li><li>me encargado de la creación de contenidos</li><li> y de hacer crecer la comunidad digital</li></ul><hr><h2>Copistería La Universidad:</h2><h4>COPISTERÍA LA UNIVERSIDAD - SAN FRANCISCO (CÓRDOBA) ENERO DE 2009 HASTA DICIEMBRE DE 2011</h4><ul><li>Atención al público</li><li>Manejo de máquinas fotocopiadoras</li><li>Diseño de flyer</li></ul><hr><h2>DB Diseño – Avellaneda:</h2><h4>ENERO DE 2018 HASTA LA FECHA</h4><ul><li>Actualmente tengo mi emprendimiento en gráfica digital</li><li>Realizó murales con vinilo, impresos o de corte</li><li>Diseño Gráfico y mantenimientos de RRSS</li></ul><hr>"
            texto.style.height="auto";
        }
        else{
            //no hacar ningun cambio
        }
    })
}

