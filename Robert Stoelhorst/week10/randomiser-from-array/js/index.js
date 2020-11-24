console.log("is this piece of shit working");

const techStacks = ["JavaScript", "jQuery", "Python", "Ruby", "Rails", "Ajax", "React", "Vue.js"];

const random = function (count = 0) {
  const getRan = techStacks[Math.floor ( Math.random() * techStacks.length )];
    if (count >= 10) {
      return;
    } else {
      count ++;
      random(count);
    } if (count < 2) {
      console.log(`this function has run ${ count } time and we think you should practice`, getRan);
    } else {
      console.log(`this function has run ${ count } times and we think you should practice`, getRan);
    }
  };

random();
