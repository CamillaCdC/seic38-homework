
const url = 'https://rickandmortyapi.com/api/character'

var namebutton = $("#buttonname").click(function(){

var random = Math.floor(Math.random() * 19)
        $.ajax(`https://rickandmortyapi.com/api/character/${random}`, {
          success: function (data) {
            var name = data.name
            console.log(data)
            var image = data.image
            console.log(image)
            var mortalstatus = data.status
            var species = data.species
            var origin = data.origin.name
            var gender = data.gender

            $('#character').text("Name: " + name);
            $('#gender').text("Gender: " + gender);
            $('#origin').text("Origin: " + origin);
            $('#species').text("Species: " + species);
            $('#mortalstatus').text("Mortal status: " + mortalstatus);
            $('#characterimage').attr("src", image);


    }
  });
});


var aliveoutput = $("#alive").click(function(){




    $.ajax(url, {
      success: function(data) {
        for (var i = 0; i <= 19; i++) {
          var statuses = data.results[i]["status"]

          console.log(statuses)

          //alive members
          if (statuses === "Alive") {
          const charsalive =  data.results[i]["name"]
            console.log(charsalive)
            $('body').append("Character is Alive: " + charsalive);


            var imageofalive = data.results[i]["image"]
            console.log(imageofalive)
            var img = $('<img />');
            img.attr('src', imageofalive)
            img.appendTo('body');


          }
        }
      }
    });

});

$.ajax(url, {
  success: function(data) {
  var deadoutput = $("#dead").click(function() {

      for (var i = 0; i <= 19; i++) {
        var statuses = data.results[i]["status"]
        //all dead members
        if (statuses === "Dead") {
          const charsdead =  data.results[i]["name"]
            console.log(charsdead)
            $('body').append("Character is Dead: " + charsdead);


            var imageofdead = data.results[i]["image"]
            console.log(imageofdead)
            var img = $('<img />');
            img.attr('src', imageofdead)
            img.appendTo('body');
          }
        }
      });
    }
  });
