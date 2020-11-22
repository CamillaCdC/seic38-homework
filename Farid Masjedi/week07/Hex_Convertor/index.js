$(document).ready( function () {

  $('#rgb_to_hex').on('submit', function(e) {
    e.preventDefault();
    const $r = convertorToHex($("#r").val());
    const $g = convertorToHex($("#g").val());
    const $b = convertorToHex($("#b").val());

    if (($r  !== 'error') && ($g !== 'error') && ($b !== 'error')){
      const $hex = "#"+$r+$g+$b;

      $('#r_h').val($r);
      $('#g_h').val($g);
      $('#b_h').val($b);

      $('body').css('background-color',$hex);
    }


  })

  _onChange($('#r'));
  _onChange($('#g'));
  _onChange($('#b'));


  $('#hex_to_rgb').on('submit', function(e) {
    e.preventDefault();

    const $r = convertorToRGB($("#r_h").val() );
    const $g = convertorToRGB($("#g_h").val() );
    const $b = convertorToRGB($("#b_h").val() );
    const $hex = "#"+$("#r_h").val()+$("#g_h").val()+$("#b_h").val();

    $('#r').val($r);
    $('#g').val($g);
    $('#b').val($b);

    $('body').css('background-color',`rgb(${$r},${$g},${$b})`);

    $('#rgb-value').text(`rgb( ${$r}, ${$g}, ${$b} )`)
    $('#hex-value').text($hex);

  })

})

///////////on change the RGB values/////////////
const _onChange = function($elem) {
  $elem.on('change', function() {
    const $r = convertorToHex($("#r").val());
    const $g = convertorToHex($("#g").val());
    const $b = convertorToHex($("#b").val());
    if (($r  !== 'error') && ($g !== 'error') && ($b !== 'error')){
      const $hex = "#"+$r+$g+$b;

      $('#r_h').val($r);
      $('#g_h').val($g);
      $('#b_h').val($b);

      $('body').css('background-color',$hex)

      $('#rgb-value').text(`rgb( ${$("#r").val()}, ${$("#g").val()}, ${$("#b").val()} )`)
      $('#hex-value').text($hex);
    }

  })
}
