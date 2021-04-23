document.addEventListener("DOMContentLoaded", function(e){
     hola();
    });


    function hola(){
        console.log("holajavascript.....");
    }
document.addEventListener('DOMContentLoaded',function(){
    CrearGaleria();
});


function CrearGaleria(){

    const galeria=document.querySelector('.galeria-imagenes');

    for(let i=1; i<=12; i++){
      const imagen=document.createElement('IMG');
      imagen.src=`build/img/thumb/${i}.webp`;
      imagen.dataset.imagenId=i;

      //Añadimos funcion mostrar imagen
      imagen.addEventListener('click',MostrarImagen);


      const lista=document.createElement('LI');
      lista.appendChild(imagen);

      galeria.appendChild(lista);
       
    }

}

function MostrarImagen(e){ 
    const id=parseInt(e.target.dataset.imagenId);
   

    //Generamos imagen grande
    const imagen=document.createElement('IMG');
          imagen.src=`build/img/grande/${id}.webp`;

    const overlay=document.createElement('DIV');
          overlay.appendChild(imagen);
          overlay.classList.add('overlay');

    overlay.addEventListener('click',function(){
        overlay.remove();
        body.classList.remove('scroll');
    });

   //Creamos boton para cerrar imagen
const boton=document.createElement('P');
      boton.textContent='X';
      boton.classList.add('btn-cerrar');

  //Agregamos el evento para cerrar la imagen
     boton.addEventListener('click',cerrarimagen);

     function cerrarimagen(){
         overlay.remove();
         body.classList.remove('scroll');
     }

 //Mostramos el boton en el overlay
     overlay.appendChild(boton);


      //Mostrar en pantalla
    const body=document.querySelector('body');
          body.appendChild(overlay);
          body.classList.add('scroll');
          



     

}