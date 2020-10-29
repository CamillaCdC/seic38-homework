$(document).ready(function() {
  const $form = $('#input-form');
  $form.on('submit', apiCall);
});

//----------------------------- API call -------------------------//

const apiCall = function(event) {
  event.preventDefault();

  const url = `https://www.foaas.com/operations`;

  $.ajax(url).done(function(data) {

    const number = Math.floor((Math.random() * 94) + 1); // 94 objects, randomise responses.
    let str = data[number].url;                          // select a random data object
    let res;                                             // initialize result

    data.forEach((item) => {                          // loop through ajax response

      const name = $('#name').val();                     // get input values
      const from = $('#from').val();

      if (str.includes(':name') ||                       // check for values
          str.includes(':from') ||
          str.includes(':company') ||
          str.includes(':reaction') ||
          str.includes(':tool') ||
          str.includes(':behaviour') ||
          str.includes(':do') ||
          str.includes(':thing') ||
          str.includes(':reference') ||
          str.includes(':language') ||
          str.includes(':something')) {
            const str2 = str.replace(/:name/g, name);    // if present, replace with input value
            const str3 = str2.replace(/:from/g, from);
            const str4 = str3.replace(/:company/g, name)
            const str5 = str4.replace(/:reaction/g, 'FUCK OFF!!');  // or hard coded value
            const str6 = str5.replace(/:tool/g, 'Rails');
            const str7 = str6.replace(/:behaviour/g, name);
            const str8 = str7.replace(/:do/g, 'fucking');
            const str9 = str8.replace(/:something/g, 'fuck');
            const str10 = str9.replace(/:thing/g, 'bitch');
            const str11 = str10.replace(/:reference/g, 'Yo Mama');
            res = str11.replace(/:language/g, 'Javascript');
          }
    });
    newWindow(res);                                   // initiate function to display random result
  }).fail(function() {
    console.error('There was error!');
  });
};

//------------------ Open concatenated url in new window ---------//

const newWindow = function (str) {
  const res = "https://foaas.com" + str;
  window.open(res);
}
