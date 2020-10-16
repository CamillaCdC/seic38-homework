Rails.application.routes.draw do
  root :to => 'pages#home'

    get '/magic' => 'magic#question'
    get 'magic/result' => 'magic#result'

    get '/secret_number' => 'secret_number#guess'
    get 'secret_number/win' => 'secret_number#win'
    get 'secret_number/lose' => 'secret_number#lose'
end
