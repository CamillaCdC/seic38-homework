Rails.application.routes.draw do

  # home page
  root :to => 'pages#home'

  #to the magic 8 ball game
  get '/magic8' => 'magic8#form'
  # to the result of the magic 8 ball game
  get '/magic8/result' => 'magic8#result'

  #to the guess number game
  get '/guess' => 'guess#form'
  # to the result of the guess number game
  get '/guess/result' => 'guess#result'

  # to the Rock-Paper-Scissors game (shortly: rps)
  get '/rps' => 'rps#choose'
  #to the page of player choice
  get '/rps/:id' => 'rps#result'
end
