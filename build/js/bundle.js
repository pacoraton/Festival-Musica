document.addEventListener("DOMContentLoaded", function(){
        scrollNav();

        navegacionFija();
    });


    function navegacionFija(){
        const barra=document.querySelector('header');

        //Registrar el Intersection Observer

        const observer=new IntersectionObserver(function(entries){
            if(entries[0].isIntersecting){
                barra.classList.remove('fijo');
            }else{
                barra.classList.add('fijo');
            }
        });


       //Elemento a observar
       observer.observe( document.querySelector('.video'));     



    }

//Dirigirnos a alguna parte de la pagina 
function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');
          
          enlaces.forEach(function(enlace){
            enlace.addEventListener('click',function(e){
                e.preventDefault();

                const seccion =document.querySelector(e.target.attributes.href.value);

                seccion.scrollIntoView({
                    behavior:'smooth'
                });
            });
          })
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