const state = { currency: 'USD', conversion: 'EUR'}

const getDollarData = function(start, end, currency, base ) {
  let url = `https://api.exchangeratesapi.io/history?start_at=${ start }&end_at=${ end}&symbols=${ currency }&base=${ base }`
  
  $.ajax(url, function( data ){
  }).done( function( data ){
    dates = _.keys(data.rates).sort()
    rates = _.map(dates, n => data.rates[n][state.currency])
    displayChart( dates, rates, base.conversion )

  })
};

const displayChart = function( dates, rates, base ) {
  
  var ctx = $('#myChart')[0].getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dates,
        datasets: [{
            label: `$${ state.conversion } vs $${ state.currency }`,
            data: rates,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
};


$(document).ready(function (){
  let currencies = ["BGN", "NZD", "ILS", "RUB", "CAD", "USD", "PHP", "CHF", "ZAR", "AUD", "JPY", "TRY", "HKD", "MYR", "THB", "HRK", "NOK", "IDR", "DKK", "CZK", "HUF", "GBP", "MXN", "KRW", "ISK", "SGD", "BRL", "PLN", "INR", "RON", "CNY", "SEK"]
  
  _.each(currencies, function ( code ){
    element = $('<option>', { value: code, text: code } )
    $('#currency').append(element)
  })
  
  _.each(currencies, function ( code ){
    element = $('<option>', { value: code, text: code } )
    $('#currency-to').append(element)
  })
  
  
  
  $('#search').on('submit', function(){
    $('#myChart').empty()
    event.preventDefault();
    
    $startDate = $('#start').val()
    $endDate = $('#end').val()
    state.currency = $('#currency').val()
    state.conversion = $('#currency-to').val()
    
    
    getDollarData( $startDate, $endDate, state.currency, state.conversion )
  })
  
  
  
  
  
  
  
})