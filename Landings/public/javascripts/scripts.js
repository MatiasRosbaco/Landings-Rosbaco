const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
    autoplay: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  $('.section-img360 .thumb').on('click', function(){
    $('.modal').modal();

  });
  $( "#datepicker" ).datepicker({ dateFormat: 'dd/mm/yy' });

  $('#agente').change(function () {
    if($(this).hasClass('active')){
      $('.daySelect').hide();
      $(this).removeClass('active');
    }else{
      $(this).addClass('active');
      $('.daySelect').show();
    }
 });





$('input, textarea').on('change', function(){
  var nombre = $('#name').val(),
  email = $('#email').val(),
  telefono = $('#tel').val(),
  fecha = $('#datepicker').val(),
  mensaje = $('#message').val();


  if(nombre != '' && email != '' && telefono != '' && mensaje != ''){
    $( "form button" ).prop( "disabled", false );
  }
});


$('form').on('submit', function(e){
  $('.loading').show();
  e.preventDefault();

  var nombre = $('#name').val(),
  email = $('#email').val(),
  telefono = $('#tel').val(),
  fecha = $('#datepicker').val(),
  mensaje = $('#message').val();
var data = {
  "doNotCall": false,
  "email": email,
  "fechaEntrevista": fecha,
  "lastName": nombre,
  "leadSource": nombre,
  "mensajeWeb": mensaje,
  "name": nombre,
  "phone": telefono,
  "preferenciaHorarioContactacion": "8 a 12",
  "utm_source": "fb",
  "utm_medium": "Facebook_Right_Column",
  "utm_campaign":"Campaña_de_Prueba",
  "utm_content": "Coliving_Prueba",
  "utm_segmento": "INVERSOR-PRUEBA-REAL_ESTATE",
  "utm_edad" : "40",
  "utm_placement": "prueba placement1",
  "utm_zona": "prueba zona 1",
  "utm": "utm prueba 1",
  "proyectoInteresManual": "General"
}


var ajaxurl = 'https://rosbaco-backend.herokuapp.com/landing/lead';
$.post({
  url: ajaxurl,
  type: "POST",
  headers:{"content-type":"application/json"},
  dataType: 'json',
  data: JSON.stringify(data)
})
.done((data, status) => {
    $('.loading').hide();
    console.log(data, status);


});


});
