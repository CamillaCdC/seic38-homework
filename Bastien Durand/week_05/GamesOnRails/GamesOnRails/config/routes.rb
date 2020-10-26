Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic' => 'magic#magicball'
  get '/magicball_result' => 'magic#magicball_result'

  get '/secretnumber' => 'secret#secretnumber'
  get '/secretnumber_win' => 'secret#secretnumber_win'
  get '/secretnumber_lose' => 'secret#secretnumber_lose'

end
