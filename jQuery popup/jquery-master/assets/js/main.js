$( () => { //function() {}
  $(".popup-link").on('click',(e) => {
    e.preventDefault();
    $('.brand-popup').show();
    //$('.brand-popup').removeClass('hide');
    //$('.brand-popup').addClass('show');

  });

  $(".brand-popup .popup-close").on('click',(e) => {
    e.preventDefault();
    $('.brand-popup').hide();
    //$('.brand-popup').removeClass('show');
    //$('.brand-popup').addClass('hide');
  })

// alert('Parent element of #inrDiv: ' + $('#inrDiv').parent().html());
// var padre=$('#inrDiv').parent();
// console.log(padre)
// var children=$('#myDiv').children();
// console.log(children)
// $('#myDiv').children().each(function (index) {
//         alert('Index: ' + index + ', html: ' + $(this).html());
//     });
alert('Parents element to #inrDiv: ' + $('#inrDiv').siblings().html());
var padres=$('#inrDiv').parents('div');
console.log(padres)

// $('p').text('<span>Nuevo texto</span>')
// $('li').html('<a href="#">Enlace</a>')
});
