const bod = $('body');

const nickname = $('#nickname').html('Cull');
const favorites = $('#favorites').html('Tennis, Running, Coding');
const hometown = $('#hometown').html('Avalon Beach');

// we want to add classname and a style of red for each list item.
const listitems = $('li');

listitems.css('color', 'red').addClass('yeew');

const image = $('<img>');
image.attr('src', 'https://via.placeholder.com/300');
bod.append(image);
