Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  get '/questions' => 'questions#main'
  get '/questions/answer' => 'questions#answer'

  get '/numbers' => 'numbers#main'
  get '/numbers/decide' => 'numbers#result'

  get '/rps' => 'rps#main'
  get '/rps/play' => 'rps#play'

end

