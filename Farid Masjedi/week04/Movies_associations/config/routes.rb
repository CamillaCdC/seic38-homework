Rails.application.routes.draw do
  root :to => 'pages#home'
  resources :movies
  resources :directors
end
