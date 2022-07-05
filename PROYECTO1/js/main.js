$(document).ready(function(){ // Aca lo que hacemos es que cuando tenemos el contenido y lo subimos nuestro menu se siga viendo y habandonemos el elemnto hero
    // Cambio de header
    $(window).on('scroll', function() {
        let posicion = $('#pr').offset()
        if ($(window).scrollTop() >= posicion.top) {
            $('header').removeClass('transparente');
        } else {
            $('header').addClass('transparente')
        }   
        
    })
    // Accionamiento del menú Lateral
    $('#burguer').click(function() {//0.1.. el metodo tooggleClass nos srive para que se vea o no el menu cuando el usuario se hace click en las lineas como un conmutador apaga o prende//
        $('#burguer').toggleClass('abierto');/* aca lo mismo para boton burguer o sea las lineas no trae la clase abierto para ver los efectos */ 
        $('.menu').toggleClass('abierto');// parte de 0.1*/
    })
    //Smooth scroll pulsar en la felcha hacia abajo ya pasar hacia abajo paero aca lo que hacvemos es que el paso se abien
    $('a').on('click', function() {
        if (this.hash !=='') {
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })


})