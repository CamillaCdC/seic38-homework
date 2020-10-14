
const catImg = $('img')
const body = $('body')


const catDown = function(){
    catImg.animate({marginTop: "+=300px"}, 300)
}


const catWalk = function() {
    catImg.animate({marginLeft: "+=960px"}, 300)
    catDown()

}

catWalk()

const catBackwards = function(e) {
  catImg.animate({marginLeft: "-=960px"}, 300)
  console.log("clicked")

}


$("#come-back").on('click', catBackwards)

const partyTime = function(event) {
    body.css("background-color", "fuchsia")
    catWalk(catBackwards())

}

$("#party-time").on('click', partyTime)
