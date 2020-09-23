
document.getElementById('cat-can-walk').addEventListener('click',function(){
  const image = document.querySelector('img');
  image.style.left = '0px';
  const imageWidth = 300;
  const pageWidth = window.innerWidth;
  const stopWalkingWidth = pageWidth-imageWidth;

  const catWalk = function () {

    let walkingToRight = parseInt(image.style.left);
    walkingToRight += 10;
    image.style.left = `${walkingToRight}px`;
    if (walkingToRight > stopWalkingWidth){
      clearInterval(stop);
    }
  }
  let stop = setInterval(catWalk,50);
});



document.getElementById('cat-dumb-walk').addEventListener('click', function(){
  const image = document.querySelector('img');
  image.style.left = '0px';

  const imageWidth = 300;
  const pageWidth = window.innerWidth;
  const stopWalkingWidth = pageWidth-imageWidth;
  let toIterateIndex = 0;

  const catWalk = function () {

    let walkingToRight = parseInt(image.style.left);

    if (walkingToRight<stopWalkingWidth && toIterateIndex === 0){
      walkingToRight += 10;
      image.style.left = `${walkingToRight}px`;
    }else{
      toIterateIndex =1;
    }
    if (walkingToRight>=0 && toIterateIndex === 1){

      walkingToRight -=10;
      image.style.left = `${walkingToRight}px`;
    }else{
      toIterateIndex = 0;
    }

  }
  setInterval(catWalk,50);

})

document.getElementById('cat-walk').addEventListener('click', function (){
  const image = document.querySelector('img');
  const dancingImg = document.querySelector('.dancing-cat');

  image.style.left = '0px';
  const imageWidth = 300;
  const pageWidth = window.innerWidth;
  const stopWalkingWidth = pageWidth-imageWidth;
  let toIterateIndex = 0;

  const catWalk = function () {

    let walkingToRight = parseInt(image.style.left);

    if (walkingToRight<stopWalkingWidth && toIterateIndex === 0){
      image.style['transform'] = 'rotateY(0deg)';
      walkingToRight += 10;
      image.style.left = `${walkingToRight}px`;
    }else{
      toIterateIndex =1;

      }
    if (walkingToRight>=0 && toIterateIndex === 1){
      image.style['transform'] = 'rotateY(180deg)';
      walkingToRight -=10;
      image.style.left = `${walkingToRight}px`;
    }else{
      toIterateIndex = 0;

    };

  }
  setInterval(catWalk,50);
})

document.getElementById('disco-time').addEventListener('click', function (){
  const image = document.querySelector('.walking');
  const dancingCat = document.createElement('img');
  dancingCat.src = "js/dancing.gif";
  dancingCat.className = 'dancing-cat';
  document.body.appendChild(dancingCat);
  const dancingImg = document.querySelector('.dancing-cat');
  const hide = document.querySelector('div');

  image.style.left = '0px';

  const imageWidth = 300;
  const pageWidth = window.innerWidth;
  const stopWalkingWidth = pageWidth-imageWidth;

  let toIterateIndex = 0;

  const discoLight = ['red','yellow','purple','pink','green'];
  let dicoLightIndex = 0;


  const catWalk = function () {

    let walkingToRight = parseInt(image.style.left);

    if (walkingToRight<stopWalkingWidth && toIterateIndex === 0){
      dancingImg.style['opacity'] = 1;
      image.style['transform'] = 'rotateY(0deg)';
      if(walkingToRight > Math.floor(pageWidth/2)-148 && walkingToRight < pageWidth/2){
        if(dicoLightIndex === discoLight.length-1){
          dicoLightIndex = 0;
        };
        document.body.style['background-color'] = discoLight[dicoLightIndex];
        document.body.style['transition'] = '0.2s all';
        dicoLightIndex +=1;
        dancingImg.style['position'] = 'absolute';
        dancingImg.style.left = pageWidth/2-148+'px';
        dancingImg.style['visibility'] =  'visible';
        image.style['visibility'] = 'hidden';
        walkingToRight += 2.35;

      }else{

        dancingImg.style['visibility'] = 'hidden';
        image.style['visibility'] = 'visible';
        walkingToRight += 10;
      }

      image.style.left = `${walkingToRight}px`;

    }else{
      toIterateIndex =1;
    }

    if (walkingToRight>=0 && toIterateIndex === 1){
      image.style['transform'] = 'rotateY(180deg)';
      if(walkingToRight > Math.floor(pageWidth/2)-248 && walkingToRight < pageWidth/2-100){

        if(dicoLightIndex === discoLight.length-1){
          dicoLightIndex = 1;
        };
        document.body.style['background-color'] = discoLight[dicoLightIndex];
        document.body.style['transition'] = '0.2s all';
        dicoLightIndex +=1;

        dancingImg.style['position'] = 'absolute';
        dancingImg.style.left = pageWidth/2-148+'px';
        dancingImg.style['visibility'] =  'visible';
        dancingImg.style['transform'] = 'rotateY(180deg)';
        image.style['visibility'] = 'hidden';

        walkingToRight -= 2.35;
      }else{
        dancingImg.style['visibility'] =  'hidden';
        image.style['visibility'] = 'visible';
        walkingToRight -=10;
      }

    image.style.left = `${walkingToRight}px`;
    }else{
      toIterateIndex = 0;
    }
  }
  setInterval(catWalk,50);

})

document.getElementById('refresh').addEventListener('click', function (){
  location.reload();
})
// // Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing,
// // keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
// //
// // Bonus #4: Pretty much go nuts or whatever.
