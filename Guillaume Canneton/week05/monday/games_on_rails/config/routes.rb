Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root :to => 'pages#home'

get 'magic' => 'magic#query'
get 'magic/answer' => 'magic#answer'

get 'secretnumber' => 'secretnumber#home'
get 'secretnumber/play' => 'secretnumber#play'

get 'rockpaperscissors' => 'rockpaperscissors#home'
get 'rockpaperscissors/:throw' => 'rockpaperscissors#throw'


end
